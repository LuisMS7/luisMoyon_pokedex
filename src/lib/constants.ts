import { perfectSize } from "@utils/perfect-size";

export const TEXT_SMALL_SIZE = perfectSize(12);

export const TEXT_NORMAL_SIZE = perfectSize(14);

export const TEXT_BIG_SIZE = perfectSize(16);

export const TEXT_SUBTITLE_SIZE = perfectSize(20);

export const TEXT_TITLE_SIZE = perfectSize(24);

export const TEXT_SUPER_SIZE = perfectSize(32);

export const NORMAL_WEIGHT = "400";

export const BOLD_WEIGHT = "800";

export enum API_ENDPOINTS {
	all_pokemons = "api/v2/pokemon",
	pokemons_by_name = "api/v2/pokemon/{pokemon_name}",
}
