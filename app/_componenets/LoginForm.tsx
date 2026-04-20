
"user client";
import React from "react";

import { loginAction } from "../action/auth";

const LoginForm = () => {
  return (

    <form  action={loginAction} className="space-x-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" name="email" placeholder="Enter your Email" required className="mt-1 block w-full rounded-md boarder-gray-300 shadow-sm " />
      </div>

       <div className="mt-3">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" name="password" placeholder="Enter your Password" required className="mt-1 block w-full rounded-md boarder-gray-300 shadow-sm " />
      </div>
<button type="submit" className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md">Login   </button>
    </form>
    
  );
};

export default LoginForm;