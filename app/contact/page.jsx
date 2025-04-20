"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the data to a server here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after submission (simulate successful submission)
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 3000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have questions about our vehicles or want to schedule a test drive?
          Our team is here to help you find your perfect car.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold mb-6"
          >
            Send us a Message
          </motion.h2>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 p-4 rounded-md mb-6"
            >
              <p className="font-medium">Thank you for your message!</p>
              <p>We'll get back to you as soon as possible.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <motion.div variants={itemVariants} className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md bg-white dark:bg-gray-700"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md bg-white dark:bg-gray-700"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md bg-white dark:bg-gray-700"
                  placeholder="(123) 456-7890"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md bg-white dark:bg-gray-700"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Test Drive Request">Test Drive Request</option>
                  <option value="Vehicle Information">
                    Vehicle Information
                  </option>
                  <option value="Financing Question">Financing Question</option>
                  <option value="Other">Other</option>
                </select>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-3 border rounded-md bg-white dark:bg-gray-700"
                  placeholder="How can we help you?"
                ></textarea>
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#3b82f6] text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Galerimizi Ziyaret Edin</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Premium arabalarımızı kişisel deneyimimizde görün.
            </p>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="mr-4 text-[#3b82f6]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Galericiler Sitesi
                    <br />
                    Kütahya/Tavşanlı
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-4">
                <div className="mr-4 text-[#3b82f6]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Çalışma Saatleri</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Pazartesi - Cuma: 9:00 - 20:00
                    <br />
                    Cumartesi: 9:00 - 18:00
                    <br />
                    Pazar: 10:00 - 17:00
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 text-[#3b82f6]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">İletişim</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Telefon: (555) 123-4567
                    <br />
                    Email: info@autogallery.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">
                  Finansman sunuyor musunuz?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Evet, bizimle iletişime geçin ve finansman seçeneklerimizi
                  öğrenin.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">
                  Test sürüşünü online olarak planlayabilir miyim?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Evet, araba seçin ve "Test Arabası Planla" butonuna tıklayın
                  veya doğrudan bizimle iletişime geçin.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">
                  Takas kabul ediyor musunuz?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Evet, bizimle iletişime geçin ve takas hakkında bilgi alın.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
