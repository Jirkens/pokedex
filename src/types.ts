export interface IPokemon {
  id: number;
  name: string;
}

export interface IPokemonData {
  gen1_species: IPokemon[];
}
