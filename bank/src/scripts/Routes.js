import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Card from '../pages/Card';
import MainPage from '../pages/MainPage';
import Menu from '../pages/Menu';

export function RoutesApp(){
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="menu" element={<Menu />} />
            <Route path="card" element={<Card />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}
