import React, { useEffect, useState } from 'react';
import PlansService from 'services/plans';
import base from '../Base.module.scss';
import Loading from 'components/shared/Loading';
import styles from './Plans.module.scss';

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllPlans = () => {
    PlansService.loadAll().then(response => {
      setPlans(response.data.object);
    }).then(response => setLoading(false));
  }

  useEffect(() => {
    fetchAllPlans();
  }, []);

  return (
    <div className={base.content}>
      
      {loading && <Loading />}

      <h1 className={base.title}>Planos alimentares</h1>

      {plans && 
        <>
          <ul className={styles.plans}>
            {plans.map((item, index) => 
              <li className={styles.planItem}>
                <img src={item.nutritionist.avatar_medium} className={styles.avatar} />
                <span className={styles.planItemContent}>
                  <h3 className={styles.name}>{item.nutritionist.name}</h3>
                  <h3 className={styles.title}>
                    {item.diet_type ? item.diet_type : 'Plano alimentar'}
                  </h3>
                  <p className={styles.subtitle}>{item.plan_date_format}</p>
                </span>
              </li>
            )}
          </ul>
        </>
      }
    </div>
  )
}

export default Plans;