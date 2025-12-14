import Contact from "@/components/linktree/contact";
import Lokasi from "@/components/linktree/lokasi";
import Promo from "@/components/linktree/promo";
import Menu from "@/components/linktree/menu";
import Jumbotron from "@/components/linktree/jumbotron";
import Gallery from "@/components/linktree/gallery";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-700 md:py-6">
      <main className="mx-auto w-full md:max-w-md flex-1 bg-black rounded-xl shadow-xl shadow-primary/50">
        <Jumbotron />
        <Menu />
        <div className="p-6">
          <Promo />
          <Lokasi />
          <Gallery />
          <Contact />
        </div>
      </main>
    </div>
  );
}
