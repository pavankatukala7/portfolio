import React from "react";
import styles from "@/styles/Home.module.css";

export default function EducationComponent() {
  return (
    <a className={styles.card}>
    <h2>
      Education <span>-&gt;</span>
    </h2>
    <p>View all my education details</p>
  </a>
  );
}
