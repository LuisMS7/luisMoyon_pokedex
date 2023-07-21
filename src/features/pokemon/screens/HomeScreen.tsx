import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import PokemonList from "@pokemon/components/PokemonList";
import { useApi } from "@hooks/useApi";
import getAllPokemons from "@pokemon/store/actions/get-all-pokemons";
import usePokemonStore from "@pokemon/store/pokemon-slice";

const HomeScreen = () => {
	const { request, response } = useApi(() => getAllPokemons(0, 20));
	const updatePokemons = usePokemonStore((state) => state.updatePokemons);
	const pokemons = usePokemonStore((state) => state.pokemons);

	useEffect(() => {
		request();
	}, []);

	useEffect(() => {
		if (response) {
			updatePokemons(response.results);
		}
	}, [response?.next]);

	return (
		<SafeAreaView style={styles.container}>
			<PokemonList pokemonsItems={pokemons} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default HomeScreen;
