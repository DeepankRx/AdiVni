import React from 'react';
import styles from './TestimonialsBox.module.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const TestimonialsBox = (props) => {
  return(
            <div className={styles.box}>
          <div className={styles.box_image}>
            <img src={props.dataToSend.tImage} alt="">

            </img>
          </div>
          <div className={styles.box_text}>
            <div className={styles.icons}>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
            </div>
            <p>
              {props.dataToSend.tAbout}
            </p>
            <h3>{props.dataToSend.tName}</h3>
          </div>
        </div>
  )
};

export default TestimonialsBox;
