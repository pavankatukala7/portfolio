import React from "react";
import styles from "@/styles/Home.module.css";

export default function AboutMeComponent() {
  return (
    <a className={styles.card}>
      <h2>
        About <span>-&gt;</span>
      </h2>
      <p>Find in-depth information about me</p>
    </a>
  );
}
