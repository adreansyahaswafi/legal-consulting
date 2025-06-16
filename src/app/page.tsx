import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <section>
      <Banner />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </section>
  );
}
