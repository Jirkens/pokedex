import { FC } from "react";
import { styled } from "@mui/material";

import { IPokemon } from "../../types";
import { PokemonItem } from "../PokemonItem";

const PokemonItemListContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(4),
  height: '100%',
  justifyContent: 'center',
  padding: theme.spacing(14, 12),

  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(14, 8),
  },

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(14, 0),
  },

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(7, 0),
  },
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
