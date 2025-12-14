import About from "@/components/about";
import Advertisement from "@/components/advertisement";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import Jumbotron from "@/components/jumbotron";
import Location from "@/components/location";
import Menu from "@/components/menu";

export default function Landingpage() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Header />
      <Jumbotron />
      <About />
      <Menu />
      <Advertisement />
      <Location />
      <Gallery />
      <Footer />
    </div>
  );
}
