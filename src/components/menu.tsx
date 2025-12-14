import Image from "next/image";
import Foto from "../../public/1.jpg";
import Matahari from "../../public/sun.png";
import Link from "next/link";

export default function Menu() {
  const menusCdt = [
    {
      title: "Rice Bowl",
      description: "Menu nasi praktis dengan pilihan lauk favorit.",
      picture: "/menus/menus-1.jpg",
    },
    {
      title: "Nashville",
      description: "Ayam goreng pedas ala Nashville yang juicy.",
      picture: "/menus/menus-2.jpg",
    },
    {
      title: "Nasi Goreng Kecombrang",
      description: "Nasi goreng dengan aroma kecombrang yang khas.",
      picture: "/menus/menus-3.jpg",
    },
    {
      title: "Kopi",
      description: "Signature coffee Moikai untuk menemani harimu.",
      picture: "/menus/menus-4.jpg",
    },
    {
      title: "Dawet Latte",
      description: "Perpaduan unik espresso dan dawet yang creamy.",
      picture: "/menus/menus-5.jpg",
    },
  ];
  const menusTamsis = [
    {
      title: "Rice Bowl",
      description: "Menu nasi praktis dengan pilihan lauk favorit.",
      picture: "/menus/menus-1.jpg",
    },
    {
      title: "Nashville",
      description: "Ayam goreng pedas ala Nashville yang juicy.",
      picture: "/menus/menus-2.jpg",
    },
    {
      title: "Nasi Goreng Kecombrang",
      description: "Nasi goreng dengan aroma kecombrang yang khas.",
      picture: "/menus/menus-3.jpg",
    },
    {
      title: "Kopi",
      description: "Signature coffee Moikai untuk menemani harimu.",
      picture: "/menus/menus-4.jpg",
    },
    {
      title: "Dawet Latte",
      description: "Perpaduan unik espresso dan dawet yang creamy.",
      picture: "/menus/menus-5.jpg",
    },
  ];

  return (
    <section id="menu" className="relative bg-primary py-6">
      <Image
        src={Matahari}
        alt="sun"
        className="absolute right-0 top-0 -mt-32 -mr-32"
      />
      <Image
        src={Matahari}
        alt="sun"
        className="absolute left-0 bottom-0 -mb-32 -ml-32"
      />
      <div className="p-6 md:px-32 justify-center flex flex-col">
        <h1 className="text-black font-bold tracking-widest md:text-3xl flex items-center gap-x-3 my-6 m-auto">
          <span className="h-0.5 bg-white w-10 md:w-30 inline-block"></span>
          OUR MENU
          <span className="h-0.5 bg-white w-10 md:w-30 inline-block"></span>
        </h1>
        <h1 className="text-black font-bold text-xl md:text-4xl md:text-center">
          <span className="text-white">PICK</span> YOUR FAVORITE MENU
        </h1>
        <p className="text-black text-sm md:text-md mt-2 md:text-center">
          Pilih menu andalanmu sekarang
        </p>
        <h1 className="text-black font-bold mt-12 md:text-3xl">CABANG CDT</h1>
        <p className="border border-1 border-black p-1 mt-2 rounded-md w-max text-xs text-black font-bold">
          FOOD & DRINKS AVAILABLE
        </p>
      </div>
      <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide px-6 md:px-32">
        {menusCdt.map((item, i) => (
          <div key={i} className="flex-none w-72 md:w-1/3 text-black">
            <div className="relative w-full h-96 md:h-[500px] mb-2">
              <Image
                src={item.picture}
                alt={item.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="p-6 md:px-32 mt-6">
        <h1 className="text-xl md:text-4xl italic">
          Temukan suasana berbeda di tiap cabang kami...
        </h1>
        <h1 className="text-black font-bold mt-12 md:text-3xl">
          CABANG TAMSIS
        </h1>
        <p className="border border-1 border-black p-1 mt-2 rounded-md w-max text-xs text-black font-bold">
          DRINKS ONLY
        </p>
      </div>
      <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide px-6 md:px-32">
        {menusTamsis.map((item, i) => (
          <div key={i} className="flex-none w-72 md:w-1/3 text-black">
            <div className="relative w-full h-96 md:h-[500px] mb-2">
              <Image
                src={item.picture}
                alt={item.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
      <Link
        href={"/menu.pdf"}
        className="bg-black text-primary rounded-md p-2 w-max m-auto block"
      >
        Lihat Semua Menu Kami
      </Link>
    </section>
  );
}
