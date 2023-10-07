"use client";

//* React
import { useContext } from "react";
//* Next
import Link from "next/link";
import Image from "next/image";
//* Context
import { MainContext } from "@/utils/ContextProvider";
import { categories } from "@/utils/constants";

const Sidebar = () => {
  const { showMenu } = useContext(MainContext);

  return (
    <section className="max-md:hidden bg-white fixed left-0 top-[65px] flex flex-col justify-between h-screen overflow-auto pb-16 px-3">
      <div>
        {categories.map((item) => (
          <Link
            key={item.name}
            href="/"
            className="flex items-center gap-8 py-4 lg:px-5 px-2 rounded-xl hover:bg-gray-2"
          >
            <div className="text-2xl">{item.icon}</div>
            {showMenu && <p className="font-light">{item.name}</p>}
          </Link>
        ))}
      </div>
      <Link
        href="/"
        className="flex items-center gap-8 py-4 lg:px-5 px-2 rounded-xl hover:bg-gray-2"
      >
        <Image src="/logo.png" width={25} height={25} alt="LOGO" priority />
        {showMenu && <p className="font-bold">Home</p>}
      </Link>
    </section>
  );
};

export default Sidebar;
