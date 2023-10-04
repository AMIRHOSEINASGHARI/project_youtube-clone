"use client";

//* React
import { useContext } from "react";
//* Next
import Link from "next/link";
import Image from "next/image";
//* Context
import { MenuContext } from "@/utils/MenuContextProvider";
//* Components
import { Search } from ".";
//* React Icons
import { VscMenu } from "react-icons/vsc";

const Navbar = () => {
  const { showMenu, setShowMenu } = useContext(MenuContext);

  return (
    <header className="flex items-center justify-between p-3 lg:px-6">
      <div className="flex items-center gap-7">
        <button
          type="button"
          className="max-md:hidden text-xl p-2 rounded-full hover:bg-gray-100"
          onClick={() => setShowMenu(!showMenu)}
        >
          <VscMenu />
        </button>
        <Link href="/" className="flex items-center gap-2">
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
