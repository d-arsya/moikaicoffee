import Image from "next/image";
import Link from "next/link";
import { Book } from "lucide-react";

export default function Menu() {
  return (
    <section className="">
      <h2 className="text-center font-semibold text-lg mb-3">Our Menu</h2>

      <div className="grid grid-flow-col grid-rows-2 auto-cols-[170px] gap-x-4 gap-y-5 overflow-x-auto px-6 pb-2">
        {[
          {
            alt: "Nasi Goreng Kecombrang Moikai Coffee - A harmony of spices and kecombrang aroma, local twist that lingers beautifully",
            src: "/posters/nasi-goreng-kecombrang.png",
          },
          {
            alt: "Nasi Hainan Moikai Coffee - A new favorite is here. The kind of meal that feels like a hug",
            src: "/posters/nasi-hainan.png",
          },
          {
            alt: "Moipao Soft Fluffy Warm Comforting - Flavors: Almond Choco, Savory Chicken, Ham and Cheese",
            src: "/posters/moipao-flavors.png",
          },
          {
            alt: "Nasi Pecel Moi - Taste the essence of Java. A local legend return: Pecel with a modern twist",
            src: "/posters/nasi-pecel-moi.png",
          },
          {
            alt: "Moikai Ramen - Have a good food! Authentic Japanese Ramen at Moikai Coffee",
            src: "/posters/moikai-ramen.png",
          },
          {
            alt: "Sweet and Buttery Pastry Selection - Almond Croissant, Triple Cheese Pain Suisse, Pain Au Chocolate, Beef And Cheese",
            src: "/posters/pastry-selection.png",
          },
          {
            alt: "Butterscotch Sea Salt Latte - Creamy, salty, sweet signature latte that makes every sip feel more alive",
            src: "/posters/butterscotch-sea-salt-latte.png",
          },
          {
            alt: "Dawet Latte New Drop - Unique fusion of traditional Dawet and Coffee. Available at Moikai CDT",
            src: "/posters/dawet-latte.png",
          },
          {
            alt: "Ayam Mentega Rice Bowl - Delicious Butter Chicken. Available at Moikai CDT",
            src: "/posters/ayam-mentega-rice-bowl.png",
          },
          {
            alt: "Soft Sourdough Bread - Bite into happiness! Available in Charcoal and Matcha flavors",
            src: "/posters/soft-sourdough-bread.png",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden bg-primary shadow-md shadow-primary/30"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={1080}
              height={1920}
              className="w-full aspect-9/16 object-cover rounded-md scale-105 transition-transform duration-500 ease-out hover:scale-100"
            />
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
