import { FC, useState } from 'react';
import { Button, styled } from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { IPokemonDetailData } from '../../types';
import { PokemonProfile } from '../PokemonProfile';
import { PokemonStats } from '../PokemonStats';

const StatsIconContainer = styled('div')(({
  display: 'flex',
  flexDirection: 'column',
}));

const TabButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  gap: theme.spacing(4),
  top: '-50px',
  zIndex: -1,
}));

const TabButton = styled(Button, {
  shouldForwardProp: (props) => props !== 'isTabActive',
})<{isTabActive?: boolean}>(({ isTabActive, theme }) => ({
  boxShadow: 'none',
  backgroundColor: '#FFF',
  color: '#FF3F4E',
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  padding: theme.spacing(1),
  width: isTabActive ? '200px': '150px',
  height: isTabActive ? '70px': '50px',
  top: isTabActive ? '-20px': 0,
  opacity: isTabActive ? 1 : 0.6,
  fontWeight: isTabActive ? 'bold' : 'normal',

  ":hover": {
    boxShadow: 'none',
    backgroundColor: '#FFF',
  },
}));

interface ITabsSwitcherProps {
  data: IPokemonDetailData;
}

export const TabsSwitcher: FC<ITabsSwitcherProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabName: string): void => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <TabButtonContainer>
        <TabButton
          startIcon={<TagFacesIcon />}
          variant="contained"
          onClick={() => handleTabClick('tab1')}
          isTabActive={activeTab === 'tab1'}
        >
          Profil
        </TabButton>
        <TabButton
          startIcon={
            <StatsIconContainer>
              <ArrowDropUpIcon fontSize='small'/>
              <ArrowDropDownIcon fontSize='small'/>
            </StatsIconContainer>
          }
          variant="contained"
          onClick={() => handleTabClick('tab2')}
          isTabActive={activeTab === 'tab2'}
        >
            Statistiky
          </TabButton>
      </TabButtonContainer>
      {activeTab === 'tab1' &&
        <PokemonProfile {...{ data }} />
      }
      {activeTab === 'tab2' &&
        <PokemonStats stats={data.stats} />
      }
    </div>
  );
};
