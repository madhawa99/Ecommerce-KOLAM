import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

// Animation variants for section headers and paragraphs
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs = () => {
  return (
    <div className="">
      {/* Hero Section with Motion */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
        className=""
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
            className="text-5xl font-bold text-teal-400"
          >
            About Us
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, delay: 0.3 }}
            variants={fadeInUp}
            className="text-lg text-gray-100 mt-4 max-w-2xl mx-auto"
          >
           At Sokari , we proudly connect Sri Lankan artisans with those who value authentic, handmade creations. Our platform showcases a wide range of traditional and contemporary crafts, helping preserve local craftsmanship while supporting talented makers. By choosing [Marketplace Name], you are supporting the artisans and their timeless heritage, contributing to a sustainable future for Sri Lanka's creative community.
          </motion.p>
        </div>
      </motion.div>

      {/* Mission Section with Motion */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
        className="py-16 px-6 container mx-auto text-center"
      >
        <motion.h2
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="text-5xl font-bold text-teal-400"
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, delay: 0.3 }}
          variants={fadeInUp}
          className="text-lg text-white-600 mt-6 max-w-2xl mx-auto"
        >
        Our mission at Sokari is to uplift and empower Sri Lankan artisans by providing them with a platform to share their craftsmanship with the world. We strive to preserve traditional skills while encouraging innovation, ensuring that local artisans thrive in a modern marketplace. By fostering sustainable and ethical practices, we aim to create a lasting impact on the artisan community, promoting cultural heritage and supporting livelihoods.    
        </motion.p>
      </motion.section>

      {/* Team Section with Motion */}
      <section className="">
        {/* "Meet Our Team" with Motion */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="text-3xl font-bold text-center text-white-800 mb-12"
        >
          Meet Our Team
        </motion.h2>
        
        <div className="flex flex-wrap justify-center">
          {/* Team Member 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xs rounded-lg overflow-hidden shadow-lg m-4 bg-gray-50"
          >
            <img
              className="w-full h-48 object-cover"
              src="./images/Madhawa.jpg"
              alt="Team Member"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-gray-800">M.C. Weilikumbura</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xs rounded-lg overflow-hidden shadow-lg m-4 bg-gray-50"
          >
            <img
              className="w-full h-48 object-cover"
              src="./images/ishan.jpg"
              alt="Team Member"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-gray-800">B.I. Giwantha</h3>
              <p className="text-gray-600">CTO & Co-Founder</p>
            </div>
          </motion.div>

          {/* Team Member 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-xs rounded-lg overflow-hidden shadow-lg m-4 bg-gray-50"
          >
            <img
              className="w-full h-48 object-cover"
              src="./images/Nirodha.jpg"
              alt="Team Member"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-gray-800">B.D.S.M. Nirodha</h3>
              <p className="text-gray-600">Chief Operating Officer</p>
            </div>
          </motion.div>

          {/* Team Member 4 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-xs rounded-lg overflow-hidden shadow-lg m-4 bg-gray-50"
          >
            <img
              className="w-full h-48 object-cover"
              src="./images/Chamudhi.jpg"
              alt="Team Member"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-gray-800">C. Herath</h3>
              <p className="text-gray-600">Chief Marketing Officer</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold">Join Us on Our Journey</h2>
          <p className="text-lg mt-6 max-w-2xl mx-auto">
            We are always looking for talented, passionate individuals to join our growing team. Be a part of a company that values innovation, creativity, and collaboration.
          </p>
          <Link to="/contact">
            <button className="mt-8 px-8 py-4 bg-teal-400 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-500 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
