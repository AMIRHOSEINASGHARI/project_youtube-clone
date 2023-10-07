"use client";

//* React
import { useContext } from "react";
//* Next
import Link from "next/link";
import Image from "next/image";
//* Context
import { MainContext } from "@/utils/ContextProvider";
//* Components
import { Search } from ".";
//* React Icons
import { VscMenu } from "react-icons/vsc";

const Navbar = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);

  return (
    <header className="fixed top-0 bg-white w-full flex items-center justify-between p-3 lg:px-6">
      <div className="flex items-center gap-7 lg:gap-10">
        <button
          type="button"
          className="max-md:hidden text-xl p-2 rounded-full hover:bg-gray-100"
          onClick={() => setShowMenu(!showMenu)}
        >
          <VscMenu />
        </button>
        <Link href="/" className="flex items-center">
          <Image
            className="w-20 lg:w-24"
            src="/youtube.svg"
            width={130}
            height={130}
            alt="LOGO"
            priority
          />
        </Link>
      </div>
      <Search />
    </header>
  );
};

export default Navbar;
