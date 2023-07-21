import { TagType } from "@src/types/tag.type";
import { render, screen } from "@testing-library/react-native";
import TagRow from "@src/components/TagRow";
import React from "react";

describe("TagRow", () => {
	const generateTagList = () => {
		const tagList: TagType[] = [];

		for (let i = 1; i <= 100; i++) {
			const tag = {
				text: i.toString(),
				backgroundColor: "transparent",
			};
			tagList.push(tag);
		}

		return tagList;
	};
	it("should render correctly", () => {
		const tagList = generateTagList();
		render(<TagRow tags={tagList} />);
		expect(screen.toJSON()).toMatchSnapshot();
	});
});
