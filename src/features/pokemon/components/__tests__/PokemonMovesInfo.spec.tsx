import React from "react";
import { render, screen } from "@testing-library/react-native";
import PokemonMovesInfo from "@pokemon/components/PokemonMovesInfo";
import { mockPokemon } from "@utils/test-utils/mocks";

describe("PokemonMovesInfo", () => {
	it("should render correctly", () => {
		render(<PokemonMovesInfo pokemon={mockPokemon} typeColor={"red"} />);
		expect(screen.toJSON()).toMatchSnapshot();
	});
});
