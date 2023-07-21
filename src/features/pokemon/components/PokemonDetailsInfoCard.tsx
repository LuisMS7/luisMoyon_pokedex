import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { perfectSize } from "@utils/perfect-size";
import { Pokemon } from "@pokemon/types/pokemon.type";
import { BOLD_WEIGHT, TEXT_BIG_SIZE, TEXT_TITLE_SIZE } from "@lib/constants";
import PokemonTypesInfo from "@pokemon/components/PokemonTypesInfo";
import PokemonSprites from "@pokemon/components/PokemonSprites";
import PokemonMovesInfo from "@pokemon/components/PokemonMovesInfo";

type PokemonDetailsInfoCardProps = {
	pokemon: Pokemon;
	typeColor: string;
};

const PokemonDetailsInfoCard = ({
	pokemon,
	typeColor,
}: PokemonDetailsInfoCardProps) => {
	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={styles.scrollView}
		>
			<PokemonTypesInfo pokemon={pokemon} />
			<Text style={{ ...styles.aboutTitle, color: typeColor }}>
				About
			</Text>
			<Text style={styles.weightKgText}>{pokemon.weight} kg</Text>
			<Text style={styles.weightKgText}>Weight</Text>
			<Text
				style={{
					...styles.aboutTitle,
					color: typeColor,
				}}
			>
				Sprites
			</Text>
			<PokemonSprites sprites={pokemon.sprites!} />
			<Text
				style={{
					...styles.aboutTitle,
					color: typeColor,
				}}
			>
				Moves
			</Text>
			<PokemonMovesInfo pokemon={pokemon} typeColor={typeColor} />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "95%",
		alignSelf: "center",
		flex: 1,
	},
	scrollView: {
		padding: perfectSize(20),
	},
	aboutTitle: {
		fontSize: TEXT_TITLE_SIZE,
		textAlign: "center",
		fontWeight: BOLD_WEIGHT,
		paddingVertical: 20,
	},
	weightKgText: {
		fontSize: TEXT_BIG_SIZE,
		textAlign: "center",
	},
});

export default PokemonDetailsInfoCard;
