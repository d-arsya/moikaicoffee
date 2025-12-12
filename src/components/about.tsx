import Image from "next/image";
import Foto from "../../public/1.jpg";
export default function About() {
  return (
    <>
      <section className="bg-black md:hidden">
        <div className="px-6 py-24">
          <h1 className="text-primary font-bold tracking-widest flex items-center gap-x-3">
            <span className="h-0.5 bg-white w-10 inline-block"></span>
            ABOUT US
            <span className="h-0.5 bg-white w-10 inline-block"></span>
          </h1>
          <h1 className="font-bold text-2xl mt-6">
            JAPANESE <span className="text-primary">VINTAGE COFFEE</span> PLACE
          </h1>
          <p className="mt-10 text-sm text-justify leading-loose">
            Moikai Coffee menghadirkan suasana homey yang hangat dan
            menenangkan. Nama 'Moikai' diambil dari kata Jepang 'Mouikkai' (once
            more), sebuah filosofi untuk menciptakan pengalaman yang membuat
            rindu. Mulai dari racikan kopi hingga suasana di setiap sudutnya,
            kami pastikan Anda merasa senyaman di rumah sendiri dan selalu ingin
            kembali.
          </p>
        </div>
        <Image src={Foto} alt="" />
      </section>
      <section className="bg-black hidden md:flex flex-row items-center">
        <Image src={Foto} alt="" />
        <div className="py-24 flex flex-row">
          <h1 className="text-primary font-bold tracking-widest flex flex-row items-center gap-x-1 rotate-270">
            <span className="h-0.5 bg-white w-10 inline-block"></span>
            ABOUT US
            <span className="h-0.5 bg-white w-10 inline-block"></span>
          </h1>
          <div>
            <h1 className="font-bold text-6xl mt-6 leading-normal">
              JAPANESE <span className="text-primary">VINTAGE COFFEE</span>{" "}
              PLACE
            </h1>
            <p className="mt-10 text-justify leading-loose w-3/4">
              Moikai Coffee menghadirkan suasana homey yang hangat dan
              menenangkan. Nama 'Moikai' diambil dari kata Jepang 'Mouikkai'
              (once more), sebuah filosofi untuk menciptakan pengalaman yang
              membuat rindu. Mulai dari racikan kopi hingga suasana di setiap
              sudutnya, kami pastikan Anda merasa senyaman di rumah sendiri dan
              selalu ingin kembali.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
