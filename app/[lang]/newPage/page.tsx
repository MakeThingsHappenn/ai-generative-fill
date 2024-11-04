export const runtime = "edge";

import React from "react";
import Image from "next/image";
import styles from "./NewPage.module.css";

const NewPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>M. Gesignt</div>
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Hooo</a>
          <a href="#">Cruxtes</a>
          <a href="#">Actogt</a>
          <a href="#">ctiing</a>
        </nav>
        <div className={styles.signupButtonWrapper}>
          <button className={styles.signupButton}>Try for free</button>
          <div className={styles.circleEffect}></div>
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>AI Generative Fill</h1>
        <p className={styles.subtitle}>
          We he eaye hi mer vie ame fre il feve de shrey on nat fur yer wnd tw
          rthin sani esening tier ped yev.
        </p>
        <div className={styles.cta}>
          {/* <button className={styles.primaryButton}>Bervoy it</button> */}
          <button className={styles.secondaryButton}>Join Us</button>
        </div>

        <div className={styles.imageContainer}>
          {/* <Image
            src="/path-to-your-image.jpg"
            alt="AI Generative Fill"
            width={500}
            height={500}
            className={styles.mainImage}
          /> */}
        </div>

        <div className={styles.features}>
          <div className={styles.featureCard}>
            <h2>How it Use</h2>
            <p>
              Lne nfor thay: Los thotel ex viet nie ei thne cshi totes si wor
              an. Viot boet, nere.
            </p>
            <button className={styles.featureButton}>Scim Vit</button>
          </div>
          <div className={styles.featureCard}>
            <h2>Features</h2>
            <p>
              Lne nfor thay: Los thotel ex viet nie ei thne cshi totes si wor
              an. Viot boet, nere.
            </p>
            <button className={styles.featureButton}>Scim Vit</button>
          </div>
          <div className={styles.featureCard}>
            <h2>Pricing</h2>
            <p>
              Lne nfor thay: Los thotel ex viet nie ei thne cshi totes si wor
              an. Viot boet, nere.
            </p>
            <button className={styles.featureButton}>Scim Vit</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewPage;

