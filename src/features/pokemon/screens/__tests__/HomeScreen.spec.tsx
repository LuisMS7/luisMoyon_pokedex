import "react-native";
import React from "react";
import { render, screen } from "@testing-library/react-native";
// eslint-disable-next-line max-len
import { PokemonListItemApiResponse } from "@pokemon/types/pokemon-list-api-response.type";
import { mockGetOnSuccess } from "@utils/test-utils/axios-mock";
import { API_ENDPOINTS } from "@lib/constants";
import HomeScreen from "@pokemon/screens/HomeScreen";

describe("HomeScreen", () => {
	it("should render correctly", async () => {
		const mockPokemons: PokemonListItemApiResponse[] = [
			{
				name: "mockPokemon1",
				url: "",
			},
		];
		const mockPokemon = {
			id: 1,
			name: "mockPokemon1",
			sprites: {
				other: {
					dream_world: {
						front_default:
							// eslint-disable-next-line max-len
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
					},
				},
			},
			types: [
				{
					type: {
						name: "grass",
						url: "https://pokeapi.co/api/v2/type/12/",
					},
				},
			],
			weight: 0,
			moves: [],
		};
		mockGetOnSuccess(API_ENDPOINTS.all_pokemons, mockPokemons);
		mockGetOnSuccess(
			API_ENDPOINTS.pokemons_by_name.replace(
				"{pokemon_name}",
				"mockPokemon1",
			),
			mockPokemon,
		);
		const { rerender } = render(<HomeScreen />);
		await Promise.resolve();
		await rerender(<HomeScreen />);
		expect(screen.toJSON()).toMatchSnapshot();
	});
});
