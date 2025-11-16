import React from "react";

export const Navbar = () => {
  return (
    <div className="mt-3 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center items-center">
      {/* gambar1  yang besar */}
      <img
        src="/src/assets/bmi.png"
        className="w-3/4 mx-auto block lg:hidden"
        alt=""
      />
      <div className="relative items-center justify-center mx-auto">
        {/* gambar2 yang kecil mepet */}
        <img
          src="/src/assets/bmi.png"
          className="w-10 hidden lg:block"
          alt=""
        />
        <h1 className="text-2xl font-bold text-zinc-300">BMI Calculator</h1>
      </div>
    </div>

    // artinya kalau mau lg nya saja yang dikendalikan
  );
};
