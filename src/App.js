import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DragonPage from './containers/DragonPage/DragonPage';
import CatalogPage from './containers/CatalogPage';
import DetailsPage from './containers/DetailsPage/DetailsPage';
import FavoritesPage from './containers/FavoritesPage';
import HomePage from './containers/HomePage';
import Header from './components/Header';
import Login from './components/Login'; 
import LogOut from './components/Logout/LogOut';
import './App.css';


const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <div className='wrapper'>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="dragon" element={<DragonPage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<LogOut />} />
            <Route path="catalog/:id" element={<DetailsPage />} />            
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
