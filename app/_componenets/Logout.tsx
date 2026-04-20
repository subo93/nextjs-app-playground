"use client";

import React from "react";
import { logout } from "../action/auth";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="hover:text-blue-600 mr-8"
    >
      Logout
    </button>
  );
};

export default Logout;