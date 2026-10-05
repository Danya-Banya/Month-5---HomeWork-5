import React from "react";
import { delicious } from "../../Untils";
import Delicious_card from "../ui_cards/Delicious_cards/Delicious_card";
import styles from "./Delicious.module.scss";

export default function Delicious() {
  return (
    <>
      <section className={styles.delicious}>
        <div className={styles.container}>
          <h1 className={styles.delicious__title}>
            Try this delicious recipe to make your day
          </h1>
          <div className={styles.delicious__item}>
            {delicious.map((item) => (
              <Delicious_card
                key={item.title}
                title={item.title}
                time={item.time}
                type={item.type}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
