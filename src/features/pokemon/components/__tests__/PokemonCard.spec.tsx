import "react-native";
import React from "react";
import { render, screen } from "@testing-library/react-native";
import PokemonCard from "@pokemon/components/PokemonCard";
// eslint-disable-next-line max-len
import { PokemonListItemApiResponse } from "@pokemon/types/pokemon-list-api-response.type";
import { mockGetOnSuccess } from "@utils/test-utils/axios-mock";
import { API_ENDPOINTS } from "@lib/constants";
import { NavigationContainer } from "@react-navigation/native";

describe("PokemonCard", () => {
	it("should render correctly", async () => {
		const mockPokemonName = "mockPokemon";
		const mockPokemonItem: PokemonListItemApiResponse = {
			name: mockPokemonName,
			url: "",
		};
		const mockEndpoint = API_ENDPOINTS.pokemons_by_name.replace(
			"{pokemon_name}",
			mockPokemonName,
		);
		const mockPokemon = {
			id: 1,
			name: mockPokemonName,
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
		mockGetOnSuccess(mockEndpoint, mockPokemon);
		const { rerender } = render(
			<PokemonCard pokemonItem={mockPokemonItem} />,
			{
				wrapper: NavigationContainer,
			},
		);
		await Promise.resolve();
		await rerender(<PokemonCard pokemonItem={mockPokemonItem} />);
		expect(screen.toJSON()).toMatchSnapshot();
	});
});
