"use client";

import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <form className="rounded-full overflow-hidden bg-white border-2 border-gray-300 flex items-center justify-between">
      <input
        type="text"
        placeholder="Search"
        className="w-[120px] sm:w-[300px] md:w-[500px] lg:w-[600px] bg-transparent py-1 px-4 outline-none"
      />
      <button
        type="submit"
        className="bg-gray-100 border-l-2 border-gray-300 text-xl lg:text-2xl rounded-r-full py-2 px-4 lg:px-6"
      >
        <CiSearch />
      </button>
    </form>
  );
};

export default Search;
