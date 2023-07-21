import React, { useCallback, useMemo } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { perfectSize } from "@utils/perfect-size";
import SvgUri from "react-native-svg-uri";
import { Sprites } from "@pokemon/types/pokemon-api-response.type";
// eslint-disable-next-line max-len
import extractStringsFromObject from "@pokemon/utils/extract-string-from-object";

type PokemonSpriteProps = {
	imgUrl: string;
};

const PokemonSprite = ({ imgUrl }: PokemonSpriteProps) => {
	const getPokemonImg = useCallback(() => {
		if (
			imgUrl.endsWith("jpg") ||
			imgUrl.endsWith("png") ||
			imgUrl.endsWith("gif")
		) {
			return (
				<Image
					source={{ uri: imgUrl }}
					style={{
						height: perfectSize(60),
						width: perfectSize(60),
					}}
					resizeMode={"cover"}
				/>
			);
		} else if (imgUrl.endsWith("svg")) {
			return (
				<SvgUri
					source={{ uri: imgUrl }}
					height={perfectSize(60)}
					width={perfectSize(60)}
				/>
			);
		}
		return null;
	}, [imgUrl]);
	return <View style={{ ...styles.stripeContainer }}>{getPokemonImg()}</View>;
};

type PokemonSpritesProps = {
	sprites: Sprites;
};
const PokemonSprites = ({ sprites }: PokemonSpritesProps) => {
	const spritesImages = useMemo(() => {
		return extractStringsFromObject(sprites);
	}, [sprites]);

	return (
		<ScrollView contentContainerStyle={styles.container} horizontal>
			{spritesImages.map((sprite, id) => (
				<PokemonSprite imgUrl={sprite} key={`sprite-${id}`} />
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		gap: perfectSize(10),
		alignSelf: "center",
	},
	stripeContainer: {
		borderRadius: 1000,
		height: perfectSize(80),
		width: perfectSize(80),
		alignItems: "center",
		justifyContent: "center",
	},
});

export default PokemonSprites;
