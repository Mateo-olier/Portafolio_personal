import React from "react";

export default function Footer() {
  const year = new Date();
  return (
    <div className="w-full flex justify-center items-center h-28">
      <h1 className="text-2xl">&copy; Alexander Olier - {year.getFullYear()}</h1>
    </div>
  );
}
