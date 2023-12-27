import React from "react";
import Image from "next/image";
import profileImage from "@/assets/profile.jpeg";
import styles from "@/styles/Home.module.css";

export default function ImageComponent() {
  return (
    <div>
      <Image
        src={profileImage}
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={100}
        style={{
          objectFit: "cover",
          borderRadius: "100px", //👈 and here you can select border radius
        }}
        priority
      />
    </div>
  );
}
