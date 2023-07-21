import "react-native";
import React from "react";
import { render, screen } from "@testing-library/react-native";
import PokemonCard from "@pokemon/components/PokemonCard";
import { Pokemon } from "@pokemon/types/Pokemon.type";

describe("PokemonCard", () => {
	it("should render correctly", () => {
		const mockPokemon: Pokemon = {
			name: "bulbasaur",
			id: 1,
			// eslint-disable-next-line max-len
			img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
			types: [
				{
					slot: 1,
					type: {
						name: "grass",
						url: "https://pokeapi.co/api/v2/type/12/",
					},
				},
				{
					slot: 2,
					type: {
						name: "poison",
						url: "https://pokeapi.co/api/v2/type/4/",
					},
				},
			],
		};
		render(<PokemonCard pokemon={mockPokemon} />);
		expect(screen.toJSON()).toMatchSnapshot();
	});
});
