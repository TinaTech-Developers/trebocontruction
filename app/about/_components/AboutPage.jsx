"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const stats = [
  { label: "Years in Business", value: 20 },
  { label: "Projects Completed", value: 500 },
  { label: "Satisfied Clients", value: 450 },
  { label: "Team Members", value: 100 },
];

const values = [
  {
    title: "Integrity",
    description:
      "We build trust with transparent communication and reliable services.",
  },
  {
    title: "Excellence",
    description:
      "We pursue the highest standards in every project we undertake.",
  },
  {
    title: "Safety",
    description:
      "Our team prioritizes safety with rigorous protocols and training.",
  },
  {
    title: "Sustainability",
    description:
      "We incorporate eco-friendly practices to support a greener future.",
  },
];

const AboutPage = () => {
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 1500;
    const interval = 30;
    const steps = duration / interval;

    stats.forEach((stat, i) => {
      const target = stat.value;
      let current = 0;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedStats((prev) => {
          const updated = [...prev];
          updated[i] = Math.floor(current);
          return updated;
        });
      }, interval);
    });
  }, []);

  return (
    <>
      {/* Intro Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
              Building with Purpose Since Day One
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Trebo Construction has over 20 years of experience delivering
              high-quality construction and plumbing solutions to homeowners and
              businesses. Our commitment to craftsmanship, customer
              satisfaction, and sustainable practices has earned us a trusted
              reputation in the industry.
            </p>
            <Link
              href="/services"
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
            >
              Explore Our Services
            </Link>
          </div>
          <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg">
            <video
              className="object-cover w-full h-full"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/VID-20250524-WA0035.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 bg-green-700 text-white px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Build Your Vision Together
          </h2>
          <p className="mb-6 text-lg">
            Partner with Trebo Construction and experience dedication,
            expertise, and results.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-green-700">
                {animatedStats[idx]}+
              </h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            Our Core Values
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            These values guide every decision we make and every project we
            deliver.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
