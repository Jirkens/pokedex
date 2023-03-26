import { FC } from "react";
import { styled, Typography } from "@mui/material";

import { IPokemonDetailData } from "../../types";

const PokemonProfileContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  height: '275px',
  justifyContent: 'space-between',
});

const InfoContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

const AbilitiesContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const InfoItemContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(5),
}));

const ProfileParamTypography = styled(Typography)(({ theme }) => ({
  backgroundColor: '#FDE7EA',
  padding: theme.spacing(1),
  borderRadius: '5px',
})) as typeof Typography;


interface IPokemonProfileProps {
  data: IPokemonDetailData;
}

export const PokemonProfile: FC<IPokemonProfileProps> = ({ data }) => {
  const { height, weight, types, abilities } = data;

  return (
    <PokemonProfileContainer>
      <InfoContainer>
        <InfoItemContainer>
          <ProfileParamTypography variant="body1" component="div" align="center" fontWeight="bold">
            Typ
          </ProfileParamTypography>
          <Typography variant="body1" component="div" align="center">
            {types.map(type => type.name).join(", ")}
          </Typography>
        </InfoItemContainer>
        <InfoItemContainer>
          <ProfileParamTypography variant="body1" component="div" align="center" fontWeight="bold">
            Výška
          </ProfileParamTypography>
          <Typography variant="body1" component="div" align="center">
            {height / 10} m
          </Typography>
        </InfoItemContainer>
        <InfoItemContainer>
          <ProfileParamTypography variant="body1" component="div" align="center" fontWeight="bold">
            Váha
          </ProfileParamTypography>
          <Typography variant="body1" component="div" align="center">
            {weight / 10} kg
          </Typography>
        </InfoItemContainer>
      </InfoContainer>
      <AbilitiesContainer>
        <ProfileParamTypography variant="body1" component="div" align="center" fontWeight="bold">
          Dovednosti
        </ProfileParamTypography>
        <Typography variant="body1" component="div">
          {abilities.map(ability => (<div key={ability.id}>{ability.name}</div>))}
        </Typography>
      </AbilitiesContainer>
    </PokemonProfileContainer>
  );
};
