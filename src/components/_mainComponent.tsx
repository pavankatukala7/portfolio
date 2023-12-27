import React from "react";
import styles from "@/styles/Home.module.css";
import ImageComponent from "@/components/_imageComponent";
import { Inter } from "next/font/google";
import AboutMeComponent from "./_aboutComponent";
import ExperienceComponent from "./_experienceComponent";
import EducationComponent from "./_educationComponent";
import SkillsComponent from "./_skillsComponent";
import DesignationComponent from "./_designationComponent";
import HeadingComponent from "./_headingComponent";

const inter = Inter({ subsets: ["latin"] });

export default function MainComponent() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <HeadingComponent />
      <DesignationComponent />
      <div className={styles.grid}>
        <AboutMeComponent />
        <ExperienceComponent />
        <EducationComponent />
        <SkillsComponent />
      </div>
    </main>
  );
}
