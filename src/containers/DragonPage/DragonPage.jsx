import { useEffect, useState } from 'react';
import { getApiResource } from '../../utils/network';
import { DRAGON } from '../../constans/api';
import DragonList from '../../components/DragonPage/DragonList';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { setLocalStorage, getLocalStorage } from '../../utils/localStorage';
import styles from './DragonPage.module.css';

const DragonPage = ({ setErrorApi }) => {
    const [dragon, setDragon] = useState();
    
    const getResource = async (url) => {
        const res = await getApiResource(url);
                      
        if (res) {
            setDragon({
                id: res.id,                
                name: res.name,
                image: res.flickr_images,
                description: res.description,
                wikipedia: res.wikipedia,
                height: res.height_w_trunk.meters,
                mass: res.dry_mass_kg,
                year: res.first_flight,        
            });
            setLocalStorage('baza', dragon)
            
            setErrorApi(false);
        } else {
            setErrorApi(true);
            
        }
    }

    

    useEffect(() => {
        localStorage.removeItem('baza');  
             
        getResource(DRAGON);
        
    }, []);
    return (
        <>
            {dragon && <DragonList dragon={dragon} dragonId={dragon.id} />}            
        </>
    )
}

export default withErrorApi(DragonPage);