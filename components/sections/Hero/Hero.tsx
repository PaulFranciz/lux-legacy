"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const capabilityPills = [
  "Virtual Assistance",
  "Branding",
  "Web Design",
  "CRM",
  "Strategy",
] as const;

export function Hero() {
  const titleText = "We run your business backend, so you build the ";
  const highlightText = "front-end legacy";

  return (
    <section className={styles.hero}>
      <div className={styles.badgeRow}>
        <div className={styles.avatars} aria-hidden="true">
          {[0, 1, 2, 3].map((index) => (
            <span key={index} className={styles.avatar} />
          ))}
        </div>
        <span className={styles.badgeText}>96%+ client retention rate</span>
      </div>

      <h1 className={styles.title}>
        {titleText.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: i * 0.03,
              type: "spring",
              stiffness: 150,
              damping: 10,
            }}
            className={styles.animatedChar}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
        <span className={styles.highlight}>
          {highlightText.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: (titleText.length + i) * 0.03,
                type: "spring",
                stiffness: 150,
                damping: 10,
              }}
              className={styles.animatedChar}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      </h1>

      <p className={styles.description}>
        From virtual assistance to brand strategy, we handle the operations while you focus on building your empire. Seamless support across Canada, USA, and Nigeria.
      </p>

      <div className={styles.pills}>
        {capabilityPills.map((pill) => (
          <span key={pill} className={styles.pill}>
            {pill}
          </span>
        ))}
      </div>

      <a
        className={styles.cta}
        href="#contact"
        aria-label="Partner with Lux Legacy Agency"
      >
        Let&apos;s Build Your Legacy
        <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
