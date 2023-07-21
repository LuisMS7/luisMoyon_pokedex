import client from "@lib/axios-instance";
import { API_ENDPOINTS } from "@lib/constants";
import { PokemonApiResponse } from "@pokemon/types/pokemon-api-response.type";

const getPokemonByName = (pokemonName: string) =>
	client.get<PokemonApiResponse>(
		API_ENDPOINTS.pokemons_by_name.replace("{pokemon_name}", pokemonName),
	);

export default getPokemonByName;
