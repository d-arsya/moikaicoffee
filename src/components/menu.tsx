import Image from "next/image";
import Foto from "../../public/1.jpg";
import Link from "next/link";
export default function Menu() {
  const menusCdt = [
    {
      title: "COFFEE BASED",
      description: "Lorem ipsum",
      picture: Foto,
    },
    {
      title: "COFFEE BASED",
      description: "Lorem ipsum",
      picture: Foto,
    },
    {
      title: "COFFEE BASED",
      description: "Lorem ipsum",
      picture: Foto,
    },
  ];
  const menusTamsis = [
    {
      title: "COFFEE BASED",
      description: "Lorem ipsum",
      picture: Foto,
    },
    {
      title: "COFFEE BASED",
      description: "Lorem ipsum",
      picture: Foto,
    },
    {
      title: "COFFEE BASED",
      description: "Lorem ipsum",
      picture: Foto,
    },
  ];
  return (
    <section className="bg-primary py-6">
      <div className="p-6">
        <h1 className="text-black font-bold tracking-widest flex items-center gap-x-3 my-6">
          <span className="h-0.5 bg-white w-10 inline-block"></span>
          OUR MENU
          <span className="h-0.5 bg-white w-10 inline-block"></span>
        </h1>
        <h1 className="text-black font-bold text-xl">
          <span className="text-white">PICK</span> YOUR FAVORITE MENU
        </h1>
        <p className="text-black text-sm mt-2">Pilih menu andalanmu sekarang</p>
        <h1 className="text-black font-bold mt-12">CABANG CDT</h1>
        <p className="border border-1 border-black p-1 mt-2 rounded-md w-max text-xs text-black font-bold">
          FOOD & DRINKS AVAILABLE
        </p>
      </div>
      <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide px-6">
        {menusCdt.map((item, i) => (
          <div key={i} className="flex-none w-72 text-black">
            <div className="relative w-full h-96 mb-2">
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
      <hr className="my-6" />
      <div className="p-6">
        <h1 className="text-xl italic">
          Temukan suasana berbeda di tiap cabang kami...
        </h1>
        <h1 className="text-black font-bold mt-12">CABANG TAMSIS</h1>
        <p className="border border-1 border-black p-1 mt-2 rounded-md w-max text-xs text-black font-bold">
          DRINKS ONLY
        </p>
      </div>
      <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide px-6">
        {menusTamsis.map((item, i) => (
          <div key={i} className="flex-none w-72 text-black">
            <div className="relative w-full h-96 mb-2">
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
        href={""}
        className="bg-black text-primary rounded-md p-2 w-max m-auto block"
      >
        Lihat Semua Menu Kami
      </Link>
    </section>
  );
}
