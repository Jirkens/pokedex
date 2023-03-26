import { Link, Outlet } from "react-router-dom";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";

import { NAVBAR_HEIGHT } from "../constants";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.contrastText,
}));

const OutletCointainer = styled('div')(({ theme }) => ({
  marginTop: NAVBAR_HEIGHT,
  minHeight: `calc(100vh - ${NAVBAR_HEIGHT} - 140px)`,
  padding: theme.spacing(14, 12),

  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(14, 8),
  },

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(14, 0),
  },

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(7, 0),
  },
}));

const LinksContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(8),
  marginRight: theme.spacing(15),

  [theme.breakpoints.down('md')]: {
    marginRight: theme.spacing(5),
    gap: theme.spacing(4),
  },

  [theme.breakpoints.down('sm')]: {
    marginRight: theme.spacing(2),
  },
}));

const LogoContainer = styled(StyledLink)(({ theme }) => ({
  marginLeft: theme.spacing(15),

  [theme.breakpoints.down('md')]: {
    marginLeft: theme.spacing(5),
  },

  [theme.breakpoints.down('sm')]: {
    marginLeft: theme.spacing(2),
  },
}));

export const NavigationBar = () => (
  <>
    <AppBar position="fixed" sx={{ height: NAVBAR_HEIGHT, backgroundColor: '#FF3F4E', boxShadow: 0 }}>
      <Toolbar sx={{ justifyContent: 'space-between', height: NAVBAR_HEIGHT, backgroundColor: '#FF3F4E' }}>
        <LogoContainer to="">
          <Typography sx={{ fontFamily: 'Pokemon Solid', height: '50px' }} variant="h4" component="div" align="center">
            Pokedex
          </Typography>
        </LogoContainer>
        <LinksContainer>
          <StyledLink to=''>
            <Typography variant="body1" fontWeight='bold' component="div">
              O nás
            </Typography>
          </StyledLink>
          <StyledLink to=''>
            <Typography variant="body1" fontWeight='bold' component="div">
              Pokémoni
            </Typography>
          </StyledLink>
        </LinksContainer>
      </Toolbar>
    </AppBar>
    <OutletCointainer>
      <Outlet />
    </OutletCointainer>
  </>
);
