import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import PokemonList from "@pokemon/components/PokemonList";
import { useApi } from "@hooks/useApi";
import getAllPokemons from "@pokemon/store/actions/get-all-pokemons";
import usePokemonStore from "@pokemon/store/pokemon-slice";
import LoadingModal from "@src/components/LoadingModal";

const HomeScreen = () => {
	const [offset, setOffset] = useState(0);
	const { request, loading, response } = useApi(() =>
		getAllPokemons(offset, 20),
	);
	const updatePokemons = usePokemonStore((state) => state.updatePokemons);
	const pokemons = usePokemonStore((state) => state.pokemons);

	useEffect(() => {
		request();
	}, []);

	useEffect(() => {
		if (response) {
			updatePokemons(response.results);
			setOffset((offset) => offset + 20);
		}
	}, [response?.next]);

	return (
		<SafeAreaView style={styles.container}>
			<PokemonList pokemonsItems={pokemons} loadMorePokemons={request} />
			<LoadingModal visible={loading} />
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
