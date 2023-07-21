import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { perfectSize } from "@utils/perfect-size";
import { TEXT_SUBTITLE_SIZE } from "@lib/constants";
import { useFilters } from "@filters/store/filters-slice";

const FilterButton = () => {
	const filterPokemons = useFilters((state) => state.filterPokemons);
	return (
		<Pressable style={styles.container} onPress={filterPokemons}>
			<Text style={styles.text}>Filter</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "black",
		height: "100%",
		width: perfectSize(100),
		borderTopRightRadius: perfectSize(20),
		borderBottomRightRadius: perfectSize(20),
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "white",
		fontSize: TEXT_SUBTITLE_SIZE,
	},
});

export default FilterButton;
