import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- ADD NEW FILES TO THIS LIST ---
import img1 from "@/assets/za-logo.png"; 
import vid1 from "@/assets/hero.mp4";
// Example: import img2 from "@/assets/your-new-image.jpg";

const media = [
  { type: "image", url: img1 },
  { type: "video", url: vid1 },
  // Add more here, e.g., { type: "image", url: img2 },
];
// ----------------------------------

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % media.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);

  return (
    <section id="gallery" className="py-24 bg-primary overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Our <span className="text-secondary">Gallery</span>
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto">
            A glimpse into our breeding solutions and livestock excellence.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border border-primary-foreground/10">
          {/* Media Display */}
          <div className="w-full h-full bg-black/20 flex items-center justify-center">
            {media[currentIndex].type === "image" ? (
              <motion.img
                key={currentIndex}
                src={media[currentIndex].url}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full h-full object-cover"
              />
            ) : (
              <motion.video
                key={currentIndex}
                src={media[currentIndex].url}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prev} 
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={next} 
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-secondary transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {media.map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-secondary w-6" : "bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
