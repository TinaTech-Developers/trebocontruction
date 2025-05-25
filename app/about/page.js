"use client";
import React from "react";
import PageHero from "../components/PageHero";
import AboutUs from "../components/AboutUs";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import AboutPage from "./_components/AboutPage";

function page() {
  return (
    <>
      <PageHero
        image={"/about.jpg"}
        title={"About Us"}
        subtitle={"Experience. Integrity. Commitment to Quality."}
      />
      {/* <AboutUs /> */}
      <AboutPage />
    </>
  );
}

export default page;
