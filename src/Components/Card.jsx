import React from 'react'


//MODULES CSS
import styles from './card.module.css';


const Card=({sname, location})=> {
  return (
    <div className={styles.card}>
      <h3 className={styles['card-title']}>
        {sname}
      </h3>
      <br />
      <p className={styles['card-description']}>
        {location}
      </p>
    </div>
  )
}

export default Card
