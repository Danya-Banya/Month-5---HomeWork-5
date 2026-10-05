import React from "react";
import styles from "./Category_card.module.scss";

export default function Category_card({ title, img }) {
  return (
    <div className={styles.productCard}>
      <img src={img} alt="" />
      <h2 className={styles.productCard__title}>{title}</h2>
    </div>
  );
}
