import React from "react";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.div
      className="w-full px-6 md:px-12 md:py-10 py-4 bg-white  mx-auto flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-green-800 mb-6">Who Are We?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        TREBO Construction Company is a multidisciplinary construction firm
        based in Zimbabwe, specializing in modern plumbing installations,
        deckpane rental solutions, and residential housing construction. Our
        commitment to delivering superior workmanship, on-time project
        completion, and cost-effective solutions has made us a preferred service
        provider in the construction industry.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Our team is composed of highly skilled artisans, site supervisors,
        project managers, and customer service personnel—all focused on one
        goal: delivering quality you can trust.
      </p>
    </motion.div>
  );
}

export default AboutUs;
