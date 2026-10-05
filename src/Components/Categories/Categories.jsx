import React from "react";
import styles from "./Categories.module.scss";
import Category_card from "../ui_cards/Category_cards/Category_card";
import { categories } from "../../Untils";

export default function Categories() {
  return (
    <>
      <section className={styles.categories}>
        <div className={styles.container}>
          <h1 className={styles.categories__title}>Categories</h1>
          <div className={styles.categories__item}>
            {categories.map((item) => (
              <Category_card key={item.id}
                title={item.title}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
