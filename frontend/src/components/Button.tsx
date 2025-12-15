"use client";
import React from "react";

type ButtonProps={
    children:React.ReactNode;
    type?:"button" | "submit";
    onClick?:()=>void;
    disabled?:boolean;
}

export default function Button({
    children,type="button",onClick,disabled=false,
}:ButtonProps){
    return(
        <button
        type={type}
        onClick={onClick}
        disabled={disabled}
      className="w-full border border-gray-300 px-3 py-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
    {children}
    </button>
    );
}

