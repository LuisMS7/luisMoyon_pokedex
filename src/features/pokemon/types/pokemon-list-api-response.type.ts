import { ResourceListApiResponse } from "@src/types/resource-list-api-response";

export type PokemonListItemApiResponse = { url: string; name: string };

export type PokemonListApiResponse =
	ResourceListApiResponse<PokemonListItemApiResponse>;
