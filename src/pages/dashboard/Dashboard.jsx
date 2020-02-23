import React, { useState, useEffect } from 'react';
import PlansService from 'services/plans';
import base from '../Base.module.scss';
import styles from './Dashboard.module.scss';
import PlanItem from 'components/dashboard/PlanItem';
import Loading from 'components/shared/Loading';

const Dashboard = () => {
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

      <h1 className={base.title}>Início</h1>

      {plans && 
        <>
          <h2 className={base.subtitle}>Planos alimentares</h2>
          <ul className={styles.plans}>
            {plans.map((item, index) => 
              <PlanItem 
                key={index}
                {...item} 
              />
            )}
          </ul>
        </>
      }
    </div>
  )
}

export default Dashboard;
