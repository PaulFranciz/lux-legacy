"use client";

import { motion } from "framer-motion";
import styles from "./LogoCarousel.module.css";

const baseLogos = [
  { name: "Alqam" },
  { name: "Eco Peedika" },
  { name: "Nexsure" },
  { name: "Modorkare" },
] as const;

const marqueeLogos = [...baseLogos, ...baseLogos];

export function LogoCarousel() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.carouselWrapper}>
          <motion.div
            className={styles.carousel}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 18,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {marqueeLogos.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className={styles.logoItem}>
                <span className={styles.logoText}>{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
