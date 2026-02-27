import { CheckCircle2, Award, Users, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: <Award className="text-secondary w-6 h-6" />,
      title: "Specialized Expertise",
      desc: "Zambia's leading consultancy in AI, Embryo Transfer, and genetic improvement.",
    },
    {
      icon: <Users className="text-secondary w-6 h-6" />,
      title: "All Farming Scales",
      desc: "Tailored solutions for commercial, small-scale, and aspiring investors.",
    },
    {
      icon: <CheckCircle2 className="text-secondary w-6 h-6" />,
      title: "Results-Driven",
      desc: "We don't guess—we manage, train, and deliver measurable farm profits.",
    },
    {
      icon: <MapPin className="text-secondary w-6 h-6" />,
      title: "Nationwide Service",
      desc: "Based in Lusaka, serving dedicated farmers across all Zambian provinces.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-secondary font-bold mb-4">
              Who We Are
            </h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
              Your Partner in <br />
              <span className="text-secondary">Profitable</span> Animal Farming
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              ZA Breeding Solutions is Zambia’s premier animal health, breeding, and farm management consultancy. 
              We are committed to helping serious farmers and investors increase productivity and improve genetics 
              through professional, evidence-based practices.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Mission Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary p-8 md:p-12 rounded-[2rem] text-primary-foreground relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10">
              <h4 className="text-2xl font-display font-bold mb-6 italic text-secondary">
                "We treat farming as a business."
              </h4>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                Whether you need a specialist to manage your dairy operation, expert support in 
                Artificial Insemination (AI), or professional on-farm training for your labor force, 
                ZA Breeding Solutions is your first call for livestock excellence in Zambia.
              </p>
              <div className="border-t border-white/10 pt-8">
                <p className="font-bold text-white uppercase tracking-widest text-sm mb-2">
                  Our Mission
                </p>
                <p className="text-primary-foreground/70 italic">
                  To eliminate guesswork in Zambian livestock production and replace it with 
                  professional management that maximizes profit.
                </p>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
