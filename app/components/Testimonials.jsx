"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Emily Johnson",
    role: "Homeowner",
    photo: "/images/testimonial1.jpg",
    text: " Trebo Construction transformed our kitchen plumbing with incredible precision and care. The team was professional and quick. Highly recommend!",
  },
  {
    name: "Michael Smith",
    role: "Business Owner",
    photo: "/images/testimonial2.jpg",
    text: "Their construction work exceeded expectations. On time, budget-friendly, and top quality. We couldn't be happier with the results.",
  },
  {
    name: "Samantha Lee",
    role: "Property Manager",
    photo: "/images/testimonial3.jpg",
    text: "Professional, skilled, and reliable.  Trebo Construction has been our go-to for plumbing repairs and upgrades for years.",
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function TestimonialsSlider() {
  const [[page, direction], setPage] = useState([0, 0]);

  const testimonialIndex =
    ((page % testimonials.length) + testimonials.length) % testimonials.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="bg-green-50 py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
          What Our Clients Say
        </h2>
        <p className="text-green-700 mt-4 max-w-xl mx-auto">
          Trusted by homeowners and businesses alike, here’s what our clients
          say about working with BuildFlow.
        </p>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <AnimatePresence initial={false} custom={direction}>
          <div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white rounded-xl p-8 shadow-md border border-green-100 flex flex-col items-center text-center"
          >
            <img
              src={testimonials[testimonialIndex].photo}
              alt={testimonials[testimonialIndex].name}
              className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-green-300"
              loading="lazy"
            />
            <p className="text-gray-700 italic mb-6">
              “{testimonials[testimonialIndex].text}”
            </p>
            <h3 className="text-green-900 font-semibold text-xl">
              {testimonials[testimonialIndex].name}
            </h3>
            <span className="text-green-700 text-sm">
              {testimonials[testimonialIndex].role}
            </span>
          </div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 max-w-xs mx-auto">
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
            className="bg-green-700 hover:bg-green-800 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
          >
            ‹
          </button>
          <button
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
            className="bg-green-700 hover:bg-green-800 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
