import React, { useState, useEffect } from 'react';
import PlansService from 'services/plans';
import base from '../Base.module.scss';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  const [plans, setPlans] = useState([]);

  const fetchAllPlans = () => {
    PlansService.loadAll().then(response => {
      console.log(response.data.object)
      setPlans(response.data.object);
    });
  }

  useEffect(() => {
    fetchAllPlans();
  }, []);

  return (
    <div className={base.content}>
      <h1 className={base.title}>Início</h1>

      {plans && 
        <>
          <h2 className={base.subtitle}>Planos alimentares</h2>
          <ul className={styles.plans}>
            {plans.map((item, index) =>
              <li 
                key={index}
                className={styles.planItem}
                style={{backgroundImage: `url(${item.nutritionist.avatar_medium}})`}}
              >
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

export default Dashboard;
