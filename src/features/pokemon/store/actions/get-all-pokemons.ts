import client from "@lib/axios-instance";
import { API_ENDPOINTS } from "@lib/constants";
// eslint-disable-next-line max-len
import { PokemonListApiResponse } from "@pokemon/types/pokemon-list-api-response.type";

const getAllPokemons = (offset: number, limit: number) =>
	client.get<PokemonListApiResponse>(API_ENDPOINTS.all_pokemons, {
		params: {
			offset: offset,
			limit: limit,
		},
	});

export default getAllPokemons;
