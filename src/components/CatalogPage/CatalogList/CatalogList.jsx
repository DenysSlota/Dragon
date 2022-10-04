import { Link } from 'react-router-dom';
import styles from './CatalogList.module.css'

const CatalogList = ({ catalog }) => {    
    return (
      <ul className={styles.list__container}>
          {catalog.map(({name, id, flickr_images}) => 
            <li className={styles.list__item} key={id}>
                <Link to={`/catalog/${id}`}>
                <img className={styles.item__photo} src={flickr_images} alt={name} />
                <h3>{name}</h3>
                </Link>
            </li>
          )}
      </ul>
    )
  }

export default CatalogList;

