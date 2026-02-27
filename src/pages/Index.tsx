import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About"; 
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About /> {/* Place it right after Hero for indexing clarity */}
      <Services />
      <WhyUs />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
