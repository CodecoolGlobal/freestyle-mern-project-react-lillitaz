import React from "react";

export default function button({ type, value, onClick, innerText }) {
  return (
    <div>
      <button type={type} class="block w-full bg-blue-900 mt-5 py-2 rounded-1xl hover:bg-blue-800 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2" value={value} onClick={onClick}>
        {innerText}
      </button>
    </div>
  );
}
