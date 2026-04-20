
//server comp by defailt
import React from "react";
import LoginForm from "../../_componenets/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="max-w-md mx-auto bg-whote p-8 rounded-lg shadow-md">
<h1 className="text-2xl front-bold mb-6">login</h1>
<LoginForm/>
<p>Dont have and account? <Link href="/register" className="text-blue-600 hover:underline">Register</Link></p>

    </div>
  );
};

export default LoginPage;