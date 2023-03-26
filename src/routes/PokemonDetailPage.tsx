import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Alert, Card, CardMedia, styled, Typography } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { capitalizeFirstLetter, parsePokemonDetailData } from "../utils";
import { GET_POKEMON_DETAIL_QUERY } from "../queries/getPokemonDetail";
import { ERROR_OCCURRED_TEXT } from "../constants";
import { IPokemonDetailDataDTO } from "../types";
import { TabsSwitcher } from "../components";

const BACK_TO_OVERVIEW_TEXT = "Zpět na přehled";

const DetailPageContainer = styled('div')(({ theme }) => ({
  zIndex: 0,
  position: 'relative',

  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(0, 2),
  },
}));

const LinkContainer = styled(Link)(({ theme }) => ({
  display: 'flex',
  width: '200px',
  gap: theme.spacing(5),
  alignItems: 'center',
  marginBottom: theme.spacing(7),
  textDecoration: 'none',
  color: '#000',
}));

const DetailCardContainer = styled(Card)(({ theme }) => ({
  display: 'flex',
  boxShadow: 'none',
  gap: theme.spacing(5),
  overflow: 'inherit',
  position: 'relative',
}));

const StyledNameContainer = styled('div')({
  color: '#FF3F4E',
  cursor: 'pointer',
  display: 'flex',
  height: '55px',
});

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  boxShadow: 'none',
  border: '2px solid #E5E4E2',
  height: 395,
  width: 300,
  padding: theme.spacing(4),
  margin: theme.spacing(4),
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  maxHeight: '300px',
  width: 'auto',
  cursor: 'pointer',
  padding: theme.spacing(4),
  objectFit: 'contain',
  marginTop: 'auto',
  marginBottom: 'auto'
})) as typeof CardMedia;

export const PokemonDetailPage = () => {
  const params = useParams();
  const { loading, error, data } = useQuery<IPokemonDetailDataDTO>(GET_POKEMON_DETAIL_QUERY, {variables: { id: params.id }});

  const parsedData = useMemo(() => (
    data ? parsePokemonDetailData(data) : undefined
  ), [data]);
  
  const capitalizedPokemonName = useMemo(() => (
    parsedData ? capitalizeFirstLetter(parsedData.name) : undefined
  ), [parsedData]);

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

  if (!parsedData) {
    return (
      <p>No data here...</p>
    );
  }
  
  return (
    <DetailPageContainer>
      <LinkContainer to={'/'}>
        <ChevronLeftIcon fontSize="large"/>
        <Typography variant="body1" component="div" align="center" fontWeight="bold">
          {BACK_TO_OVERVIEW_TEXT}
        </Typography>
      </LinkContainer>
      <DetailCardContainer>
        <StyledCard>
          <StyledNameContainer>
            <Typography gutterBottom variant="h5" component="div" align="center" margin="auto" fontWeight="bold">
              {capitalizedPokemonName}
            </Typography>
          </StyledNameContainer>
          <StyledCardMedia
            component="img"
            image={`../pokemons/${parsedData.id}.svg`}
            alt={parsedData.name}
          />
        </StyledCard>
        <TabsSwitcher data={parsedData} />
      </DetailCardContainer>
    </DetailPageContainer>
  );
};
