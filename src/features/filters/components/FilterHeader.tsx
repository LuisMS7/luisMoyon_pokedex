import React from "react";
import { StyleSheet, View } from "react-native";
import FilterByNameInput from "@filters/components/FilterByNameInput";
import FilterButton from "@filters/components/FilterButton";
import { perfectSize } from "@utils/perfect-size";

const FilterHeader = () => {
	return (
		<View style={styles.container}>
			<View style={styles.searchByNameContainer}>
				<FilterByNameInput />
				<FilterButton />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		paddingHorizontal: perfectSize(20),
		height: perfectSize(60),
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: perfectSize(50),
	},
	searchByNameContainer: {
		width: "100%",
		flexDirection: "row",
		height: perfectSize(60),
		justifyContent: "center",
		alignItems: "center",
		borderRadius: perfectSize(20),
		borderColor: "black",
		borderWidth: 1,
		paddingLeft: perfectSize(20),
	},
});

export default FilterHeader;
