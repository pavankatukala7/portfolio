import React from "react";
import styles from "@/styles/Home.module.css";

export default function ExperienceComponent() {
  return (
    <a className={styles.card}>
      <h2>
        Experience <span>-&gt;</span>
      </h2>
      <p>View all my work experience</p>
    </a>
  );
}
