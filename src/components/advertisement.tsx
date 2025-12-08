export default function Advertisement() {
  return (
    <section className="bg-black items-center p-3 py-24">
      {/* <Image src={PromoMobile} alt="" /> */}
      <div className="max-w-sm rounded-3xl overflow-hidden shadow-2xl bg-white">
        <div className="relative bg-gray-900 text-white p-6 pb-24">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{ backgroundImage: "url('/1.jpg')" }}
          ></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold tracking-tight mt-32 mb-2">
              NGOPI PAGI
            </h1>
            <p className="text-sm font-semibold opacity-80 mb-4 text-primary">
              07AM - 10AM
            </p>

            <div className="flex items-center justify-between">
              <p id="promo-items" className="text-md font-light leading-snug">
                Americano
                <br />
                Latte
                <br />
                Cappuccino
              </p>
              <span id="promo-price" className="text-6xl italic font-light">
                15K
              </span>
              <div className="text-right">
                <p className="text-sm mt-1">📍 Moikai CDT</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500 p-6 text-gray-900 -mt-16 relative z-20">
          <div className="flex justify-center items-center mb-4">
            <hr className="w-10 border-t-2 border-white mr-2" />
            <span className="font-bold tracking-wider">PROMOTION</span>
            <hr className="w-10 border-t-2 border-white ml-2" />
          </div>

          <h2 className="font-bold tracking-widest text-xs mb-1">
            SPECIAL FOR YOU
          </h2>
          <h2 className="text-xl font-extrabold mt-1 mb-4">
            <span className="text-white">MORNING</span> COFFEE PROMO
          </h2>

          <p className="font-medium mb-3">07:00 - 22:00 WIB</p>
          <p className="text-2xl font-bold">15K</p>
          <h1 className="ml-2 text-sm">• Americano • Latte • Cappuccino</h1>
          <p className="text-xs mt-4 text-red-500">
            *Berlaku di Moikai Cabang CDT
          </p>
        </div>
      </div>
    </section>
  );
}
