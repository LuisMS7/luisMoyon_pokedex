import React from "react";
import { StyleSheet, View } from "react-native";
import { perfectSize } from "@utils/perfect-size";

const PokemonDetailsInfoBackground = () => {
	return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
	container: {
		width: "95%",
		alignSelf: "center",
		backgroundColor: "white",
		borderTopRightRadius: perfectSize(18),
		borderTopLeftRadius: perfectSize(18),
		position: "absolute",
		height: "78%",
		bottom: 0,
		zIndex: -10,
		paddingTop: perfectSize(80),
		paddingHorizontal: perfectSize(20),
	},
});

export default PokemonDetailsInfoBackground;
