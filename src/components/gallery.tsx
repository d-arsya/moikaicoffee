import Image from "next/image";
import Link from "next/link";
import Foto from "../../public/1.jpg";
export default function Gallery() {
  return (
    <section className="p-3 pt-24 pb-12">
      <h1 className="font-bold text-white text-center text-3xl">
        @moikaicoffee
      </h1>
      <Link
        className="bg-primary text-xs my-6 text-black w-max font-bold block rounded-md p-2 m-auto"
        href={"https://instagram.com/moikaicoffee"}
      >
        FOLLOW US ON INSTAGRAM
      </Link>
      <p className="text-center text-sm md:text-lg italic font-medium">
        "Jadilah bagian dari perjalanan kami, abadikan kenangan manis di tiap
        sudut moikai"
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12 md:px-32">
        <Image src={Foto} alt="a" className="rounded-md" />
        <Image src={Foto} alt="a" className="rounded-md" />
        <Image src={Foto} alt="a" className="rounded-md" />
        <Image src={Foto} alt="a" className="rounded-md" />
        <Image src={Foto} alt="a" className="rounded-md" />
        <Image src={Foto} alt="a" className="rounded-md" />
        <Image src={Foto} alt="a" className="rounded-md" />
        <Image src={Foto} alt="a" className="rounded-md" />
      </div>
    </section>
  );
}
