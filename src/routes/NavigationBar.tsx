import { Link, Outlet } from "react-router-dom";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";

import { NAVBAR_HEIGHT } from "../constants";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.contrastText,
}));

const OutletCointainer = styled('div')({
  marginTop: NAVBAR_HEIGHT,
});

const LinksContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(8),
  marginRight: theme.spacing(15),
}));

const LogoContainer = styled(StyledLink)(({ theme }) => ({
  marginLeft: theme.spacing(15),
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
