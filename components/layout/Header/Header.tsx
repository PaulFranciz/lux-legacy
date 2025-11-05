"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
            <Image
              src="/images/tmped_o56ja.webp"
              alt="Lux Legacy logo"
              width={44}
              height={44}
              className={styles.brandLogo}
              priority
            />
          </span>
          <span className={styles.brandText}>Lux Legacy Agency</span>
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

        <Link
          className={styles.headerCta}
          href="/book"
          aria-label="Book a project consultation"
        >
          Book Now
          <span aria-hidden="true">↗</span>
        </Link>
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
        <Link
          href="/book"
          className={styles.mobileNavCta}
          onClick={() => setMobileMenuOpen(false)}
        >
          Book Now
          <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}
