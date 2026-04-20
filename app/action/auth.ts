"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { UserType } from "../_types/user";
import { deleteSession, setSessionCookie } from "../_lib/session";

const API_URL = "http://localhost:3001";

export const loginAction = async (formData: FormData)=> {
  const email = formData.get("email");
  const password = formData.get("password");

  let user: UserType | undefined;

  try {
  const response = await axios.get(
  `${API_URL}/users?email=${email}&password=${password}`
);
console.log( "User data::::::::::::::::::", response.data );
    user = response.data[0];  
    if (user) {
    await setSessionCookie({name:user.name, email: user.email, id: user.id});
    }
  } catch (error) {
    console.log( "Catched Error::::::::::::::::::", error );

    console.log("API error:", error);
    redirect("/login?error=api");
  }

  // ❗ handle user not found OUTSIDE try/catch
  if (!user) {
    console.log("User not found::::::::::::::::::::::");
    redirect("/login?error=user");
  }

  // ✅ success (DO NOT wrap this in try/catch)
  redirect("/dashboard");
};

export const logout = async () => {
  await deleteSession();
  redirect("/login");
};