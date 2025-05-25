import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ProjectGallery from "./components/ProjectsGallery";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import SafetySustainability from "./components/SafetySustainability";
import PromoBanner from "./components/PromoBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />

      <ProjectGallery />
      <PromoBanner />
      <Testimonials />
      <SafetySustainability />
    </>
  );
}
