import React, { useMemo } from "react";
import { Pokemon } from "@pokemon/types/pokemon.type";
import { TagType } from "@src/types/tag.type";
import TagRow from "@src/components/TagRow";
import { NORMAL_WEIGHT } from "@lib/constants";

type PokemonMovesInfoProps = {
	pokemon: Pokemon;
	typeColor: string;
};

const PokemonMovesInfo = ({ pokemon, typeColor }: PokemonMovesInfoProps) => {
	const movesTags: TagType[] = useMemo(() => {
		return (
			pokemon.moves?.map((move) => ({
				text: move.move.name,
				backgroundColor: "white",
				borderColor: typeColor,
				textColor: "black",
				fontWeight: NORMAL_WEIGHT,
			})) || []
		);
	}, [pokemon]);

	return <TagRow tags={movesTags} />;
};

export default PokemonMovesInfo;
