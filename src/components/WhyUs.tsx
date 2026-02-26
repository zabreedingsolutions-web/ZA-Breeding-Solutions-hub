import { motion } from "framer-motion";
import { Check, MapPin } from "lucide-react";

const reasons = [
  "Results-driven, professional consultancy",
  "Practical solutions that increase income",
  "Suitable for commercial, small-scale & upcoming farmers",
  "We don't guess — we manage, train, and deliver",
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Farmers Served" },
  { value: "100%", label: "Commitment" },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/5 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/5 translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-semibold uppercase tracking-[0.2em] text-xs mb-4">
            Why Serious Farmers Choose Us
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            We Deliver Results,
            <br />
            <span className="text-secondary italic">Not Promises</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[3px] mx-auto rounded-full"
            style={{ background: "var(--gradient-gold)" }}
          />
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4 mb-16">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-xl px-6 py-5 flex items-center gap-4 group hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors duration-300">
                <Check className="w-4 h-4 text-secondary" />
              </div>
              <span className="text-primary-foreground text-lg font-medium">{reason}</span>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold text-secondary mb-1">{stat.value}</p>
              <p className="text-primary-foreground/50 text-xs uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-2.5 text-primary-foreground/60"
        >
          <MapPin className="w-5 h-5 text-secondary" />
          <span className="text-base tracking-wide">Based in Lusaka — Serving Farmers Across Zambia</span>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
