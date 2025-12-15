"use client";

import { useState } from "react";
import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
 const API_URL = "http://localhost:5000/api/auth";
export default function AuthPage() {
   

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
     const handleSubmit = async () => {
  try {
    const url = isLogin
      ? `${API_URL}/login`
      : `${API_URL}/register`;

    const body = isLogin
      ? { email, password }
      : { name, email, password };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Something went wrong");
      return;
    }

    // LOGIN SUCCESS
    if (isLogin) {
      localStorage.setItem("token", data.token);
      alert("Login successful");
      console.log("User:", data.user);
    } 
    // REGISTER SUCCESS
    else {
      alert("Registration successful. Please login.");
      setIsLogin(true);
    }
  } catch (error) {
    console.error(error);
    alert("Server error");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        {/* Title */}
        <h2 className="text-2xl  font-bold text-center mb-6 text-gray-800">
          {isLogin ? "Login" : "Register"}
        </h2>

        {/* Toggle */}
        <div className="flex mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-2 rounded-l-lg ${
              isLogin ? "bg-blue-600 text-white" : "bg-gray-600"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-2 rounded-r-lg ${
              !isLogin ? "bg-blue-600 text-white" : "bg-gray-600"
            }`}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {!isLogin && (
            <Input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="button" onClick={handleSubmit}>
            {isLogin ? "Login" : "Register"}
          </Button>
          
        </div>
      </div>
    </div>

    
  );
}


