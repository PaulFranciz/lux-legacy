"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

  // Split text into words while keeping track of character positions
  const renderAnimatedText = (text: string, startDelay: number = 0) => {
    const words = text.split(" ");
    let charCount = 0;

    return words.map((word, wordIndex) => {
      const wordChars = word.split("");
      const wordElement = (
        <span key={wordIndex} className={styles.word}>
          {wordChars.map((char, charIndex) => {
            const currentCharCount = charCount++;
            return (
              <motion.span
                key={charIndex}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: (startDelay + currentCharCount) * 0.03,
                  type: "spring",
                  stiffness: 150,
                  damping: 10,
                }}
                className={styles.animatedChar}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      );

      charCount++; // Account for space
      return wordElement;
    });
  };

  return (
    <section className={styles.hero}>
      {/* Background Video */}
      <div className={styles.videoBackground}>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/videoframe_3164%20(1).webp"
          className={styles.bgVideo}
        >
          <source
            src="https://res.cloudinary.com/dzrnkgvts/video/upload/v1762344066/bg_zqfyxf.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.videoOverlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Client Retention Badge */}
        <div className={styles.badgeRow}>
          <div className={styles.badgeImage}>
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80"
              alt="Team collaboration"
              width={40}
              height={40}
              className={styles.badgeImg}
              unoptimized
            />
          </div>
          <span className={styles.badgeText}>96+ Client Retention Rate</span>
        </div>

        <h1 className={styles.title}>
          {renderAnimatedText(titleText)}
          <span className={styles.highlight}>
            {renderAnimatedText(highlightText, titleText.length)}
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
      </div>
    </section>
  );
}
