import Link from "next/link";
import React from "react";
import Logout from "./Logout";
import LoginForm from "./LoginForm";
import MyDashboard from "./MyDashboard";
import { getSession } from "../_lib/session";
import { logout } from "../action/auth";

const Nav = async () => {
  const session = await getSession();
 

  return (
    <nav className="ng-white shadow-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Contact Manager
        </Link>
        <div className="flex items-center space-x-4">
          {session ? (
            <>
              <Link
                href="/dashboard"
                className="text-gray-700 hover:text-gray-900"
              >
                <MyDashboard />
              </Link>

              <Logout />
              {/* <button onClick={handleLogout}></button>//move to clinet */}
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-blue-600 mr-8">
                LoginNow!
              </Link>
              {/* <Link href="/register" className="hover:text-blue-600">
              Register
            </Link> */}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
