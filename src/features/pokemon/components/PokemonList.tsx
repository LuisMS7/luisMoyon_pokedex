import React, { useCallback, useEffect, useRef } from "react";
import {
	FlatList,
	ListRenderItemInfo,
	NativeScrollEvent,
	NativeSyntheticEvent,
	StyleSheet,
	View,
} from "react-native";
import PokemonCard from "@pokemon/components/PokemonCard";
import { perfectSize } from "@utils/perfect-size";
// eslint-disable-next-line max-len
import { PokemonListItemApiResponse } from "@pokemon/types/pokemon-list-api-response.type";

type PokemonListProps = {
	pokemonsItems: PokemonListItemApiResponse[];
	loadMorePokemons: () => void;
};

const PokemonList = ({ pokemonsItems, loadMorePokemons }: PokemonListProps) => {
	const isFetchingData = useRef(false);
	const fetchTimeout = useRef<NodeJS.Timeout>();
	const renderPokemonCard = useCallback(
		(listItem: ListRenderItemInfo<PokemonListItemApiResponse>) => {
			const pokemonItem: PokemonListItemApiResponse = listItem.item;
			return (
				<PokemonCard pokemonItem={pokemonItem} key={pokemonItem.name} />
			);
		},
		[],
	);

	useEffect(() => {
		return () => {
			if (fetchTimeout.current) {
				clearTimeout(fetchTimeout.current);
			}
		};
	}, []);

	const ItemSeparator = () => {
		return <View style={styles.itemSeparator} />;
	};

	const handleScroll = ({
		nativeEvent,
	}: NativeSyntheticEvent<NativeScrollEvent>) => {
		const contentOffsetX = nativeEvent.contentOffset.x;
		const contentSizeWidth = nativeEvent.contentSize.width;
		const layoutSizeWidth = nativeEvent.layoutMeasurement.width;
		if (
			contentSizeWidth - (contentOffsetX + layoutSizeWidth) <= 100 &&
			pokemonsItems.length > 1
		) {
			if (!isFetchingData.current) {
				isFetchingData.current = true;
				fetchTimeout.current = setTimeout(() => {
					loadMorePokemons();
					isFetchingData.current = false;
				}, 500);
			}
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.listContainer}>
				<FlatList
					data={pokemonsItems}
					renderItem={renderPokemonCard}
					horizontal
					ListHeaderComponent={ItemSeparator}
					ItemSeparatorComponent={ItemSeparator}
					ListFooterComponent={ItemSeparator}
					onScroll={handleScroll}
					style={styles.list}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	itemSeparator: {
		width: perfectSize(20),
	},
	container: {
		flex: 1,
		alignSelf: "center",
		justifyContent: "center",
	},
	listContainer: { height: "70%" },
	list: { height: "70%", flex: 1 },
});

export default PokemonList;
