import React, { useMemo } from "react";
import { Pokemon } from "@pokemon/types/Pokemon.type";
import { StyleSheet, Text, View } from "react-native";
import SvgUri from "react-native-svg-uri";
import { TypeColor } from "@pokemon/utils/color-by-type";
import { perfectSize } from "@utils/perfect-size";
import { TEXT_SUBTITLE_SIZE, TEXT_TITLE_SIZE } from "@lib/constants";
import { titlecase } from "@utils/string-formatter";

type PokemonCardType = {
	pokemon: Pokemon;
};
const PokemonCard = ({ pokemon }: PokemonCardType) => {
	const typeColor = useMemo(() => {
		return TypeColor[pokemon.types[0].type.name];
	}, [pokemon]);

	return (
		<View style={{ ...styles.container, borderColor: typeColor }}>
			<Text style={{ ...styles.idText, color: typeColor }}>
				#{pokemon.id.toString().padStart(4, "0")}
			</Text>
			<View style={styles.image}>
				<SvgUri
					source={{ uri: pokemon.img }}
					height={perfectSize(250)}
				/>
			</View>
			<Text style={{ ...styles.nameText, backgroundColor: typeColor }}>
				{titlecase(pokemon.name.toUpperCase())}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: perfectSize(350),
		height: "100%",
		borderRadius: perfectSize(16),
		borderWidth: perfectSize(4),
		flexDirection: "column",
	},
	idText: {
		width: "100%",
		textAlign: "right",
		padding: perfectSize(20),
		fontSize: TEXT_SUBTITLE_SIZE,
	},
	image: {
		flex: 1,
		alignItems: "center",
	},
	nameText: {
		fontSize: TEXT_TITLE_SIZE,
		color: "white",
		paddingVertical: perfectSize(20),
		textAlign: "center",
	},
});
export default PokemonCard;
