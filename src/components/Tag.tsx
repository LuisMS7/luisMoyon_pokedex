import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BOLD_WEIGHT, TEXT_SMALL_SIZE } from "@lib/constants";
import { TagType } from "@src/types/tag.type";

type TagProps = TagType;

const Tag = ({
	text,
	backgroundColor,
	textColor = "white",
	borderColor = "transparent",
	fontWeight = BOLD_WEIGHT,
}: TagProps) => {
	return (
		<View
			style={{
				...styles.tag,
				backgroundColor: backgroundColor,
				borderColor: borderColor,
			}}
		>
			<Text
				style={{
					...styles.tagText,
					color: textColor,
					fontWeight: fontWeight,
				}}
			>
				{text}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	tag: {
		borderRadius: 1000,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderWidth: 1,
	},
	tagText: {
		color: "white",
		fontWeight: BOLD_WEIGHT,
		fontSize: TEXT_SMALL_SIZE,
	},
});

export default Tag;
