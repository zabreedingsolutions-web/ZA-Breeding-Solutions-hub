import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- IMPORT ALL ASSETS ---
// Videos
import heroVid from "@/assets/hero.mp4";
import wVid1 from "@/assets/WhatsApp Video 2026-02-26 at 14.41.52.mp4";

// Named Images
import cow from "@/assets/cow.jpeg";
import eImg from "@/assets/e.jpeg";
import erImg from "@/assets/er.jpeg";
import gImg from "@/assets/g.jpeg";
import fourImg from "@/assets/4.jpeg";
import whatsImg from "@/assets/Whats.jpeg";
import whatsImaImg from "@/assets/WhatsApp Ima.jpeg";
import whatsImagImg from "@/assets/WhatsApp Imag.jpeg";
import whatsImageImg from "@/assets/WhatsApp Image.jpeg";

// Long Name WhatsApp Images
import wa1 from "@/assets/WhatsApp Image 2026-02-26 at 14.41.41.jpeg";
import wa2 from "@/assets/WhatsApp Image 2026-02-26 at 14.41.42.jpeg";
import wa3 from "@/assets/WhatsApp Image 2026-02-26 at 14.41.43.jpeg";
import wa4 from "@/assets/WhatsApp Image 2026-02-26 at 14.41.44.jpeg";
import wa5 from "@/assets/WhatsApp Image 2026-02-26 at 14.41.52.jpeg";
import wa6 from "@/assets/WhatsApp Image 2026-02-26 at 14.41.53.jpeg";
import wa7 from "@/assets/WhatsApp Image 2026-02-26 at 14.48..jpeg";
import wa8 from "@/assets/WhatsApp Image 2026-02-26 at 14.48.07.jpeg";
import wa9 from "@/assets/WhatsApp Image 2026-02-26 at 14.48.28.jpeg";
import wa10 from "@/assets/WhatsApp Image 2026-02-26 at 14.48.29.jpeg";
import wa11 from "@/assets/WhatsApp Image 2026-02-26 at 14.48.jpeg";

const Gallery = () => {
  const media = [
    { type: "video", url: heroVid, title: "Farm Operations" },
    { type: "image", url: cow, title: "Our Livestock" },
    { type: "image", url: wa1, title: "Health Monitoring" },
    { type: "image", url: wa2, title: "Breeding Excellence" },
    { type: "image", url: wa3, title: "Quality Control" },
    { type: "image", url: wa4, title: "Professional Care" },
    { type: "video", url: wVid1, title: "Facility Tour" },
    { type: "image", url: wa5, title: "Sustainable Farming" },
    { type: "image", url: wa6, title: "Genetic Improvement" },
    { type: "image", url: gImg, title: "Livestock Management" },
    { type: "image", url: wa7, title: "Feeding Programs" },
    { type: "image", url: wa8, title: "Animal Wellness" },
    { type: "image", url: wa9, title: "Herd Statistics" },
    { type: "image", url: wa10, title: "Daily Operations" },
    { type: "image", url: wa11, title: "Modern Solutions" },
    { type: "image", url: eImg, title: "Consultancy Services" },
    { type: "image", url: erImg, title: "Farm Success" },
    { type: "image", url: fourImg, title: "Growth & Prosperity" },
    { type: "image", url: whatsImg, title: "Za Breeding" },
    { type: "image", url: whatsImaImg, title: "Farmer Support" },
    { type: "image", url: whatsImagImg, title: "Innovation" },
    { type: "image", url: whatsImageImg, title: "Trusted Partners" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % media.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">
            Za Breeding <span className="text-secondary">Showcase</span>
          </h2>
          <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="relative max-w-5xl mx-auto group">
          <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                {media[currentIndex].type === "video" ? (
                  <video
                    src={media[currentIndex].url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={media[currentIndex].url}
                    alt={media[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                )}
                
                {/* Information Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-10">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
                      {media[currentIndex].type === "video" ? "Featured Video" : "Farm Gallery"}
                    </span>
                    <h3 className="text-white text-3xl font-display font-bold">
                      {media[currentIndex].title}
                    </h3>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <button
              onClick={prev}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-secondary transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={30} />
            </button>
            <button
              onClick={next}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-secondary transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={30} />
            </button>
          </div>

          {/* Dots / Pagination */}
          <div className="mt-8 flex justify-center gap-3 flex-wrap max-w-2xl mx-auto">
            {media.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 transition-all rounded-full ${
                  i === currentIndex ? "bg-secondary w-10" : "bg-primary/20 w-2 hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
