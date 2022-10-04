import { useDispatch } from 'react-redux';
import { setDragonToFavorite, removeDragonFromFavorite } from '../../../../store/actions';
import SimpleImageSlider from 'react-simple-image-slider';
import iconFavorite from './favorite.png';
import iconFavoriteFill from './favorite-fill.png';

import styles from './DragonPhoto.module.css';
import { getLocalStorage } from '../../../../utils/localStorage';

const DragonPhoto = ({ dragon, dragonFavorite, setDragonFavorite, dragonId }) => {
    const user = getLocalStorage('user');

    const dispatch = useDispatch();

    const dispatchFavoriteDragon = () => {
        if (dragonFavorite) {
            dispatch(removeDragonFromFavorite(dragonId));
            setDragonFavorite(false);
        } else {
            dispatch(setDragonToFavorite({
                [dragonId]: {
                    name: dragon.name,
                    flickr_images: dragon.image
                },
            }));
            setDragonFavorite(true); 
        }
    } 

    return (
        <>
            <div className={styles.container}>
                <SimpleImageSlider
                    width={ 900 }
                    height={ 900 }            
                    images={ dragon.image }
                    showBullets={ true }
                    showNavs={ true }
                />
                {user.login && <img
                            data-testid="favorite"                             
                            src={dragonFavorite ? iconFavoriteFill : iconFavorite}
                            onClick={dispatchFavoriteDragon}
                            className={styles.favorite} 
                            alt="Add to favorite" 
                        />
                }      
            </div>
                                
        </>
    )
}

export default DragonPhoto;