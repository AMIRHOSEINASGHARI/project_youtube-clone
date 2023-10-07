import { categories } from "@/utils/constants";
import Link from "next/link";

const Category = () => {
  return (
    <section className="md:hidden flex gap-3 overflow-auto p-3 fixed top-14 bg-white">
      {categories.map((item) => (
        <Link
          key={item.name}
          href="/"
          className="flex items-center gap-3 bg-gray-2 rounded-xl py-2 px-3"
        >
          <div className="text-2xl">{item.icon}</div>
          <p className="font-light">{item.name}</p>
        </Link>
      ))}
    </section>
  );
};

export default Category;
