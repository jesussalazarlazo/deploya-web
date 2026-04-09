import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Services />
        <AboutUs />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}