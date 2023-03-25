import { FC } from "react";
import { styled } from "@mui/material";

import { IPokemon } from "../../types";
import { PokemonItem } from "../PokemonItem";

const PokemonItemListContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(4),
  height: '100%',
  // TODO nice to have fix styles - justifyContent: 'center',
}));

interface IPokemonItemListProps {
  pokemonData: IPokemon[];
}

export const PokemonItemList: FC<IPokemonItemListProps> = ({pokemonData}) => (
  <PokemonItemListContainer>
    {pokemonData.map((pokemonItem) => (
      <PokemonItem key={pokemonItem.id} pokemonItem={pokemonItem} />
    ))}
  </PokemonItemListContainer>
);
