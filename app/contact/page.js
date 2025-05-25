import React from "react";
import ContactUs from "./_components/ContactUs";
import PageHero from "../components/PageHero";

function page() {
  return (
    <>
      <PageHero
        image={"/contact.jpg"}
        title={"Contact Us"}
        subtitle={"Questions? Quotes? Let’s talk.s"}
      />
      <ContactUs />
    </>
  );
}

export default page;
