import { motion } from "framer-motion";
import { Heart, Dna, Milk, Users } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Animal Health & Nutrition",
    description: "Comprehensive health care and nutrition programs for all livestock species.",
    items: ["Poultry (chickens)", "Cattle (dairy & beef)", "Goats & sheep", "Pigs, horses, dogs & cats"],
  },
  {
    icon: Dna,
    title: "Advanced Animal Breeding",
    description: "Cutting-edge reproductive technologies to improve your herd genetics.",
    items: ["Artificial Insemination (AI)", "Embryo Transfer (ET) for dairy & beef cattle", "Genetic improvement programs"],
  },
  {
    icon: Milk,
    title: "Dairy & Beef Farm Management",
    description: "End-to-end farm management for maximum productivity and profit.",
    items: ["Feeding programs & feedlotting", "Milk handling & quality control", "Breeding planning & record management", "Animal welfare & productivity optimization"],
  },
  {
    icon: Users,
    title: "Farm Labour Management",
    description: "Building capable farm teams through structured training and supervision.",
    items: ["Worker supervision systems", "Performance improvement", "On-farm training for workers and supervisors"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-secondary font-semibold uppercase tracking-[0.2em] text-xs mb-4">
            What We Specialize In
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Professional Expertise
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="card-lift bg-card rounded-xl p-8 border border-border group cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-secondary/15 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2.5">
                {service.items.map((item) => (
                  <li key={item} className="text-foreground/80 flex items-start gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
