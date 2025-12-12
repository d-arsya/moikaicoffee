import Image from "next/image";
import LeftText from "../../public/text-left.png";
import RightText from "../../public/text-right.png";
import FotoOmbak from "../../public/ombak.png";
export default function Jumbotron() {
  return (
    <section className="relative pt-32 md:h-fit h-dvh flex items-center justify-center">
      <Image
        alt={"left"}
        src={LeftText}
        className="absolute top-20 left-12 z-1"
      />
      <Image
        alt={"right"}
        src={RightText}
        className="absolute bottom-20 right-12 z-1"
      />
      <div className="z-2 rounded-full bg-linear-to-t mb-20 from-black to-primary w-80 md:w-2/3 lg:w-1/3 aspect-square p-2 flex flex-col gap-y-4 items-center justify-center">
        <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl md:text-center">
          Moikai Coffee
        </h1>
        <p className="font-bold text-xs md:text-lg">
          • Signature Brews • Cozy Space • Good Stories
        </p>
        <p className="text-xs text-center md:text-md">
          Nikmati kopi dengan tenang dan suasana yang hangat, hingga kamu ingin
          datang sekali lagi.
        </p>
      </div>
      <Image
        alt={"ombak"}
        src={FotoOmbak}
        className="absolute bottom-0 right-0 z-1 w-full md:w-1/2"
      />
      <Image
        alt={"ombak"}
        src={FotoOmbak}
        className="absolute bottom-3 left-0 z-1 w-1/2 hidden md:block"
      />
    </section>
  );
}
