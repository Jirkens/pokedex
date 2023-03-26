import { FC, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, styled, Typography } from "@mui/material";

import { IPokemon } from "../../types";
import { capitalizeFirstLetter } from "../../utils";

const StyledNameContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#FF3F4E',
  color: theme.palette.primary.contrastText,
  cursor: 'pointer',
  display: 'flex',
  height: '55px',
}));

const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  height: 275,
  width: 250,
});

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  maxHeight: '180px',
  width: 'auto',
  cursor: 'pointer',
  padding: theme.spacing(4),
  objectFit: 'contain',
  marginTop: 'auto',
  marginBottom: 'auto'
})) as typeof CardMedia;

const StyledLink = styled(Link)({
  textDecoration: 'none',
});

interface IPokemonItemProps {
  pokemonItem: IPokemon;
}

export const PokemonItem: FC<IPokemonItemProps> = ({ pokemonItem }) => {
  const capitalizedPokemonName = useMemo(() => (
    capitalizeFirstLetter(pokemonItem.name)
  ), [pokemonItem]);

  return (
    <StyledLink to={`/detail/${pokemonItem.id}`}>
      <StyledCard>
        <StyledCardMedia
          component="img"
          image={`./pokemons/${pokemonItem.id}.svg`}
          alt={pokemonItem.name}
        />
        <StyledNameContainer>
          <Typography gutterBottom variant="body1" component="div" align="center" margin="auto">
            {capitalizedPokemonName}
          </Typography>
        </StyledNameContainer>
      </StyledCard>
    </StyledLink>
  );
};
