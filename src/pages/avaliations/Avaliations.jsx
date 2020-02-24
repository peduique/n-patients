import React, { useEffect, useState } from 'react';
import base from '../Base.module.scss';
import Loading from 'components/shared/Loading';
import AvaliationsService from 'services/avaliations';
import styles from 'pages/avaliations/Avaliations.module.scss';
import AvaliationItem from 'components/avaliations/AvaliationItem';

const Avaliations = () => {
  const [loading, setLoading] = useState(true);
  const [avaliations, setAvaliations] = useState([]);

  const fetchAllAvaliations = () => {
    AvaliationsService.loadAll().then(response => {
      setAvaliations(response.data.object);
      console.log(response.data.object);
    }).then(response => setLoading(false));
  }

  useEffect(() => {
    fetchAllAvaliations();
  }, []);

  return (
    <div className={base.content}>
      
      {loading && <Loading />}

      <h1 className={base.title}>Avaliações antropométricas</h1>

      {avaliations && 
        <ul className={styles.avaliations}>
          {avaliations.map((item, index) => 
            <AvaliationItem key={index} {...item} />
          )}
        </ul>
      }

    </div>
  )
}

export default Avaliations;