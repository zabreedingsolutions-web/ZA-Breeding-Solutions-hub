import { motion } from "framer-motion";
import { Phone, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary pt-20 pb-8 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-secondary/5 -translate-y-1/2 translate-x-1/3" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="text-4xl font-display font-bold text-primary-foreground mb-3">
            Za Breeding <span className="text-secondary">Solutions</span>
          </h3>
          <p className="text-primary-foreground/60 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Professional Livestock Management.
            <br />
            Improved Genetics. Profitable Farming.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-14">
            <a
              href="tel:+260771696867"
              className="flex items-center gap-2.5 text-primary-foreground hover:text-secondary transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center group-hover:bg-secondary/25 transition-colors duration-300">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-medium">+260 771 696 867</span>
            </a>
            <span className="flex items-center gap-2.5 text-primary-foreground/60">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/5 flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <span>Lusaka, Zambia</span>
            </span>
          </div>

          <div className="border-t border-primary-foreground/10 pt-6 flex items-center justify-between">
            <p className="text-primary-foreground/30 text-sm">
              © {new Date().getFullYear()} Za Breeding Solutions. All rights reserved.
            </p>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/30 hover:text-secondary hover:border-secondary/30 transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
