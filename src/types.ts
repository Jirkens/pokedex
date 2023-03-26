export interface IPokemon {
  id: number;
  name: string;
}

export interface IPokemonData {
  gen1_species: IPokemon[];
}

export interface IPokemonAbility extends IPokemon {}
export interface IPokemonType extends IPokemon {}
export interface IPokemonStats extends IPokemon {
  baseStat: number;
}

export interface IPokemonDetailData {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: IPokemonAbility[];
  types: IPokemonType[];
  stats: IPokemonStats[];
}

// DTOs for pokemon detail data

export interface IPokemonStatsDTO {
  base_stat: number;
  pokemon_v2_stat: IPokemonStats;
}

export interface IPokemonAbilitiesDTO {
  pokemon_v2_ability: IPokemonAbility;
}

export interface IPokemonTypesDTO {
  id: number;
  pokemon_v2_type: IPokemonType;
}

export interface IPokemonDTO {
  id: number;
  name: string;
  height: number;
  weight: number;
  pokemon_v2_pokemonabilities: IPokemonAbilitiesDTO[];
  pokemon_v2_pokemontypes: IPokemonTypesDTO[];
  pokemon_v2_pokemonstats: IPokemonStatsDTO[];
}

export interface IPokemonDetailDataDTO {
  pokemon_v2_pokemon: IPokemonDTO[];
}
