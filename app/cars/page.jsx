"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CarsPage() {
  // Placeholder car data
  const allCars = [
    {
      id: 1,
      name: "BMW M4 Competition",
      image: "/images/bmw-m4.jpg",
      price: 84000,
      category: "Luxury",
      year: 2023,
      fuel: "Gasoline",
    },
    {
      id: 2,
      name: "Mercedes-Benz EQS",
      image: "/images/mercedes-eqs.jpg",
      price: 102000,
      category: "Electric",
      year: 2023,
      fuel: "Electric",
    },
    {
      id: 3,
      name: "Audi RS e-tron GT",
      image: "/images/audi-etron.jpg",
      price: 142000,
      category: "Electric",
      year: 2022,
      fuel: "Electric",
    },
    {
      id: 4,
      name: "Porsche 911 Turbo S",
      image: "/images/porsche-911.jpg",
      price: 216000,
      category: "Sports",
      year: 2023,
      fuel: "Gasoline",
    },
    {
      id: 5,
      name: "Tesla Model S Plaid",
      image: "/images/tesla-models.jpg",
      price: 131000,
      category: "Electric",
      year: 2023,
      fuel: "Electric",
    },
    {
      id: 6,
      name: "Lamborghini Huracán",
      image: "/images/lamborghini-huracan.jpg",
      price: 268000,
      category: "Supercar",
      year: 2022,
      fuel: "Gasoline",
    },
  ];

  // Filter states
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: "All",
    fuelType: "All",
    year: "All",
  });

  // Filter visibility state
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  // Toggle filter visibility
  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  // Available filters
  const categories = ["All", "Luxury", "Electric", "Sports", "Supercar"];
  const priceRanges = ["All", "Under $100K", "$100K-$200K", "Over $200K"];
  const fuelTypes = ["All", "Gasoline", "Electric", "Hybrid"];
  const years = ["All", "2023", "2022", "2021"];

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  // Filter cars based on selected filters
  const filteredCars = allCars.filter((car) => {
    // Category filter
    if (filters.category !== "All" && car.category !== filters.category) {
      return false;
    }

    // Price range filter
    if (filters.priceRange !== "All") {
      if (filters.priceRange === "Under $100K" && car.price >= 100000) {
        return false;
      } else if (
        filters.priceRange === "$100K-$200K" &&
        (car.price < 100000 || car.price > 200000)
      ) {
        return false;
      } else if (filters.priceRange === "Over $200K" && car.price <= 200000) {
        return false;
      }
    }

    // Fuel type filter
    if (filters.fuelType !== "All" && car.fuel !== filters.fuelType) {
      return false;
    }

    // Year filter
    if (filters.year !== "All" && car.year.toString() !== filters.year) {
      return false;
    }

    return true;
  });

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
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.2 * i,
      },
    }),
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Araçlarımızı Keşfet</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Premium araba koleksiyonumuzu keşfedip hayalinizdeki aracınızı bulun.
        </p>
      </div>

      {/* Filter toggle button */}
      <button
        onClick={toggleFilterVisibility}
        className="flex items-center gap-2 bg-[#3b82f6] text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 transition-colors"
      >
        {isFilterVisible ? "Hide Filters" : "Show Filters"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Filters */}
      <motion.div
        initial={false}
        animate={{
          height: isFilterVisible ? "auto" : 0,
          opacity: isFilterVisible ? 1 : 0,
          marginBottom: isFilterVisible ? "2.5rem" : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange("category", e.target.value)}
                className="w-full p-2 border rounded-md bg-white dark:bg-gray-700"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Fiyat Aralığı
              </label>
              <select
                value={filters.priceRange}
                onChange={(e) =>
                  handleFilterChange("priceRange", e.target.value)
                }
                className="w-full p-2 border rounded-md bg-white dark:bg-gray-700"
              >
                {priceRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            {/* Fuel Type Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Yakıt Tipi
              </label>
              <select
                value={filters.fuelType}
                onChange={(e) => handleFilterChange("fuelType", e.target.value)}
                className="w-full p-2 border rounded-md bg-white dark:bg-gray-700"
              >
                {fuelTypes.map((fuel) => (
                  <option key={fuel} value={fuel}>
                    {fuel}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">Yıl</label>
              <select
                value={filters.year}
                onChange={(e) => handleFilterChange("year", e.target.value)}
                className="w-full p-2 border rounded-md bg-white dark:bg-gray-700"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Cars Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredCars.length > 0 ? (
          filteredCars.map((car, i) => (
            <motion.div
              key={car.id}
              custom={i}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg card-hover"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative h-64">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#3b82f6] text-white py-1 px-3 rounded-full text-sm">
                  {car.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-[#3b82f6] font-semibold text-lg">
                    ${car.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {car.year} | {car.fuel}
                  </p>
                </div>
                <Link
                  href={`/cars/${car.id}`}
                  className="block w-full text-center bg-[#3b82f6] text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  Detayları Gör
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <h3 className="text-xl font-semibold mb-2">
              Bu kriterlere uygun araba bulunamadı
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Filtrelerinizi ayarlayarak daha fazla sonuç görüntüleyebilirsiniz.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
