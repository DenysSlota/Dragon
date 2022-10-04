import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { getApiResource } from '../../utils/network';
import { API_ROOT } from '../../constans/api';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import DragonList from '../../components/DragonPage/DragonList';

import styles from './DetailsPage.module.css';

const DetailsPage = ({ setErrorApi}) => {
    const id = useParams().id;
    const [details, setDetails] = useState(null);
    const [dragonFavorite, setDragonFavorite] = useState(false);
    const [dragonId, setDragonId] = useState(null);

    const storeDate = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        (async () => {
            const res = await getApiResource(`${API_ROOT}${id}/`)

            storeDate[id] ? setDragonFavorite(true) : setDragonFavorite(false);

            setDragonId(id);

            if (res) {
                setDetails({
                    name: res.name,
                    image: res.flickr_images,
                    description: res.description,
                    wikipedia: res.wikipedia,
                    height: res.height_w_trunk.meters,
                    mass: res.dry_mass_kg,
                    year: res.first_flight,
                })
                setErrorApi(false);
            } else {
                setErrorApi(true);
            }
        })();
    }, []);
  return (
    <>
        {details && <DragonList dragon={details} dragonFavorite={dragonFavorite} setDragonFavorite={setDragonFavorite} dragonId={dragonId} />}            
    </>
  )
}

export default withErrorApi(DetailsPage);