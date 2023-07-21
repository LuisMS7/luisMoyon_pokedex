import React, { useCallback } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import PokemonCard from "@pokemon/components/PokemonCard";
import { perfectSize } from "@utils/perfect-size";
// eslint-disable-next-line max-len
import { PokemonListItemApiResponse } from "@pokemon/types/pokemon-list-api-response.type";

type PokemonListProps = {
	pokemonsItems: PokemonListItemApiResponse[];
	loadMorePokemons: () => void;
};

const PokemonList = ({ pokemonsItems, loadMorePokemons }: PokemonListProps) => {
	const renderPokemonCard = useCallback(
		(listItem: ListRenderItemInfo<PokemonListItemApiResponse>) => {
			const pokemonItem: PokemonListItemApiResponse = listItem.item;
			return (
				<PokemonCard pokemonItem={pokemonItem} key={pokemonItem.name} />
			);
		},
		[],
	);

	const ItemSeparator = () => {
		return <View style={styles.itemSeparator} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={pokemonsItems}
				renderItem={renderPokemonCard}
				horizontal
				ListHeaderComponent={ItemSeparator}
				ItemSeparatorComponent={ItemSeparator}
				ListFooterComponent={ItemSeparator}
				onScroll={({ nativeEvent }) => {
					const contentOffsetX = nativeEvent.contentOffset.x;
					const contentSizeWidth = nativeEvent.contentSize.width;
					const layoutSizeWidth = nativeEvent.layoutMeasurement.width;
					if (
						contentSizeWidth - (contentOffsetX + layoutSizeWidth) <=
						100
					) {
						loadMorePokemons();
					}
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	itemSeparator: {
		width: perfectSize(20),
	},
	container: {
		height: "50%",
	},
});

export default PokemonList;
