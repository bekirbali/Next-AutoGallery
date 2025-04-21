"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

// Create a motion-enabled Link component
const MotionLink = motion(Link);

export default function HomePage() {
  // State to track slider initialization
  const [sliderInitialized, setSliderInitialized] = useState(false);

  // Ensure slider loads only on client-side
  useEffect(() => {
    setSliderInitialized(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        mass: 0.4,
        damping: 8,
        y: {
          duration: 1,
          ease: [0.215, 0.61, 0.355, 1], // custom cubic bezier for bounce
          times: [0, 0.6, 1],
          keyframes: [50, -10, 0],
        },
        opacity: { duration: 0.5 },
      },
    },
  };

  // Card animation variant
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: (0.1 * i) / 2,
      },
    }),
  };

  // Placeholder featured cars
  const featuredCars = [
    {
      id: 1,
      name: "BMW M4 Competition",
      image: "/images/bmw-m4.jpg",
      price: "$84,000",
      category: "Luxury",
    },
    {
      id: 2,
      name: "Mercedes-Benz EQS",
      image: "/images/mercedes-eqs.jpg",
      price: "$102,000",
      category: "Electric",
    },
    {
      id: 3,
      name: "Audi RS e-tron GT",
      image: "/images/audi-etron.jpg",
      price: "$142,000",
      category: "Electric",
    },
    {
      id: 4,
      name: "BMW M4 Competition",
      image: "/images/bmw-m4.jpg",
      price: "$84,000",
      category: "Luxury",
    },
    {
      id: 5,
      name: "Mercedes-Benz EQS",
      image: "/images/mercedes-eqs.jpg",
      price: "$102,000",
      category: "Electric",
    },
    {
      id: 6,
      name: "Audi RS e-tron GT",
      image: "/images/audi-etron.jpg",
      price: "$142,000",
      category: "Electric",
    },
    {
      id: 7,
      name: "BMW M4 Competition",
      image: "/images/bmw-m4.jpg",
      price: "$84,000",
      category: "Luxury",
    },
    {
      id: 8,
      name: "Mercedes-Benz EQS",
      image: "/images/mercedes-eqs.jpg",
      price: "$102,000",
      category: "Electric",
    },
    {
      id: 9,
      name: "Audi RS e-tron GT",
      image: "/images/audi-etron.jpg",
      price: "$142,000",
      category: "Electric",
    },
    {
      id: 10,
      name: "BMW M4 Competition",
      image: "/images/bmw-m4.jpg",
      price: "$84,000",
      category: "Luxury",
    },
    {
      id: 11,
      name: "Mercedes-Benz EQS",
      image: "/images/mercedes-eqs.jpg",
      price: "$102,000",
      category: "Electric",
    },
    {
      id: 12,
      name: "Audi RS e-tron GT",
      image: "/images/audi-etron.jpg",
      price: "$142,000",
      category: "Electric",
    },
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-90"></div>
          <Image
            src="/images/supercar.jpg"
            alt="Luxury car background"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Discover Your Dream Car
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Explore our curated collection of premium vehicles designed for
              performance and luxury.
            </p>
            <MotionLink
              href="/cars"
              className="inline-block bg-[#3b82f6] text-white py-3 px-8 rounded-lg font-medium text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Cars
            </MotionLink>
          </motion.div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-[0.4rem]">
                SON EKLENEN MODELLER
              </h2>
              <p className="text-gray-800 dark:text-gray-200 max-w-2xl mx-auto tracking-[0.2rem]">
                Son eklenen 12 yeni model.
              </p>
            </motion.div>

            {sliderInitialized && (
              <Slider {...sliderSettings} className="featured-cars-slider">
                {featuredCars.map((car, i) => (
                  <div key={car.id} className="px-2">
                    <motion.div
                      custom={i}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full"
                    >
                      <div className="relative h-64 car-image-container">
                        <Image
                          src={car.image}
                          alt={car.name}
                          fill
                          className="object-cover car-image"
                        />
                        <div className="absolute top-4 right-4 bg-[#3b82f6] text-white py-1 px-3 rounded-full text-sm font-medium">
                          {car.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 dark:text-white">
                          {car.name}
                        </h3>
                        <p className="text-[#2563eb] dark:text-[#60a5fa] font-semibold text-lg mb-4">
                          {car.price}
                        </p>
                        <Link
                          href={`/cars/${car.id}`}
                          className="inline-block font-medium text-[#2563eb] dark:text-[#60a5fa] hover:underline"
                        >
                          View Details
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </Slider>
            )}

            <motion.div variants={itemVariants} className="text-center mt-12">
              <Link
                href="/cars"
                className="inline-block border-2 border-[#3b82f6] text-[#3b82f6] dark:text-[#60a5fa] dark:border-[#60a5fa] py-2 px-6 rounded-lg font-medium hover:bg-[#3b82f6] hover:text-white dark:hover:bg-[#60a5fa] transition-colors"
              >
                View All Cars
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              variants={itemVariants}
              className="relative h-[400px] rounded-lg overflow-hidden car-image-container"
            >
              <Image
                src="/images/showroom.jpg"
                alt="Car Showroom"
                fill
                className="object-cover car-image"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About AutoGallery
              </h2>
              <p className="text-gray-800 dark:text-gray-200 mb-6">
                AutoGallery is your premier destination for discovering
                exceptional automobiles. We curate a collection of the finest
                vehicles, combining luxury, performance, and innovation.
              </p>
              <p className="text-gray-800 dark:text-gray-200 mb-8">
                Our mission is to provide an immersive car browsing experience
                that helps automotive enthusiasts find their perfect match. From
                electric innovations to classic engineering marvels, we showcase
                the best the industry has to offer.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#3b82f6] text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-md"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
