"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AdminDashboard() {
  // In a real app, this would be fetched from Firebase
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: "BMW M4 Competition",
      image: "/images/bmw-m4.jpg",
      price: 84000,
      category: "Luxury",
      year: 2023,
      status: "Available",
    },
    {
      id: 2,
      name: "Mercedes-Benz EQS",
      image: "/images/mercedes-eqs.jpg",
      price: 102000,
      category: "Electric",
      year: 2023,
      status: "Available",
    },
    {
      id: 3,
      name: "Audi RS e-tron GT",
      image: "/images/audi-etron.jpg",
      price: 142000,
      category: "Electric",
      year: 2022,
      status: "Available",
    },
    {
      id: 4,
      name: "Porsche 911 Turbo S",
      image: "/images/porsche-911.jpg",
      price: 216000,
      category: "Sports",
      year: 2023,
      status: "Available",
    },
    {
      id: 5,
      name: "Tesla Model S Plaid",
      image: "/images/tesla-models.jpg",
      price: 131000,
      category: "Electric",
      year: 2023,
      status: "Available",
    },
    {
      id: 6,
      name: "Lamborghini Huracán",
      image: "/images/lamborghini-huracan.jpg",
      price: 268000,
      category: "Supercar",
      year: 2022,
      status: "Available",
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newCar, setNewCar] = useState({
    name: "",
    price: "",
    category: "Luxury",
    year: new Date().getFullYear(),
    status: "Available",
  });

  // Simulate checking for authentication on page load
  useEffect(() => {
    // In a real app, you would check for a valid Firebase auth session
    const checkAuth = () => {
      // Simulate an auth check - in a real app, check Firebase Auth state
      const isAuthenticated = localStorage.getItem("adminAuthenticated");

      if (!isAuthenticated) {
        // If not authenticated, redirect to login
        window.location.href = "/admin";
      }
    };

    checkAuth();
  }, []);

  // Simulate login for demo purposes
  useEffect(() => {
    // This is just for demo - in a real app, this would be handled by Firebase Auth
    localStorage.setItem("adminAuthenticated", "true");
  }, []);

  const handleLogout = () => {
    // Clear local storage and redirect to login
    localStorage.removeItem("adminAuthenticated");
    window.location.href = "/admin";
  };

  const handleAddCar = (e) => {
    e.preventDefault();

    // Create a new car with a unique ID
    const newId = Math.max(...inventory.map((car) => car.id)) + 1;
    const carToAdd = {
      ...newCar,
      id: newId,
      price: parseFloat(newCar.price),
      image: "/images/placeholder-car.jpg", // In a real app, you would upload and use the actual image
    };

    // Add to inventory
    setInventory([...inventory, carToAdd]);

    // Reset form
    setNewCar({
      name: "",
      price: "",
      category: "Luxury",
      year: new Date().getFullYear(),
      status: "Available",
    });

    // Hide form
    setShowAddForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCar({
      ...newCar,
      [name]: value,
    });
  };

  const handleDeleteCar = (id) => {
    // Filter out the car with the given ID
    const updatedInventory = inventory.filter((car) => car.id !== id);
    setInventory(updatedInventory);
  };

  const handleUpdateStatus = (id, newStatus) => {
    // Update the status of the car with the given ID
    const updatedInventory = inventory.map((car) => {
      if (car.id === id) {
        return { ...car, status: newStatus };
      }
      return car;
    });
    setInventory(updatedInventory);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your vehicle inventory
          </p>
        </div>

        <div className="flex mt-4 md:mt-0">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowAddForm(true)}
            className="mr-4 bg-[#3b82f6] text-white py-2 px-4 rounded-lg font-medium"
          >
            Add New Car
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogout}
            className="border border-gray-300 dark:border-gray-600 py-2 px-4 rounded-lg font-medium"
          >
            Logout
          </motion.button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Total Vehicles</h3>
          <p className="text-3xl font-bold text-[#3b82f6]">
            {inventory.length}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Categories</h3>
          <p className="text-3xl font-bold text-[#3b82f6]">
            {new Set(inventory.map((car) => car.category)).size}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Total Value</h3>
          <p className="text-3xl font-bold text-[#3b82f6]">
            $
            {inventory
              .reduce((sum, car) => sum + car.price, 0)
              .toLocaleString()}
          </p>
        </div>
      </div>

      {/* Add Car Form - Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Add New Vehicle</h2>
              <button
                onClick={() => setShowAddForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddCar}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Vehicle Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newCar.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border rounded-md bg-white dark:bg-gray-700"
                  placeholder="e.g. BMW M4 Competition"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium mb-2"
                >
                  Price (USD)
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={newCar.price}
                  onChange={handleInputChange}
                  required
                  min="0"
                  className="w-full p-3 border rounded-md bg-white dark:bg-gray-700"
                  placeholder="e.g. 84000"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium mb-2"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={newCar.category}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md bg-white dark:bg-gray-700"
                >
                  <option value="Luxury">Luxury</option>
                  <option value="Electric">Electric</option>
                  <option value="Sports">Sports</option>
                  <option value="Supercar">Supercar</option>
                  <option value="SUV">SUV</option>
                  <option value="Sedan">Sedan</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="year"
                  className="block text-sm font-medium mb-2"
                >
                  Year
                </label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  value={newCar.year}
                  onChange={handleInputChange}
                  required
                  min="2000"
                  max="2030"
                  className="w-full p-3 border rounded-md bg-white dark:bg-gray-700"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="status"
                  className="block text-sm font-medium mb-2"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={newCar.status}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md bg-white dark:bg-gray-700"
                >
                  <option value="Available">Available</option>
                  <option value="Sold">Sold</option>
                  <option value="Reserved">Reserved</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="mr-4 border border-gray-300 dark:border-gray-600 py-2 px-4 rounded-lg font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#3b82f6] text-white py-2 px-4 rounded-lg font-medium"
                >
                  Add Vehicle
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Inventory Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Image</th>
                <th className="py-3 px-6 text-left">Vehicle</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-left">Year</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((car) => (
                <tr
                  key={car.id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750"
                >
                  <td className="py-4 px-6">{car.id}</td>
                  <td className="py-4 px-6">
                    <div className="w-12 h-12 relative rounded overflow-hidden">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </td>
                  <td className="py-4 px-6 font-medium">{car.name}</td>
                  <td className="py-4 px-6">${car.price.toLocaleString()}</td>
                  <td className="py-4 px-6">{car.category}</td>
                  <td className="py-4 px-6">{car.year}</td>
                  <td className="py-4 px-6">
                    <select
                      value={car.status}
                      onChange={(e) =>
                        handleUpdateStatus(car.id, e.target.value)
                      }
                      className="p-1 rounded border"
                    >
                      <option value="Available">Available</option>
                      <option value="Sold">Sold</option>
                      <option value="Reserved">Reserved</option>
                      <option value="Maintenance">Maintenance</option>
                    </select>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleDeleteCar(car.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </motion.button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
