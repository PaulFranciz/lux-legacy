import Link from "next/link";
import styles from "./Header.module.css";

const navigationItems = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Reach Out", href: "#reach-out" },
  { label: "Works", href: "#works" },
] as const;

export function Header() {
  return (
    <header className={styles.headerShell}>
      <div className={styles.header}>
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

        <a
          className={styles.headerCta}
          href="#book"
          aria-label="Book a project consultation"
        >
          Book Now
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
