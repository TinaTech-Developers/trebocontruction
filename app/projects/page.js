import React from "react";
import PageHero from "../components/PageHero";
import ProjectsPage from "./_components/ProjectsPage";
import TestimonialsSlider from "../components/Testimonials";

function page() {
  return (
    <>
      <PageHero
        image={"/work.jpg"}
        title={"Our Work"}
        subtitle={"A glimpse into the projects that define our expertise."}
      />
      <ProjectsPage />
      <TestimonialsSlider />
    </>
  );
}

export default page;
