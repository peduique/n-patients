import React, { useEffect, useState } from 'react';
import PlansService from 'services/plans';
import base from '../Base.module.scss';
import Loading from 'components/shared/Loading';
import styles from './Plans.module.scss';
import PlanItem from 'components/plans/PlanItem';

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
        <ul className={styles.plans}>
          {plans.map((item, index) => 
            <PlanItem 
              key={index}
              {...item} 
            />
          )}
        </ul>
      }
    </div>
  )
}

export default Plans;