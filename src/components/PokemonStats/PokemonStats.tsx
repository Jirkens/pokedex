import { FC } from "react";
import { styled, Typography } from "@mui/material";

import { IPokemonStats } from "../../types";
import { capitalizeFirstLetter, moveItemInArrayByName } from "../../utils";

const PokemonStatsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(5),
}));

const InfoItemContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(5),
}));

interface IPokemonStatsProps {
  stats: IPokemonStats[];
}

export const PokemonStats: FC<IPokemonStatsProps> = ({ stats }) => {
  const reorderedStats = moveItemInArrayByName(stats, 'speed', 3);

  return (
    <PokemonStatsContainer>
      {reorderedStats.map(stat => {
        return (
          <InfoItemContainer key={stat.id}>
            <Typography variant="body1" component="div" align="center" fontWeight="bold">
              {capitalizeFirstLetter(stat.name)}
            </Typography>
            <Typography variant="body1" component="div" align="center">
              {stat.baseStat}
            </Typography>
          </InfoItemContainer>
        );
      })}
    </PokemonStatsContainer>
  );
};
