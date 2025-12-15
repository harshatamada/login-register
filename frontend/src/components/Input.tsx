"use client";

import React from "react";

type InputProps={
    type?:string;
    placeholder?:string;
value:string
onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;};

export default function Input({
    type="text",placeholder,value,onChange,
}:InputProps){
   return(
    <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full border border-gray-300 px-3 py-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
   );
}

