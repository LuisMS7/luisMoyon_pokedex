import React from "react";
import { render, screen } from "@testing-library/react-native";
import { mockPokemon } from "@utils/test-utils/mocks";
import PokemonDetailsInfoCard from "@pokemon/components/PokemonDetailsInfoCard";

describe("PokemonDetailsInfoCard", () => {
	it("should render correctly", () => {
		render(
			<PokemonDetailsInfoCard
				pokemon={mockPokemon}
				typeColor={"green"}
			/>,
		);

		expect(screen.toJSON()).toMatchSnapshot();
	});
});
