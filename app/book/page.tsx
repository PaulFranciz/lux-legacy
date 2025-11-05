"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.backButton}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to home
        </Link>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.formSection}>
            <div className={styles.formHeader}>
              <span className={styles.label}>Book a consultation</span>
              <h1 className={styles.heading}>
                Let&apos;s Build Something <span>Extraordinary</span>
              </h1>
              <p className={styles.description}>
                Share your vision and we&apos;ll chart a strategic roadmap to bring it to life. Our team typically responds within 24 hours.
              </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="hello@company.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.formLabel}>
                  Company / Project
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="Your company name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="service" className={styles.formLabel}>
                  Service of Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={styles.formSelect}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="fractional-ops">Fractional Ops</option>
                  <option value="brand-systems">Brand Systems</option>
                  <option value="web-development">Web Development</option>
                  <option value="automation">Marketing Automation</option>
                  <option value="strategy">Growth Strategy</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Tell us about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.formTextarea}
                  placeholder="Share your vision, goals, and key challenges..."
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Submit Request
                <span aria-hidden="true">↗</span>
              </button>

              <p className={styles.formFooter}>
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>

          <div className={styles.videoSection}>
            <div className={styles.videoWrapper}>
              <div className={styles.videoFrame}>
                <video
                  src="https://res.cloudinary.com/dzrnkgvts/video/upload/q_auto,f_auto,vc_auto/v1762298717/SnapInsta.to_AQNi706TeCMKLn9uc8h2QBml_xHJ31yx5q2OY47b0fZFJOjprpEfiUlKN6Hq9MXzEGN2DPFa9WcISRyRc9V3ch8LZht6vHeyMVQpnAY_jhwvkf.mp4"
                  poster="https://res.cloudinary.com/dzrnkgvts/video/upload/so_0,f_jpg/v1762298717/SnapInsta.to_AQNi706TeCMKLn9uc8h2QBml_xHJ31yx5q2OY47b0fZFJOjprpEfiUlKN6Hq9MXzEGN2DPFa9WcISRyRc9V3ch8LZht6vHeyMVQpnAY_jhwvkf.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={styles.video}
                />
                <div className={styles.videoOverlay}>
                  <div className={styles.videoGradient} />
                </div>
              </div>

              <div className={styles.statsBar}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>96%</span>
                  <span className={styles.statLabel}>Client Retention</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                  <span className={styles.statValue}>40+</span>
                  <span className={styles.statLabel}>Projects Delivered</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                  <span className={styles.statValue}>24h</span>
                  <span className={styles.statLabel}>Response Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
