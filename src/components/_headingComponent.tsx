import React from "react";
import styles from "@/styles/Home.module.css";
import ImageComponent from "./_imageComponent";

export default function HeadingComponent() {
  return (
    <div className={styles.description}>
      <p>
        <code className={styles.code}>PAVAN KATUKALA</code>
      </p>
      <ImageComponent />
    </div>
  );
}
