"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PageHero = ({ title, subtitle, image }) => {
  return (
    <section className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <motion.h1
          className="text-white text-3xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="text-white/80 mt-4 max-w-xl text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
