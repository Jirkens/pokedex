import { gql } from '@apollo/client';

export const GET_POKEMON_DETAIL_QUERY = gql`
  query getPokemonDetail($id: Int!) {
    pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
      id
      name
      height
      weight
      pokemon_v2_pokemonstats {
        pokemon_v2_stat {
          id
          name
        }
        base_stat
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          id
          name
        }
      }
      pokemon_v2_pokemontypes {
        id
        pokemon_v2_type {
          id
          name
        }
      }
    }
  }
`;
