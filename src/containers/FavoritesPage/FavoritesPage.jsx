import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CatalogList from '../../components/CatalogPage/CatalogList';

import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
    const [dragon, setDragon] = useState([]);

    const storeDate = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        const arr = Object.entries(storeDate);

        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    name: item[1].name,
                    flickr_images: item[1].flickr_images,
                }
            })
            setDragon(res);
        }

    }, []);
    
    return (
        <>
            <h1 className='header'>Favorites</h1>
            {dragon.length
                ? <CatalogList catalog={dragon} />
                : <h2 className={styles.comment}>No data</h2>
            }
        </>
    )
}

export default FavoritesPage;