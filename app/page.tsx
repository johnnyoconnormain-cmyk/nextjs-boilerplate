import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import CabinetFeature from "./components/CabinetFeature";
import About from "./components/About";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import ServiceAreas from "./components/ServiceAreas";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";
import { site } from "./site-config";
import { Icon } from "./components/icons";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <CabinetFeature />
        <About />
        <Process />
        <Gallery />
        <Testimonials />
        <ServiceAreas />
        <QuoteForm />
      </main>
      <Footer />

      <a
        href={`tel:${site.phoneHref}`}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green px-5 py-3.5 font-bold text-paper shadow-xl transition-transform hover:scale-105 lg:hidden"
        aria-label={`Call ${site.name}`}
      >
        <Icon name="phone" width={20} height={20} />
        Call Now
      </a>
    </>
  );
}
