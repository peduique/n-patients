import React from 'react';
import styles from 'pages/plans/Plans.module.scss';
import { withRouter } from 'react-router-dom';
import Image from "react-graceful-image";

const PlanItem = props => {
  
  const handlePlanOnClick = () => {
    props.history.push(`/plans/${props.id}`);
  }

  return (
    <li className={styles.planItem} onClick={handlePlanOnClick}>
      <Image
        src={props.nutritionist.avatar_medium}
        width="50"
        height="50"
        alt={props.nutritionist.name}
        className={styles.avatar}
      />

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