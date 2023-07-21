import { StyleSheet, View } from "react-native";
import React from "react";
import Tag from "@src/components/Tag";
import { TagType } from "@src/types/tag.type";

type TagRowProps = {
	tags: TagType[];
};
const TagRow = ({ tags }: TagRowProps) => {
	return (
		<View style={styles.tagRow}>
			{tags.map((tag, index) => (
				<Tag {...tag} key={index.toString()} />
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	tagRow: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-start",
		gap: 10,
		alignSelf: "center",
	},
});

export default TagRow;
