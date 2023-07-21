import React, { useCallback, useMemo } from "react";
import { Image, Platform, SafeAreaView, StyleSheet, View } from "react-native";
import { PokemonNavigationProps } from "@pokemon/types/pokemon-navigator.type";
import { Pokemon } from "@pokemon/types/pokemon.type";
import SvgUri from "react-native-svg-uri";
import { perfectSize } from "@utils/perfect-size";
import { TEXT_SUBTITLE_SIZE, TEXT_TITLE_SIZE } from "@lib/constants";
import { TypeColor } from "@pokemon/utils/color-by-type";
import PokemonDetailsHeader from "@pokemon/components/PokemonDetailsHeader";
// eslint-disable-next-line max-len
import PokemonDetailsInfoBackground from "@pokemon/components/PokemonDetailsInfoBackground";
import PokemonDetailsInfoCard from "@pokemon/components/PokemonDetailsInfoCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type PokemonDetailsScreenProps = PokemonNavigationProps<"PokemonDetailsScreen">;

const PokemonDetailsScreen = ({ route }: PokemonDetailsScreenProps) => {
	const pokemon: Pokemon = route.params.pokemon;
	const { top } = useSafeAreaInsets();

	const typeColor = useMemo(() => {
		return TypeColor[pokemon.types[0].type.name];
	}, [pokemon]);

	const getPokemonImg = useCallback(() => {
		if (
			pokemon?.img &&
			(pokemon?.img.endsWith("jpg") || pokemon?.img.endsWith("png"))
		) {
			return (
				<Image
					source={{ uri: pokemon.img }}
					style={{ height: perfectSize(200), width: "50%" }}
					resizeMode={"contain"}
				/>
			);
		} else if (pokemon?.img && pokemon?.img.endsWith("svg")) {
			return (
				<SvgUri
					source={{ uri: pokemon?.img }}
					height={perfectSize(250)}
				/>
			);
		}
		return null;
	}, [pokemon]);

	return (
		<View
			style={{
				...styles.container,
				backgroundColor: typeColor,
				paddingTop: Platform.OS === "android" ? top : 0,
			}}
		>
			<SafeAreaView style={styles.container}>
				<PokemonDetailsHeader pokemon={pokemon} />
				<View style={styles.image}>{getPokemonImg()}</View>
				<PokemonDetailsInfoCard
					pokemon={pokemon}
					typeColor={typeColor}
				/>
				<PokemonDetailsInfoBackground />
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: "100%",
		flexDirection: "column",
	},
	idText: {
		width: "100%",
		textAlign: "right",
		padding: perfectSize(20),
		fontSize: TEXT_SUBTITLE_SIZE,
	},
	image: {
		alignItems: "center",
		marginTop: 10,
	},
	nameText: {
		fontSize: TEXT_TITLE_SIZE,
		color: "white",
		paddingVertical: perfectSize(20),
		textAlign: "center",
	},
});

export default PokemonDetailsScreen;
