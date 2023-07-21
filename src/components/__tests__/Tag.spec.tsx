import { TagType } from "@src/types/tag.type";
import Tag from "@src/components/Tag";
import { render, screen } from "@testing-library/react-native";
import React from "react";

describe("Tag", () => {
	it.each([
		[{ text: "tag1", backgroundColor: "red" }],
		[
			{
				text: "tag2",
				backgroundColor: "red",
				textColor: "black",
				borderColor: "blue",
			},
		],
		[
			{
				text: "tag3",
				backgroundColor: "transparent",
				textColor: "black",
				borderColor: "green",
			},
		],
	])("should render correctly '%s' tag", (tag: TagType) => {
		render(<Tag {...tag} />);
		expect(screen.toJSON()).toMatchSnapshot();
	});
});
