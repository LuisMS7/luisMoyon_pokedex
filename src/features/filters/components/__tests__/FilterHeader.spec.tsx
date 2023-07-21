import React from "react";
import { render, screen } from "@testing-library/react-native";
import FilterHeader from "@filters/components/FilterHeader";

describe("FilterHeader", () => {
	it("should render correctly", () => {
		render(<FilterHeader />);

		expect(screen.toJSON()).toMatchSnapshot();
	});
});
