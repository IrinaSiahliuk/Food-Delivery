import React from "react";

import { Menu } from "pages/Menu";

import styles from "pages/Home/styles.module.css";

function Home() {
  return (
    <div className={styles.home_wrapper}>
      <Menu />
      <Menu />
      <Menu />
    </div>
  );
}

export default Home;
