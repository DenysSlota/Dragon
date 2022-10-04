import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getLocalStorage } from '../../utils/localStorage';
import Favorite from '../Favorite';
import styles from './Header.module.css';
import logo from './logo.png';

const Header = () => {
        const [user, setUser] = useState();
    const data = getLocalStorage('user');
    useEffect(() => {
        
      setUser(data);
    }, []);
      
        
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo} alt="logo" />
            <ul className={styles.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/dragon">Dragon</NavLink></li>
                <li><NavLink to="/catalog">Catalog</NavLink></li>
                {user?.login
                    ? <li><NavLink to="/logout">LogOut</NavLink></li>
                    : <li><NavLink to="/login">LogIn</NavLink></li>                    
                }                                          
            </ul>
            <Favorite />     
        </div>
      )
}

export default Header;