import React from "react";
import { render, screen } from "@testing-library/react-native";
import { mockPokemon } from "@utils/test-utils/mocks";
import PokemonSprites from "@pokemon/components/PokemonSprites";

describe("PokemonSprites", () => {
	it("should render correctly", () => {
		render(<PokemonSprites sprites={mockPokemon.sprites!} />);

		expect(screen.toJSON()).toMatchSnapshot();
	});
});
