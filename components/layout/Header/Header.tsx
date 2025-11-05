"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "./Header.module.css";

const navigationItems = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Reach Out", href: "#reach-out" },
  { label: "Works", href: "#works" },
] as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.headerShell}>
      <div className={clsx(styles.header, mobileMenuOpen && styles.mobileMenuOpen)}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true">
            LL
          </span>
          <span>Lux Legacy Agency</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.navLink}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className={styles.mobileMenuToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <div className={styles.burger}>
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </div>
        </button>

        <a
          className={styles.headerCta}
          href="#book"
          aria-label="Book a project consultation"
        >
          Book Now
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <nav
        className={clsx(styles.mobileNav, mobileMenuOpen && styles.mobileNavOpen)}
        aria-label="Mobile navigation"
      >
        {navigationItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
