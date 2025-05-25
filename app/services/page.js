import React from "react";
import PageHero from "../components/PageHero";
import ServicesPage from "./_components/ServicesPage";
import FAQ from "./_components/FAQ";

function page() {
  return (
    <>
      <PageHero
        image={"/about.jpg"}
        title={"Our Services"}
        subtitle={
          "  Quality craftsmanship and dependable service — explore what we do best."
        }
      />
      <ServicesPage />
      <FAQ />
    </>
  );
}

export default page;
