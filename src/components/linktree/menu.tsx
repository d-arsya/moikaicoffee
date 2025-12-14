import Image from "next/image";
import Link from "next/link";
import { Book } from "lucide-react";

export default function Menu() {
  const menus = [
    "Rice Bowl",
    "Nashville",
    "Nasi Goreng Kecombrang",
    "Kopi",
    "Dawet Latte",
  ];

  return (
    <section className="">
      <h2 className="text-center font-semibold text-lg mb-3">Our Menu</h2>

      <div className="grid grid-flow-col grid-rows-2 auto-cols-[140px] gap-x-4 gap-y-5 overflow-x-auto px-6 pb-2">
        {menus.map((menu, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden bg-primary shadow-md shadow-primary/30"
          >
            <Image
              src={`/menus/menus-${index + 1}.jpg`}
              alt={menu}
              width={200}
              height={200}
              className="h-32 w-full object-cover rounded-md"
            />
            <p className="text-center text-sm font-medium py-1 text-white">
              {menu}
            </p>
          </div>
        ))}
      </div>
      <div className="p-6">
        <Link
          href={"/menu.pdf"}
          className="bg-primary rounded-md w-full p-2 text-center items-center flex justify-center gap-x-3 font-semibold text-lg"
        >
          <Book />
          Lihat Semua Menu
        </Link>
      </div>
    </section>
  );
}
