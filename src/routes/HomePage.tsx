import { useQuery } from "@apollo/client";
import { Alert } from "@mui/material";

import { PokemonItemList } from "../components";
import { GET_POKEMONS_QUERY } from "../queries/getPokemons";
import { IPokemonData } from "../types";

export const HomePage = () => {
  const { loading, error, data } = useQuery<IPokemonData>(GET_POKEMONS_QUERY);

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  if (error) {
    return (
      <Alert>An error has occurred: {error.message}</Alert>
    );
  }

  console.log("data", data);

  return (
    <div>
      {data && <PokemonItemList pokemonData={data.gen1_species}></PokemonItemList>}
    </div>
  );
};
