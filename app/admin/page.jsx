"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function AdminLoginPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if user is already logged in
  useEffect(() => {
    if (user && !loading) {
      router.push("/admin/dashboard");
    }
  }, [user, loading, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Authenticate with Firebase
      await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      // The redirect will happen automatically due to the useEffect above
    } catch (err) {
      console.error("Login error:", err);

      // Display appropriate error message based on Firebase error
      if (
        err.code === "auth/invalid-credential" ||
        err.code === "auth/invalid-email" ||
        err.code === "auth/invalid-password"
      ) {
        setError("Invalid email or password");
      } else if (err.code === "auth/too-many-requests") {
        setError("Too many failed login attempts. Please try again later.");
      } else if (err.code === "auth/user-disabled") {
        setError("This account has been disabled.");
      } else {
        setError("An error occurred during login. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // If loading auth state, show minimal loading state
  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Login</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Sign in to access the admin dashboard
          </p>
        </div>

        {error && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 p-4 rounded-md mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md bg-white dark:bg-gray-700"
              placeholder="admin@autogallery.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md bg-white dark:bg-gray-700"
              placeholder="••••••••"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className={`w-full bg-[#3b82f6] text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Demo credentials:
            <br />
            Email: admin@autogallery.com
          </p>
        </div>
      </motion.div>
    </div>
  );
}
