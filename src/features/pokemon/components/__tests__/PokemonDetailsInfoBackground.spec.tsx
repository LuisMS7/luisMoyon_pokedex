import React from "react";
import { render, screen } from "@testing-library/react-native";
// eslint-disable-next-line max-len
import PokemonDetailsInfoBackground from "@pokemon/components/PokemonDetailsInfoBackground";

describe("PokemonDetailsInfoBackground", () => {
	it("should render correctly", () => {
		render(<PokemonDetailsInfoBackground />);
		expect(screen.toJSON()).toMatchSnapshot();
	});
});
