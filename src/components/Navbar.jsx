"use client";

//* React
import { useState } from "react";
//* Next
import Link from "next/link";
import Image from "next/image";
//* Components
import { Search } from ".";
//* React Icons
import { VscMenu } from "react-icons/vsc";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between p-3 lg:px-6">
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="max-md:hidden text-xl rounded-full p-2 hover:bg-gray-100"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <TfiClose /> : <VscMenu />}
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
