"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/admin");
    }
  }, [user, loading, router]);

  // Show loading state if we're still checking authentication
  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  // If we have a user, render the protected content
  if (user) {
    return children;
  }

  // This is just a fallback, the useEffect should handle the redirect
  return null;
}
