import styles from './DragonList.module.css';
import DragonPhoto from './DragonPhoto';

const DragonList = ({ dragon, dragonFavorite, setDragonFavorite, dragonId }) => {
  return (
    <div className={styles.container}>
        <DragonPhoto 
            dragon={dragon}
            dragonFavorite={dragonFavorite}
            setDragonFavorite={setDragonFavorite}
            dragonId={dragonId}     
        />
        <h3 className={styles.header}>{dragon.name}</h3>
        <ul className={styles.list__container}>             
            <li>Description: {dragon.description}</li>
            <li>More information: <a className={styles.link} href={dragon.wikipedia}>wikipedia</a>
            </li>            
            <li>Height: {dragon.height} m</li>
            <li>Mass: {dragon.mass} kg</li>
            <li>Year: {dragon.year}</li>
        </ul>
    </div>
  )
}

export default DragonList