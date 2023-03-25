import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from './HomePage';
import { NavigationBar } from './NavigationBar';
import { PokemonDetailPage } from './PokemonDetailPage';

export const RoutesContainer = () => { 
  return(
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route path='' element={<HomePage />} />       
        <Route path='detail/:id' element={<PokemonDetailPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
};
