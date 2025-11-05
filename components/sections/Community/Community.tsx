import Image from "next/image";
import styles from "./Community.module.css";

export function CommunitySection() {
  return (
    <section className={styles.section} id="community">
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.cardHalo} aria-hidden="true" />
          <div className={styles.cardInner}>
            <div className={styles.cardContent}>
              <span className={styles.label}>Lux Legacy Circle</span>
              <h2 className={styles.heading}>
                Become a Part of Our <span>Community</span>
              </h2>
              <p className={styles.description}>
                Join our community to connect, share ideas, and build meaningful momentum together across every stage of your brand journey.
              </p>

              <form className={styles.form}>
                <label className={styles.srOnly} htmlFor="community-email">
                  Email address
                </label>
                <input
                  className={styles.input}
                  id="community-email"
                  name="email"
                  type="email"
                  placeholder="name@email.com"
                  autoComplete="email"
                />
                <button type="button" className={styles.cta}>
                  Get notified
                </button>
              </form>

              <p className={styles.helperText}>We&apos;ll only reach out with high-signal insights and community invites.</p>
            </div>

            <div className={styles.imageWrapper}>
              <div className={styles.imageFrame}>
                <Image
                  src="https://res.cloudinary.com/dzrnkgvts/image/upload/v1762347188/420shots_so_u8zfa8.webp"
                  alt="Lux Legacy community collaboration"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
