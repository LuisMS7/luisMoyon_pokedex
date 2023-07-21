import React, { useEffect, useState } from "react";
import { Image, Platform, SafeAreaView, StyleSheet, View } from "react-native";
import PokemonList from "@pokemon/components/PokemonList";
import { useApi } from "@hooks/useApi";
import getAllPokemons from "@pokemon/store/actions/get-all-pokemons";
import { usePokemonStore } from "@pokemon/store/pokemon-slice";
import LoadingModal from "@src/components/LoadingModal";
import FilterHeader from "@filters/components/FilterHeader";
import { useFilters } from "@filters/store/filters-slice";
import getPokemonByName from "@pokemon/store/actions/get-pokemon-by-name";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSnackbar } from "@hooks/useSnackbar";

const HomeScreen = () => {
	const [offset, setOffset] = useState(0);
	const { request, loading, response } = useApi(() =>
		getAllPokemons(offset, 20),
	);
	const {
		request: filterPokemons,
		loading: searchLoading,
		error: errorFilter,
		response: filteredResponse,
	} = useApi(() => getPokemonByName(filters.pokemonName));
	const updatePokemons = usePokemonStore((state) => state.updatePokemons);
	const pokemons = usePokemonStore((state) => state.pokemons);
	const setPokemons = usePokemonStore((state) => state.setPokemons);
	const clearPokemons = usePokemonStore((state) => state.clearPokemons);
	const filters = useFilters((state) => state.filters);
	const { showSnackbar } = useSnackbar();
	const { top } = useSafeAreaInsets();
	useEffect(() => {
		if (response) {
			updatePokemons(response.results);
			setOffset((offset) => offset + 20);
		}
	}, [response]);

	const getFilteredPokemons = async () => {
		if (filters.pokemonName) {
			filterPokemons();
		} else if (!filters.pokemonName && pokemons.length <= 1 && !loading) {
			clearPokemons();
			request();
		}
	};

	useEffect(() => {
		getFilteredPokemons();
	}, [filters]);

	useEffect(() => {
		if (filteredResponse) {
			setOffset(0);
			setPokemons(filteredResponse);
		}
	}, [filteredResponse]);

	useEffect(() => {
		if (errorFilter) {
			showSnackbar("Pokemon does not exist");
		}
	}, [errorFilter]);

	return (
		<View
			style={{
				...styles.container,
				paddingTop: Platform.OS === "android" ? top : 0,
			}}
		>
			<SafeAreaView style={styles.container}>
				<Image
					source={require("@assets/pokedex-banner.png")}
					style={{ height: "20%" }}
					resizeMode="center"
				/>
				<FilterHeader />
				<PokemonList
					pokemonsItems={pokemons}
					loadMorePokemons={request}
				/>
				<LoadingModal visible={loading || searchLoading} />
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "flex-start",
	},
});

export default HomeScreen;
