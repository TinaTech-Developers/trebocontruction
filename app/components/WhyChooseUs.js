"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const features = [
  {
    image: "/IMG-20250524-WA0005.jpg",
    title: "Experienced and certified team",
    description:
      "Our Team brings practical skills from real construction projects, backed by official training and licenses—ensuring safe, high-quality, and compliant work you can trust.",
  },
  {
    image: "/con.avif",
    title: "Transparent pricing and project planning",
    description:
      "Our clients receive clear, upfront cost estimates with no hidden fees, along with a well-structured timeline and scope of work—ensuring trust, accountability, and smoother project execution from start to finish.",
  },
  {
    image: "/IMG-20250524-WA0007.jpg",
    title: "Quality assurance across all services",
    description:
      "Every project is completed to high standards through consistent checks, skilled workmanship, and strict adherence to building regulations—ensuring reliable, long-lasting results in every service we offer.",
  },
  {
    image: "/IMG-20250524-WA0027.jpg",
    title: "Committed to Zimbabwe’s housing and infrastructure growth",
    description:
      "We actively contribute to the nation’s development by delivering reliable construction services that support modern, sustainable homes and essential infrastructure for communities across the country.",
  },
  {
    image: "/reliable.webp",
    title: "Reliable customer service and aftercare",
    description:
      "We’re here for you before, during, and after the project—providing prompt support, clear communication, and dependable follow-up to ensure your satisfaction and long-term peace of mind.",
  },
];
const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.7 },
  },
};

const WhyChooseUsGrid = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-green-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Trebo?
        </motion.h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We don’t just get the job done — we get it done right. Here's what
          sets us apart from the rest.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-green-100 cursor-pointer"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(34,197,94,0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsGrid;
