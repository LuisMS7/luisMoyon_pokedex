import React from "react";
import { render, screen } from "@testing-library/react-native";
import { mockPokemon } from "@utils/test-utils/mocks";
import PokemonTypesInfo from "@pokemon/components/PokemonTypesInfo";

describe("PokemonTypesInfo", () => {
	it("should render correctly", () => {
		render(<PokemonTypesInfo pokemon={mockPokemon} />);

		expect(screen.toJSON()).toMatchSnapshot();
	});
});
