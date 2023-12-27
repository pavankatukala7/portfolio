import React from "react";
import styles from "@/styles/Home.module.css";

export default function SkillsComponent() {
  return (
    <a className={styles.card}>
    <h2>
      Skills <span>-&gt;</span>
    </h2>
    <p>View all my skills</p>
  </a>
  );
}
