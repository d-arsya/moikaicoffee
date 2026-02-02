import Image from "next/image";
import Link from "next/link";
// unused Foto import removed
import Pola from "../../public/pattern-3.png";
export default function Gallery() {
  // photos array replaced by static array in render
  return (
    <section className="relative p-3 pt-24 pb-12">
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
        &quot;Jadilah bagian dari perjalanan kami, abadikan kenangan manis di tiap
        sudut moikai&quot;
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12 md:px-32">
        {[
          {
            src: "/photos/soft-opening-event-speaker.jpg",
            alt: "Moikai Coffee soft opening event with speaker",
          },
          {
            src: "/photos/classic-interior-wave-mural.jpg",
            alt: "Moikai Coffee interior with wave mural and event speaker",
          },
          {
            src: "/photos/customer-working-laptop-mural.jpg",
            alt: "Customer working on laptop in front of Japanese art mural",
          },
          {
            src: "/photos/outdoor-seating-umbrella.jpg",
            alt: "Comfortable outdoor seating area with garden umbrella",
          },
          {
            src: "/photos/moikai-coffee-signage-entrance.jpg",
            alt: "Moikai Coffee Cik Di Tiro signage and entrance decor",
          },
          {
            src: "/photos/friends-coffee-window-counter.jpg",
            alt: "Friends enjoying coffee at the wooden window counter",
          },
          {
            src: "/photos/barista-pouring-matcha-layer.jpg",
            alt: "Barista pouring espresso into a signature layered matcha coffee",
          },
          {
            src: "/photos/pouring-espresso-iced-latte.jpg",
            alt: "Pouring fresh espresso into an iced latte",
          },
          {
            src: "/photos/friendly-staff-smiling.jpg",
            alt: "Friendly Moikai Coffee staff members smiling",
          },
          {
            src: "/photos/vintage-wooden-door-stone-wall.jpg",
            alt: "Aesthetic vintage wooden door and stone wall detail",
          },
          {
            src: "/photos/friends-hanging-out-laughing.jpg",
            alt: "Group of friends hanging out and laughing at Moikai",
          },
        ].map((photo, index) => (
          <Image
            src={photo.src}
            key={index}
            width={300}
            height={300}
            alt={photo.alt}
            className="rounded-md object-cover aspect-3/5"
          />
        ))}
      </div>

      <Image
        src={Pola}
        alt="pola"
        className="absolute top-0 left-0 w-full h-full -z-1 object-cover"
      />
    </section>
  );
}
