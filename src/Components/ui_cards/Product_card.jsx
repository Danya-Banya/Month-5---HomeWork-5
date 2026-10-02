import React from "react";
import styles from "./Product_card.module.scss";
import timer from "../../images/Timer.svg";
import forkKnife from "../../images/ForkKnife.svg";

export default function Product_card({ title, time, type, imageSrc }) {
  return (
    <div className={styles.productCard}>
      <img src={imageSrc} alt="Food" className={styles.productCard__img} />
      <div className={styles.productCard__content}>
        <h2 className={styles.productCard__title}>{title}</h2>
        <div className={styles.productCard__info}>
          <div className={styles.productCard__time}>
            <img src={timer} alt="" />
            <span className={styles.productCard__timeSpan}>{time}</span>
          </div>
          <div className={styles.productCard__type}>
            <img src={forkKnife} alt="Fork, knife" />
            <span className={styles.productCard__typeSpan}>{type}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
