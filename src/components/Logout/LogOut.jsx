import { Link } from 'react-router-dom';
import styles from './LogOut.module.css';

const LogOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('store');
  
    return (
        <div className={styles.container}>
            <span className='header'>You need to register</span>
            <Link to={'/login'}>Login</Link>
        </div>
  )
}

export default LogOut