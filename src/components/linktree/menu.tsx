import Image from "next/image";
import Link from "next/link";
import { Book } from "lucide-react";

export default function Menu() {
  return (
    <section className="">
      <h2 className="text-center font-semibold text-lg mb-3">Our Menu</h2>

      <div className="grid grid-flow-col grid-rows-2 auto-cols-[170px] gap-x-4 gap-y-5 overflow-x-auto px-6 pb-2">
        {Array.from({ length: 10 }, (_, i) => `Menu ${i + 1}`).map(
          (menu, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-primary shadow-md shadow-primary/30"
            >
              <Image
                src={`/posters/poster-${index + 1}.png`}
                alt={menu}
                width={1080}
                height={1920}
                className="w-full aspect-9/16 object-cover rounded-md scale-105 transition-transform duration-500 ease-out hover:scale-100"
              />
            </div>
          )
        )}
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
