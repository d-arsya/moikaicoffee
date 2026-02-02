import Image from "next/image";

export default function Gallery() {
  // photos array replaced by static array in render

  return (
    <section className="">
      <h1 className="text-center font-semibold text-lg mb-4">Ambience</h1>

      <div className="grid grid-cols-2 gap-3">
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
          {
            src: "/photos/quiet-coffee-pastry-moment.jpg",
            alt: "Enjoying a quiet moment with coffee and pastry",
          },
          {
            src: "/photos/barista-espresso-machine-smile.jpg",
            alt: "Cheerful barista serving at the espresso machine",
          },
          {
            src: "/photos/remote-work-setup-iced-coffee.jpg",
            alt: "Remote working setup with iced coffee",
          },
          {
            src: "/photos/busy-cozy-coffee-shop-atmosphere.jpg",
            alt: "Busy and cozy atmosphere inside the coffee shop",
          },
          {
            src: "/photos/community-workshop-event.jpg",
            alt: "Workshop or community event gathering at Moikai",
          },
          {
            src: "/photos/minimalist-pink-table-decor.jpg",
            alt: "Minimalist pink table setup for special occasions",
          },
          {
            src: "/photos/hand-holding-latte-chocolate-donut.jpg",
            alt: "Holding a cold coffee latte next to a chocolate donut",
          },
        ].map((photo, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={200}
              height={500}
              className="object-cover aspect-3/4"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
