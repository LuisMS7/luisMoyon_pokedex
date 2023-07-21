import { Move, Sprites, Type } from "@pokemon/types/PokemonApiResponse.type";

export type Pokemon = {
	id: number;
	name: string;
	img: string;
	types: Type[];
	weight?: number;
	sprites?: Sprites;
	moves?: Move;
};
