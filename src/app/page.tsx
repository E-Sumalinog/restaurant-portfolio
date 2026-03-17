import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Menu from "@/sections/Menu";
import Gallery from "@/sections/Gallery";
import Reservation from "@/sections/Reservation";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reservation />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}