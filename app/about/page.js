"use client";
import React from "react";
import PageHero from "../components/PageHero";
import AboutPage from "./_components/AboutPage";
import AboutUs from "./_components/AboutUs";

function page() {
  return (
    <div className="bg-white">
      <PageHero
        image={"/about.jpg"}
        title={"About Us"}
        subtitle={"Experience. Integrity. Commitment to Quality."}
      />
      <AboutUs />
      <AboutPage />
    </div>
  );
}

export default page;
