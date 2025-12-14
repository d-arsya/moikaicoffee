import Image from "next/image";
import Pola from "../../public/pattern-2.png";
import Foto from "../../public/pour.jpg";
export default function Advertisement() {
  return (
    <section
      id="promo"
      className="relative bg-black justify-center w-full flex items-center p-3 py-24"
    >
      <Image
        src={Pola}
        alt="pola"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="w-full md:w-5/6 rounded-3xl md:h-140 flex flex-col md:flex-row-reverse overflow-hidden shadow-2xl bg-white">
        <div className="relative bg-gray-900 text-white p-6 pb-24 md:pb-3 md:w-1/2 flex items-end">
          <div className="absolute inset-0 bg-cover bg-center opacity-70">
            <Image
              src={Foto}
              alt="foto"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold tracking-tight mt-32 mb-2 md:text-7xl">
              NGOPI PAGI
            </h1>
            <p className="text-sm md:text-lg font-semibold opacity-80 mb-4 text-primary">
              07AM - 10AM
            </p>

            <div className="flex items-center justify-between">
              <p
                id="promo-items"
                className="text-md md:text-xl font-light leading-snug"
              >
                Americano
                <br />
                Latte
                <br />
                Cappuccino
              </p>
              <span
                id="promo-price"
                className="text-6xl md:text-8xl italic font-light"
              >
                15K
              </span>
              <div className="text-right">
                <p className="text-sm mt-1 md:text-lg">📍 Moikai CDT</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500 p-6 md:p-18 text-gray-900 -mt-16 md:mt-0 relative z-20 md:w-1/2">
          <div className="flex justify-center items-center mb-4 md:mb-18">
            <hr className="w-10 md:w-32 border-t-2 border-white mr-2" />
            <span className="font-bold md:text-xl tracking-wider">
              PROMOTION
            </span>
            <hr className="w-10 md:w-32 border-t-2 border-white ml-2" />
          </div>

          <h2 className="font-bold tracking-widest text-xs md:text-xl mb-1 md:mb-3">
            SPECIAL FOR YOU
          </h2>
          <h2 className="text-xl md:text-5xl font-extrabold mt-1 mb-4">
            <span className="text-white">MORNING</span> COFFEE PROMO
          </h2>

          <p className="font-medium mb-3">07:00 - 10:00 WIB</p>
          <p className="text-2xl md:text-4xl font-bold">15K</p>
          <h1 className="ml-2 text-sm md:hidden">
            • Americano • Latte • Cappuccino
          </h1>
          <h1 className="ml-2 text-md hidden md:block">
            • Americano <br /> • Latte <br /> • Cappuccino
          </h1>
          <p className="text-xs md:text-lg mt-4 text-red-500">
            *Berlaku di Moikai Cabang CDT
          </p>
        </div>
      </div>
    </section>
  );
}
