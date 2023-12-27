import React from "react";
import { Inter } from "next/font/google";
import HeadComponent from "@/components/_headComponent";
import MainComponent from "@/components/_mainComponent";

export default function Home() {
  return (
    <>
      <HeadComponent />
      <MainComponent />
    </>
  );
}
