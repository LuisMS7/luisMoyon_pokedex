import React, { useEffect, useMemo, useState } from "react";
import { Pokemon } from "@pokemon/types/pokemon.type";
import { StyleSheet, Text, View } from "react-native";
import SvgUri from "react-native-svg-uri";
import { TypeColor } from "@pokemon/utils/color-by-type";
import { perfectSize } from "@utils/perfect-size";
import { TEXT_SUBTITLE_SIZE, TEXT_TITLE_SIZE } from "@lib/constants";
import { titlecase } from "@utils/string-formatter";
// eslint-disable-next-line max-len
import { PokemonListItemApiResponse } from "@pokemon/types/pokemon-list-api-response.type";
import { useApi } from "@hooks/useApi";
import getPokemonByName from "@pokemon/store/actions/get-pokemon-by-name";
import { PokemonApiResponse } from "@pokemon/types/pokemon-api-response.type";

type PokemonCardType = {
	pokemonItem: PokemonListItemApiResponse;
};
const PokemonCard = ({ pokemonItem }: PokemonCardType) => {
	const [pokemon, setPokemon] = useState<Pokemon>();
	const { request, response } = useApi<PokemonApiResponse>(() =>
		getPokemonByName(pokemonItem.name),
	);

	useEffect(() => {
		request();
	}, []);

	useEffect(() => {
		if (response && !pokemon) {
			const pokemonFetched: Pokemon = {
				id: response.id,
				name: response.name,
				img:
					response?.sprites?.other?.dream_world?.front_default ||
					response?.sprites?.front_default,
				types: response.types,
				weight: response.weight,
				sprites: response.sprites,
				moves: response.moves,
			};
			setPokemon(pokemonFetched);
		}
	}, [response]);

	const typeColor = useMemo(() => {
		return pokemon ? TypeColor[pokemon.types[0].type.name] : "white";
	}, [pokemon]);

	return (
		<View style={{ ...styles.container, borderColor: typeColor }}>
			<Text style={{ ...styles.idText, color: typeColor }}>
				#{pokemon?.id.toString().padStart(4, "0")}
			</Text>
			<View style={styles.image}>
				<SvgUri
					source={{ uri: pokemon?.img }}
					height={perfectSize(250)}
				/>
			</View>
			<Text style={{ ...styles.nameText, backgroundColor: typeColor }}>
				{titlecase(pokemon?.name.toUpperCase())}
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
