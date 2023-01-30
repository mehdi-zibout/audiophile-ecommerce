"use client";
import { useState } from "react";

function NumbersCounter() {
  const [numbers, setNumbers] = useState(0);

  return (
    <div className="bg-[#F1F1F1] max-w-[120px] text-subtitle flex justify-between items-center p-[15px] text-black">
      <button
        disabled={numbers <= 0}
        onClick={() => {
          numbers <= 0 ? setNumbers(0) : setNumbers((numbers) => numbers - 1);
        }}
        className="disabled:cursor-default text-opacity-25 text-black hover:text-[#D87D4A] hover:text-opacity-100"
      >
        -
      </button>
      <p className="">{numbers}</p>
      <button
        onClick={() => setNumbers((numbers) => numbers + 1)}
        className="text-opacity-25 text-black hover:text-[#D87D4A] hover:text-opacity-100"
      >
        +
      </button>
    </div>
  );
}

export default NumbersCounter;
