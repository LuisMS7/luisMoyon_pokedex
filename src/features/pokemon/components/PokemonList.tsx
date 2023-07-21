import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import PokemonCard from "@pokemon/components/PokemonCard";
import { Pokemon } from "@pokemon/types/Pokemon.type";
import { perfectSize } from "@utils/perfect-size";

type PokemonListProps = {
	pokemons: Pokemon[];
};

const PokemonList = ({ pokemons }: PokemonListProps) => {
	const renderPokemonCard = (listItem: ListRenderItemInfo<Pokemon>) => {
		const pokemon: Pokemon = listItem.item;
		return <PokemonCard pokemon={pokemon} key={pokemon.name} />;
	};

	const ItemSeparator = () => {
		return <View style={styles.itemSeparator} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={pokemons}
				renderItem={renderPokemonCard}
				horizontal
				ListHeaderComponent={ItemSeparator}
				ItemSeparatorComponent={ItemSeparator}
				ListFooterComponent={ItemSeparator}
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
