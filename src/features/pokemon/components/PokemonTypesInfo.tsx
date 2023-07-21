import React, { useMemo } from "react";
import { Pokemon } from "@pokemon/types/pokemon.type";
import { PokemonTypes, TypeColor } from "@pokemon/utils/color-by-type";
import { TagType } from "@src/types/tag.type";
import TagRow from "@src/components/TagRow";

type PokemonTypesInfoProps = {
	pokemon: Pokemon;
};

const PokemonTypesInfo = ({ pokemon }: PokemonTypesInfoProps) => {
	const typeColor = (type: PokemonTypes) => {
		return TypeColor[type];
	};
	const typesTags: TagType[] = useMemo(() => {
		return pokemon.types.map((type) => ({
			text: type.type.name,
			backgroundColor: typeColor(type.type.name),
		}));
	}, [pokemon]);

	return <TagRow tags={typesTags} />;
};

export default PokemonTypesInfo;
