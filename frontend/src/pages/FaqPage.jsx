import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for navigation

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FAQPage = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Sokari?",
      answer:
        "Sokari is a platform that connects skilled artisans with customers looking for unique, handmade products.",
    },
    {
      question: "How do I purchase products on Sokari?",
      answer:
        "You can browse our collection, add items to your cart, and proceed to checkout. Our platform supports secure payment options.",
    },
    {
      question: "Can I sell my handmade products on Sokari?",
      answer:
        "Yes! Sokari welcomes artisans to join our platform. Sign up as a seller to get started.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept major credit cards, debit cards, and other secure online payment methods.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our support team through the 'Contact Us' button at the bottom of the page.",
    },
  ]);

  return (
    <div className="">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
        className="py-16 text-center"
      >
        <div className="container mx-auto px-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
            className="text-5xl font-bold text-teal-400"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, delay: 0.3 }}
            variants={fadeInUp}
            className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            Find answers to the most commonly asked questions about Sokari, our
            artisans, and the platform.
          </motion.p>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
            className="space-y-8"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-800 rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-teal-400 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-800">
        <div className="container mx-auto px-6">
          <motion.h2
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
            className="text-4xl font-bold text-teal-400"
          >
            Have More Questions?
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, delay: 0.3 }}
            variants={fadeInUp}
            className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto"
          >
            If your question isn't listed here, feel free to contact us. Our
            support team is happy to help.
          </motion.p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 bg-teal-400 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-500 transition"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
