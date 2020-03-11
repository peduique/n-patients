import React, { useState } from 'react';
import styles from 'pages/avaliations/Avaliations.module.scss';

const AvaliationItem = props => {
  const [show, setShow] = useState(false);

  const handleAvaliation = () => {
    setShow(!show);
  }

  return (
    <li className={styles.avaliationItem} onClick={handleAvaliation}>
      <div className={styles.header}>
        <div className={styles.content}>
          <h3 className={styles.name}>Melina Almeida</h3>
          <p className={styles.subtitle}>{props.checkin.date_format}</p>
        </div>
        <button className={styles.btn}>
          <i className={show ? 'icon-keyboard_arrow_up' : 'icon-keyboard_arrow_down'}></i>
        </button>
      </div>

      {show && 
         <div>
           uhiuhiuh <br />uhiuhiuh <br />uhiuhiuh <br />uhiuhiuh <br />uhiuhiuh <br />uhiuhiuh <br />
         </div>
      }
    </li>
  )
}

export default AvaliationItem;