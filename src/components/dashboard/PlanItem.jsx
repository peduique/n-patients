import React from 'react';
import styles from 'pages/dashboard/Dashboard.module.scss';
import { withRouter } from 'react-router-dom';

const PlanItem = props => {
  
  const handlePlanOnClick = () => {
    props.history.push(`/plans/${props.id}`);
  }

  return (
    <li 
      className={styles.planItem}
      style={{backgroundImage: `url(${props.nutritionist.avatar_medium}})`}}
      onClick={handlePlanOnClick}
    >
      <span className={styles.planItemContent}>
        <h3 className={styles.name}>{props.nutritionist.name}</h3>
        <h3 className={styles.title}>
          {props.diet_type ? props.diet_type : 'Plano alimentar'}
        </h3>
        <p className={styles.subtitle}>{props.plan_date_format}</p>
      </span>
    </li>
  )
}

export default withRouter(PlanItem);