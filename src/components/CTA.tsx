import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const needs = [
  "A specialist to manage your dairy or beef operation",
  "Expert support in breeding, feeding, and animal welfare",
  "Professional training for your farm workers",
  "A consultant who treats farming as a business",
];

const CTA = () => {
  return (
    <section className="section-padding section-alt relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-secondary font-semibold uppercase tracking-[0.2em] text-xs mb-4">
            Start Today
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Start Farming with{" "}
            <span className="text-secondary italic">Confidence</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[3px] mx-auto mb-12 rounded-full"
            style={{ background: "var(--gradient-gold)" }}
          />

          <div className="grid sm:grid-cols-2 gap-4 mb-14 text-left max-w-2xl mx-auto">
            {needs.map((need, i) => (
              <motion.div
                key={need}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-lift flex items-start gap-3 p-5 rounded-xl bg-card border border-border"
              >
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowRight className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-foreground leading-relaxed">{need}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-2xl font-display font-bold text-foreground mb-8">
              Za Breeding Solutions should be your <span className="text-secondary">FIRST</span> call.
            </p>

            <Button variant="secondary" size="lg" asChild className="shadow-xl shadow-secondary/25 hover:shadow-2xl hover:shadow-secondary/35 transition-all duration-300 hover:scale-105">
              <a href="tel:+260771696867" className="gap-2.5 text-lg font-semibold px-8">
                <Phone className="w-5 h-5" />
                Contact Us Today
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
