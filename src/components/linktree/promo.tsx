import Image from "next/image";
import Foto from "../../../public/pour.jpg";
export default function Promo() {
  return (
    <>
      <h1 className="text-center font-bold text-lg my-3">Promo</h1>
      <div className="w-full rounded-3xl flex flex-col overflow-hidden shadow-2xl bg-white">
        <div className="relative bg-gray-900 text-white px-6 pb-24 flex items-end">
          <div className="absolute inset-0 bg-cover bg-center opacity-70">
            <Image
              src={Foto}
              alt="foto"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold tracking-tight mt-6">
              NGOPI PAGI
            </h1>
            <p className="text-sm mt-2 bg-primary rounded-sm w-max my-3 p-1">
              07:00 - 10:00 WIB
            </p>
            <h1 className="text-sm">• Americano • Latte • Cappuccino</h1>
          </div>
        </div>

        <div className="bg-yellow-500 p-6 text-gray-900 -mt-16 relative z-20">
          <div className="flex items-center flex-row gap-x-2">
            <h2 className="font-bold tracking-widest text-xs">
              SPECIAL FOR YOU
            </h2>
            <span className="bg-black text-white font-bold px-2 py-1 text-xs rounded-md">
              CDT ONLY
            </span>
          </div>
          <h2 className="text-xl font-extrabold mt-1 mb-2">
            <span className="text-white">MORNING</span> COFFEE PROMO{" "}
            <span className="bg-black text-md text-primary rounded-md py-1 px-2 ml-1">
              15 k
            </span>
          </h2>
        </div>
      </div>
    </>
  );
}
