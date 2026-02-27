import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero.mp4"; // Correctly importing your mp4
import { useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Implementation */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Hero Overlay - Darkens video for text readability */}
      <div className="absolute inset-0 z-[1] bg-black/40" style={{ background: "var(--hero-overlay)" }} />
      
      {/* Grain texture for professional feel */}
      <div className="absolute inset-0 z-[2] opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      <motion.div style={{ y: textY, opacity }} className="relative z-10 container text-center py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] mx-auto mb-8 rounded-full overflow-hidden"
            style={{ background: "var(--gradient-gold)" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-secondary font-semibold uppercase tracking-[0.25em] text-xs md:text-sm mb-6"
          >
            Zambia's Leading Livestock Consultancy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-8 text-balance"
          >
            Your Trusted Partner in{" "}
            <span className="text-secondary italic">Profitable</span>
            <br />
            Animal Farming
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Helping farmers increase productivity, improve genetics, and maximize profits through professional animal health, breeding, and farm management.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="secondary" size="lg" asChild className="shadow-xl shadow-secondary/30 hover:shadow-2xl hover:shadow-secondary/40 transition-shadow">
              <a href="tel:+260771696867" className="gap-2 text-base font-semibold">
                <Phone className="w-5 h-5" />
                Call +260 771 696 867
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm">
              <a href="#services" className="gap-2 text-base">
                Our Services
                <ArrowDown className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-primary-foreground/40 text-xs uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-primary-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
