"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "../../globals.css";

export default function CarDetailsPage() {
  const { id } = useParams();

  // Placeholder car data - In a real app, this would be fetched from a database
  const carsData = {
    1: {
      id: 1,
      name: "BMW M4 Competition",
      image: "/images/bmw-m4.jpg",
      gallery: [
        "/images/bmw-m4.jpg",
        "/images/bmw-m4-interior.jpg",
        "/images/bmw-m4-engine.jpg",
      ],
      price: 84000,
      category: "Luxury",
      year: 2023,
      fuel: "Gasoline",
      engine: "3.0L Twin-Turbo Inline-6",
      power: "503 hp",
      acceleration: "3.8 seconds (0-60 mph)",
      topSpeed: "155 mph (electronically limited)",
      transmission: "8-speed automatic",
      description:
        "The BMW M4 Competition is the high-performance version of the 4 Series, offering exceptional driving dynamics and distinctive styling. With its powerful twin-turbo engine and precision handling, it delivers an exhilarating driving experience that combines luxury and performance.",
    },
    2: {
      id: 2,
      name: "Mercedes-Benz EQS",
      image: "/images/mercedes-eqs.jpg",
      gallery: [
        "/images/mercedes-eqs.jpg",
        "/images/mercedes-eqs-interior.jpg",
        "/images/mercedes-eqs-tech.jpg",
      ],
      price: 102000,
      category: "Electric",
      year: 2023,
      fuel: "Electric",
      engine: "Dual Electric Motors",
      power: "516 hp",
      acceleration: "4.1 seconds (0-60 mph)",
      topSpeed: "130 mph",
      transmission: "Single-speed automatic",
      description:
        "The Mercedes-Benz EQS is the all-electric luxury sedan that represents the future of the brand. With its sleek aerodynamic design, revolutionary MBUX Hyperscreen, and impressive electric range, it redefines luxury for the electric age. The EQS combines sustainable mobility with the premium experience expected from Mercedes-Benz.",
    },
    3: {
      id: 3,
      name: "Audi RS e-tron GT",
      image: "/images/audi-etron.jpg",
      gallery: [
        "/images/audi-etron.jpg",
        "/images/audi-etron-interior.jpg",
        "/images/audi-etron-charging.jpg",
      ],
      price: 142000,
      category: "Electric",
      year: 2022,
      fuel: "Electric",
      engine: "Dual Electric Motors",
      power: "637 hp",
      acceleration: "3.1 seconds (0-60 mph)",
      topSpeed: "155 mph",
      transmission: "2-speed automatic",
      description:
        "The Audi RS e-tron GT combines the performance of an RS model with electric mobility. This four-door grand tourer features a sleek, aerodynamic design and powerful electric motors that deliver instant acceleration. With its advanced technology and luxurious interior, the RS e-tron GT offers a refined driving experience with zero emissions.",
    },
    4: {
      id: 4,
      name: "Porsche 911 Turbo S",
      image: "/images/porsche-911.jpg",
      gallery: [
        "/images/porsche-911.jpg",
        "/images/porsche-911-interior.jpg",
        "/images/porsche-911-rear.jpg",
      ],
      price: 216000,
      category: "Sports",
      year: 2023,
      fuel: "Gasoline",
      engine: "3.8L Twin-Turbo Flat-6",
      power: "640 hp",
      acceleration: "2.6 seconds (0-60 mph)",
      topSpeed: "205 mph",
      transmission: "8-speed PDK automatic",
      description:
        "The Porsche 911 Turbo S represents the pinnacle of the iconic 911 series, combining everyday usability with supercar performance. Its powerful twin-turbo engine, advanced all-wheel drive system, and precision handling make it one of the most capable sports cars on the market. The 911 Turbo S continues the legacy of Porsche's legendary flagship model.",
    },
    5: {
      id: 5,
      name: "Tesla Model S Plaid",
      image: "/images/tesla-models.jpg",
      gallery: [
        "/images/tesla-models.jpg",
        "/images/tesla-models-interior.jpg",
        "/images/tesla-models-screen.jpg",
      ],
      price: 131000,
      category: "Electric",
      year: 2023,
      fuel: "Electric",
      engine: "Tri-Motor Electric",
      power: "1,020 hp",
      acceleration: "1.99 seconds (0-60 mph)",
      topSpeed: "200 mph",
      transmission: "Single-speed automatic",
      description:
        "The Tesla Model S Plaid is the highest-performance version of Tesla's flagship sedan. With three electric motors delivering over 1,000 horsepower, it offers acceleration that rivals hypercars. Combined with Tesla's advanced Autopilot technology, minimalist interior, and impressive range, the Model S Plaid is at the forefront of electric vehicle performance.",
    },
    6: {
      id: 6,
      name: "Lamborghini Huracán",
      image: "/images/lamborghini-huracan.jpg",
      gallery: [
        "/images/lamborghini-huracan.jpg",
        "/images/lamborghini-huracan-interior.jpg",
        "/images/lamborghini-huracan-engine.jpg",
      ],
      price: 268000,
      category: "Supercar",
      year: 2022,
      fuel: "Gasoline",
      engine: "5.2L V10",
      power: "631 hp",
      acceleration: "2.9 seconds (0-60 mph)",
      topSpeed: "202 mph",
      transmission: "7-speed dual-clutch automatic",
      description:
        "The Lamborghini Huracán epitomizes Italian supercar design and performance. With its naturally aspirated V10 engine, aggressive styling, and precise handling, it delivers an emotional driving experience that's synonymous with the Lamborghini brand. The Huracán combines cutting-edge technology with the raw, visceral feedback that supercar enthusiasts crave.",
    },
  };

  const car = carsData[id];

  if (!car) {
    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Car not found</h1>
        <p className="mb-8">
          Sorry, we couldn't find the car you're looking for.
        </p>
        <Link
          href="/cars"
          className="inline-block bg-[#3b82f6] text-white py-2 px-6 rounded-lg font-medium"
        >
          Back to Cars
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/cars"
        className="inline-flex items-center text-[#3b82f6] mb-8 hover:underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to all cars
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-4">
            <Image
              src={car.image}
              alt={car.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 card-hover">
            {car.gallery.map((img, index) => (
              <div
                key={index}
                className="relative h-24 rounded-lg overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`${car.name} gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Car Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-[#3b82f6]">
                  ${car.price.toLocaleString()}
                </span>
                <span className="ml-4 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                  {car.category}
                </span>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              {car.description}
            </p>

            <div className="grid grid-cols-2 gap-y-4 mb-8">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Year</p>
                <p className="font-medium">{car.year}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Fuel Type
                </p>
                <p className="font-medium">{car.fuel}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Engine
                </p>
                <p className="font-medium">{car.engine}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Power
                </p>
                <p className="font-medium">{car.power}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Acceleration
                </p>
                <p className="font-medium">{car.acceleration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Top Speed
                </p>
                <p className="font-medium">{car.topSpeed}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Transmission
                </p>
                <p className="font-medium">{car.transmission}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="w-full py-3 bg-[#3b82f6] text-white rounded-lg font-medium text-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Test Drive
              </motion.button>
              <motion.button
                className="w-full py-3 border-2 border-[#3b82f6] text-[#3b82f6] rounded-lg font-medium text-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Inquire About This Car
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
