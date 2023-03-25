import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Alert, styled, Typography } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

import { PokemonItemList, SearchInput } from "../components";
import { ERROR_OCCURRED_TEXT } from "../constants";
import { GET_POKEMONS_QUERY } from "../queries/getPokemons";
import { IPokemon, IPokemonData } from "../types";

const SEARCH_RESULTS_TEXT = "Výsledky hledání";
const POKEMONS_OVERVIEW_TEXT = "Přehled Pokémonů";
const POKEMONS_PLACEHOLDER_TEXT = "Zadejte jméno Pokémona";

const StatusContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(5),
  alignItems: 'center',
  marginBottom: theme.spacing(7),
}));

const HomePageContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
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

export const HomePage = () => {
  const { loading, error, data } = useQuery<IPokemonData>(GET_POKEMONS_QUERY);

  const [filteredData, setFilteredData] = useState<IPokemon[]>([]);
  const [searchText, setSearchText] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    if (data) {
      setFilteredData(data.gen1_species);
    }
  }, [data]);

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  if (error) {
    return (
      <Alert>{ERROR_OCCURRED_TEXT}: {error.message}</Alert>
    );
  }

  if (!data || !data.gen1_species) {
    return (
      <p>No data here...</p>
    );
  }

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newData = data.gen1_species.filter((item) => {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredData(newData);
    setIsFiltered(Boolean(searchText));
  };

  const handleOnClickClearButton = () => {
    setFilteredData(data.gen1_species);
    setSearchText('');
    setIsFiltered(false);
  };

  // TODO delete console logs
  console.log("data", data);
  console.log("searchText", searchText);
  console.log("filteredData", filteredData);

  return (
    <HomePageContainer>
      <SearchInput
        placeholder={POKEMONS_PLACEHOLDER_TEXT}
        {...{ searchText, handleOnSubmit, handleSearchInputChange, handleOnClickClearButton }}
      />
      <StatusContainer>
        {isFiltered ? <FilterListIcon fontSize="large"/> : <ViewModuleIcon fontSize="large"/>}
        <Typography variant="body1" component="div" align="center" fontWeight="bold">
          {isFiltered ? SEARCH_RESULTS_TEXT : POKEMONS_OVERVIEW_TEXT}
        </Typography>
      </StatusContainer>
      <PokemonItemList pokemonData={!filteredData ? data.gen1_species : filteredData}></PokemonItemList>
    </HomePageContainer>
  );
};
