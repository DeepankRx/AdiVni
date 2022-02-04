import React from "react";
import styles from '../TestimonialsBox.module.css';
import TestimonialsBox from "../TestimonialsBox.js";

const Testimonials = () => {

  const dataToSend=[
    {
      tName:'Avnish Sharma',
      tAbout:'"Consuming Anveshan ghee for 3 months improved my good cholesterol level and reduced bad cholesterol level"',
      tImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnb_I_OQt7Mcts15Kf9qwVchNCE7SJlkfYQ&usqp=CAU',
    },
    {
      tName:'Lakshmi Dev',
      tAbout:'"Their ghee helped solve my acid reflux problem. While cooking with wood pressed oils imparts a unique taste and I feel lighter"',
      tImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnb_I_OQt7Mcts15Kf9qwVchNCE7SJlkfYQ&usqp=CAU',
    },
    {
      tName:'Dr Shagun Walia',
      tAbout:'"This ghee is the most healthy option out there for children. I use it regularly for my daughter and she loves the taste"',
      tImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnb_I_OQt7Mcts15Kf9qwVchNCE7SJlkfYQ&usqp=CAU',
    }
  ]
  return (
    <React.Fragment>
      <div className={styles.testimonials}>
        <TestimonialsBox dataToSend={dataToSend[0]}/>
        <TestimonialsBox dataToSend={dataToSend[1]}/>
        <TestimonialsBox dataToSend={dataToSend[2]}/>
    
      </div>
    </React.Fragment>
  );
};

export default Testimonials;
