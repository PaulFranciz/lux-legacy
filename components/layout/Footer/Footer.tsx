import Link from "next/link";
import styles from "./Footer.module.css";

const linkGroups = [
  {
    title: "Services",
    links: [
      { label: "Fractional Ops", href: "#services" },
      { label: "Brand Systems", href: "#brand" },
      { label: "Automation", href: "#automation" },
      { label: "Growth Strategy", href: "#strategy" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Featured Work", href: "#featured-projects" },
      { label: "Community", href: "#community" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "hello@luxlegacy.agency", href: "mailto:hello@luxlegacy.agency" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Behance", href: "https://behance.net" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brandBlock}>
            <div className={styles.brandMark} aria-hidden="true">
              LL
            </div>
            <div>
              <div className={styles.brandName}>Lux Legacy Agency</div>
              <p className={styles.tagline}>
                We orchestrate your backend operations so every customer touchpoint feels intentional, timeless, and on-brand.
              </p>
            </div>
          </div>

          <div className={styles.linkGrid}>
            {linkGroups.map((group) => (
              <div key={group.title} className={styles.linkColumn}>
                <span className={styles.linkTitle}>{group.title}</span>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("http") ? (
                        <a href={link.href} target="_blank" rel="noreferrer" className={styles.link}>
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className={styles.link}>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.ctaBlock}>
            <span className={styles.ctaLabel}>Let&apos;s collaborate</span>
            <p className={styles.ctaCopy}>
              Send us a note with where you&apos;re headed and we&apos;ll help chart the roadmap.
            </p>
            <a className={styles.ctaButton} href="mailto:hello@luxlegacy.agency">
              Book a consult
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <span className={styles.copyright}>© {currentYear} Lux Legacy Agency. All rights reserved.</span>
          <div className={styles.bottomLinks}>
            <a href="#privacy" className={styles.bottomLink}>
              Privacy
            </a>
            <a href="#terms" className={styles.bottomLink}>
              Terms
            </a>
            <a href="#accessibility" className={styles.bottomLink}>
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
