"use client";

import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 bg-white rounded-3xl shadow-lg p-10 flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold text-green-700 mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-700 mb-8">
            Whether you want a free quote or have questions about our services,
            we're here to help. Reach out today!
          </p>
          <div className="space-y-6 text-green-800">
            <div>
              <h3 className="font-semibold text-lg">📍 Address</h3>
              <p>32416 Mabvazuva, Estate Ruwa, Zimbabwe</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">📞 Phone</h3>
              <a href="tel:+263777028258" className="hover:underline">
                +(263) 77-702-8258
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-lg">📧 Email</h3>
              <a
                href="mailto:info@treboconstruction.co.zw"
                className="hover:underline"
              >
                info@treboconstruction.co.zw
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-lg">🕒 Hours</h3>
              <p>Mon - Fri: 8am - 6pm</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 bg-white rounded-3xl shadow-lg p-10"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for reaching out! We'll get back to you soon.");
            e.target.reset();
          }}
        >
          <h2 className="text-4xl font-bold text-green-700 mb-6">
            Contact Form
          </h2>

          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Full Name</span>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full rounded-md border border-green-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Your full name"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Email Address</span>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border border-green-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="you@example.com"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Phone Number</span>
            <input
              type="tel"
              name="phone"
              className="mt-1 block w-full rounded-md border border-green-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="+1 (234) 567-890"
            />
          </label>

          <label className="block mb-6">
            <span className="text-gray-700 font-medium">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1 block w-full rounded-md border border-green-300 px-4 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Tell us about your project or questions"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-full transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Map Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-20 max-w-7xl mx-auto rounded-xl overflow-hidden shadow-lg"
        style={{ height: "300px" }}
      >
        <iframe
          title="Trebo Construction Location"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30374.662290057437!2d31.231430567662812!3d-17.893270717272166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s32416%20Mabvazuva%2C%20Estate%20Ruwa%2C%20Zimbabwe!5e0!3m2!1sen!2szw!4v1748148367832!5m2!1sen!2szw"
          width="100%"
          height="100%"
          style={{ border: 1, borderColor: "#ccc", borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </section>
  );
};

export default ContactUs;
