"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const rotatingData = [
  {
    text: "Reliable Construction",
    image: "/hero.jpg",
    description:
      "Trebo specializes in dependable structural work tailored to residential and commercial needs.",
  },
  {
    text: "Expert Plumbing Solutions",
    image: "/plumbing.webp",
    description:
      "We provide fast, certified plumbing services — from leaks to full installations.",
  },
  {
    text: "Outstanding Workmanship",
    image: "/hero1.jpeg",
    description:
      "With over 20 years of industry experience, we bring precision and care to every project.",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingData.length);
    }, 6000); // Rotates every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${rotatingData[index].text}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-green-700 leading-tight"
            >
              {rotatingData[index].text}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${rotatingData[index].description}`}
              className="mt-4 text-gray-600 text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {rotatingData[index].description}
            </motion.p>
          </AnimatePresence>

          <div className="mt-6">
            <Link
              href="#contact"
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-700 transition"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        {/* Animated Image */}
        <div className="relative w-full h-64 md:h-96">
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${rotatingData[index].image}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={rotatingData[index].image}
                alt={rotatingData[index].text}
                layout="fill"
                objectFit="cover"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;
