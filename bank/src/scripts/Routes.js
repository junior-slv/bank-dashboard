import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Card from '../pages/Card';
import MainPage from '../pages/MainPage';
import Home from '../pages/Home';

export function RoutesApp(){
    return (
      <div className='App'>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route path="home" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </div>
    )
}
