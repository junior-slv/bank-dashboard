import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Card from '../pages/Card';
import MainPage from '../pages/MainPage';
import Menu from '../pages/Menu';

export function RoutesApp(){
    return (
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route path="menu" element={<Menu />} />
            </Route>
          </Routes>
        </Router>
    )
}
