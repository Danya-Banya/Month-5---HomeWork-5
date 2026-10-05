import React from "react";
import styles from "./Product_list.module.scss";
import Product_card from "../ui_cards/Product_cards/Product_card.jsx";
import { cardValue } from "../../Untils.js";

export default function Product_list() {
  return (
    <>
      <section className={styles.productList}>
        <div className="container">
          <div className={styles.productList__top}>
            {" "}
            <h1 className={styles.productList__title}>
              Simple and tasty recipes
            </h1>
            <p className={styles.productList__description}>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
          </div>

          <div className={styles.productList__item}>
            {cardValue.map((value) => (
              <Product_card
                key={value.title}
                title={value.title}
                time={value.time}
                type={value.type}
                imageSrc={value.img}
              ></Product_card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
