import image from './image.png';

import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className='header'>SpaceX</h1>      
      <img className={styles.image} src={image} alt="dragon" />
    </div>
  )
}

export default HomePage;