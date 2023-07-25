import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import {
	BOLD_WEIGHT,
	NORMAL_WEIGHT,
	TEXT_NORMAL_SIZE,
	TEXT_SMALL_SIZE,
} from "@lib/constants";
import { useFiltersStore } from "@filters/store/filters-slice";

const FilterByNameInput = () => {
	const pokemonName = useFiltersStore((state) => state.pokemonName);
	const setPokemonName = useFiltersStore((state) => state.setPokemonName);

	const handleChangeText = (inputText: string) => {
		setPokemonName(inputText);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Search</Text>
			<TextInput
				placeholder="Pokemon name"
				value={pokemonName}
				onChangeText={handleChangeText}
				style={styles.textInput}
				autoCapitalize="none"
				autoCorrect={false}
				testID="pokemon-name-text-input"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-around",
		height: "100%",
	},
	title: {
		fontWeight: BOLD_WEIGHT,
		fontSize: TEXT_SMALL_SIZE,
		paddingTop: 4,
	},
	textInput: {
		fontWeight: NORMAL_WEIGHT,
		fontSize: TEXT_NORMAL_SIZE,
		flex: 1,
	},
});

export default FilterByNameInput;
