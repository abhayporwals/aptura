"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    title: "Move AI Agent Kit",
    description: "AI-powered automation & interactions",
    icon: "https://metamove.build/assets/logo.svg",
  },
  {
    title: "DappRadar API",
    description: "Live tracking of Aptos ecosystem projects",
    icon: "https://cdn-icons-png.flaticon.com/128/4222/4222019.png",
  },
  {
    title: "CryptoPanic API",
    description: "Fetching breaking crypto news instantly",
    icon: "https://cdn-icons-png.flaticon.com/128/9214/9214126.png",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function HowItWorks() {
  return (
    <section id="about-us" className="py-16 md:py-32 relative overflow-hidden -z-1">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-card-bg pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,44,191,0.15),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wider mb-4 md:mb-6">
            How
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mx-2 md:mx-3">
              Aptura
            </span>
            Works
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-foreground/90 mb-4">
            Built for Aptos. Powered by AI. Tuned for Action.
          </p>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <h3 className="text-xl sm:text-2xl font-light text-center mb-6 md:mb-8">
            Aptura leverages:
          </h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto"
          >
            {technologies.map((tech) => (
              <motion.div key={tech.title} variants={item} className="group">
                <div className="relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-card/30 border border-white/5 shadow-xl transition-all duration-300 hover:bg-card/40 hover:scale-[1.02] hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-2xl" />
                  <div className="relative flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary-light/10 text-2xl group-hover:scale-110 transition-transform duration-300">
                      <img src={tech.icon} alt="icon" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                        {tech.title}
                      </h4>
                      <p className="text-sm sm:text-base text-foreground/70">{tech.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://x.com/ApturaX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center group"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white rounded-full font-medium transition-all shadow-lg hover:shadow-primary/25"
            >
              See ApturaX in Action
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}