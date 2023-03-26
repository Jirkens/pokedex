import { IPokemonAbility, IPokemonDetailData, IPokemonDetailDataDTO, IPokemonStats, IPokemonType } from "../types";

export const parsePokemonDetailData = (data: IPokemonDetailDataDTO): IPokemonDetailData => {
  const { id, name, height, weight } = data.pokemon_v2_pokemon[0];  
  const abilities: IPokemonAbility[] = data.pokemon_v2_pokemon[0].pokemon_v2_pokemonabilities.map((ability: any) => {
    return ability.pokemon_v2_ability;
  });

  const types: IPokemonType[] = data.pokemon_v2_pokemon[0].pokemon_v2_pokemontypes.map((type: any) => {
    return type.pokemon_v2_type;
  });

  const stats: IPokemonStats[] = data.pokemon_v2_pokemon[0].pokemon_v2_pokemonstats.map((stat: any) => {
    return (
      {
        id: stat.pokemon_v2_stat.id,
        name: stat.pokemon_v2_stat.name,
        baseStat: stat.base_stat,
      }
    );
  });
  
  return (
    {
      id,
      name,
      height,
      weight,
      abilities,
      types,
      stats,
    }
  );
};
