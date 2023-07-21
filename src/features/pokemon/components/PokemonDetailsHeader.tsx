import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Pokemon } from "@pokemon/types/pokemon.type";
import { useNavigation } from "@react-navigation/native";
import { PokemonNavigationType } from "@pokemon/types/pokemon-navigator.type";
import { BOLD_WEIGHT, TEXT_BIG_SIZE, TEXT_SUPER_SIZE } from "@lib/constants";
import { titlecase } from "@utils/string-formatter";
import { ArrowLeftIcon } from "@pokemon/assets/LeftArrowIcon";
import { perfectSize } from "@utils/perfect-size";
import BigPokeballIcon from "@pokemon/assets/BigPokeballIcon";

type PokemonDetailsHeaderProps = { pokemon: Pokemon };

const PokemonDetailsHeader = ({ pokemon }: PokemonDetailsHeaderProps) => {
	const navigation =
		useNavigation<PokemonNavigationType<"PokemonDetailsScreen">>();

	const goBack = () => navigation.goBack();

	return (
		<View style={styles.container}>
			<View style={styles.pokeballIcon}>
				<BigPokeballIcon />
			</View>
			<Pressable onPress={goBack} testID="back-button">
				<ArrowLeftIcon />
			</Pressable>
			<Text style={styles.nameText}>{titlecase(pokemon.name)}</Text>
			<Text style={styles.idText}>
				#{pokemon.id.toString().padStart(4, "0")}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		width: "100%",
		alignItems: "center",
		paddingHorizontal: 20,
	},
	pokeballIcon: {
		position: "absolute",
		top: 0,
		right: 0,
	},
	nameText: {
		fontSize: TEXT_SUPER_SIZE,
		fontWeight: BOLD_WEIGHT,
		color: "white",
		flex: 1,
		paddingLeft: perfectSize(7),
	},
	idText: {
		fontSize: TEXT_BIG_SIZE,
		fontWeight: BOLD_WEIGHT,
		color: "white",
	},
});

export default PokemonDetailsHeader;
