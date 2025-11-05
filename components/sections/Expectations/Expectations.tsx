"use client";

import { useEffect, useRef } from "react";
import styles from "./Expectations.module.css";
import { NoiseCard } from "./NoiseCard";

const expectationPoints = [
  { icon: "✦", label: "Strategy-First Planning" },
  { icon: "✦", label: "Brand Systems & Styleguides" },
  { icon: "✦", label: "No-Code + Custom Builds" },
  { icon: "✦", label: "Conversion-Focused UX" },
];

const services = [
  {
    icon: "🧭",
    title: "Fractional Ops",
    copy: "Delegate your backend workflows—client intake, CRM automations, reporting dashboards, and team enablement in one motion.",
  },
  {
    icon: "📣",
    title: "Demand & Content",
    copy: "Launch brand messaging, email flows, launch calendars, and ongoing campaigns with executive oversight.",
  },
];

const timeline = [
  {
    step: "Discover",
    copy: "Workshop your vision, KPIs, resources, and timelines to craft a roadmap that actually matches your capacity.",
  },
  {
    step: "Design",
    copy: "Translate insights into layered brand experiences—content systems, UI patterns, service playbooks, and asset libraries.",
  },
  {
    step: "Deliver",
    copy: "Roll out with implementation sprints, QA, launch support, and embedded training for your internal teams.",
  },
];

const metrics = [
  { value: "96%", label: "client retention" },
  { value: "40+", label: "launched initiatives" },
  { value: "3x", label: "avg. speed to market" },
];

const video = {
  src: "https://res.cloudinary.com/dzrnkgvts/video/upload/q_auto,f_auto,vc_auto/v1762304909/SnapInsta.to_AQOe6gfN-U0z2wC3z25GzQeGL_mSy__dRVOL1w_1ImyR3goM8bBhu9K3hh1MuIqjP2nQWU9VYYB_AvaIfaXq4RYB8vEpiteiEQpEwh0_jscnpe.mp4",
  poster:
    "https://res.cloudinary.com/dzrnkgvts/video/upload/so_0,f_jpg/v1762304909/SnapInsta.to_AQOe6gfN-U0z2wC3z25GzQeGL_mSy__dRVOL1w_1ImyR3goM8bBhu9K3hh1MuIqjP2nQWU9VYYB_AvaIfaXq4RYB8vEpiteiEQpEwh0_jscnpe.jpg",
};

export function Expectations() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const elements = elementsRef.current.filter((node): node is HTMLElement => Boolean(node));
    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateFadeUpVisible);
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="expectations">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span
            className={`${styles.animateFadeUp} ${styles.staggerDelay1}`}
            ref={(el) => {
              elementsRef.current[0] = el;
            }}
          >
            ✦ What You Can Expect ✦
          </span>
          <h2
            className={`${styles.title} ${styles.animateFadeUp} ${styles.staggerDelay2}`}
            ref={(el) => {
              elementsRef.current[1] = el;
            }}
          >
            We orchestrate your brand, operations, and growth ecosystems so you can
            <span> move with conviction.</span>
          </h2>
          <p
            className={`${styles.subtitle} ${styles.animateFadeUp} ${styles.staggerDelay3}`}
            ref={(el) => {
              elementsRef.current[2] = el;
            }}
          >
            Lux Legacy Agency streamlines creation for visionary founders, fractional teams,
            and global enterprises alike—combining strategy, execution, and ongoing ops support under one roof.
          </p>
        </header>

        <div className={styles.grid}>
          <NoiseCard
            className={`${styles.introCard} ${styles.animateFadeUp}`}
            contentClassName={styles.introContent}
            ref={(el) => {
              elementsRef.current[3] = el;
            }}
          >
            <div className={styles.tagline}>FRACTIONAL STUDIO</div>
            <h3 className={styles.introHeadline}>
              High-touch support, tailored execution, and runway-ready delivery without hiring a full team.
            </h3>
            <div className={styles.pointList}>
              {expectationPoints.map((point) => (
                <span key={point.label} className={styles.point}>
                  <span className={styles.pointIcon}>{point.icon}</span>
                  {point.label}
                </span>
              ))}
            </div>
          </NoiseCard>

          <NoiseCard
            className={`${styles.servicesCard} ${styles.animateFadeUp} ${styles.staggerDelay1}`}
            ref={(el) => {
              elementsRef.current[4] = el;
            }}
          >
            <h3 className={styles.serviceTitle}>What we steward</h3>
            <div className={styles.serviceList}>
              {services.map((service) => (
                <div key={service.title} className={styles.serviceItem}>
                  <span className={styles.iconBadge}>{service.icon}</span>
                  <div>
                    <div className={styles.serviceTitle}>{service.title}</div>
                    <p className={styles.serviceCopy}>{service.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </NoiseCard>

          <NoiseCard
            className={`${styles.processCard} ${styles.animateFadeUp} ${styles.staggerDelay2}`}
            ref={(el) => {
              elementsRef.current[5] = el;
            }}
          >
            <h3 className={styles.serviceTitle}>Blueprint to launch</h3>
            <div className={styles.timeline}>
              {timeline.map((item) => (
                <div key={item.step} className={styles.timelineItem}>
                  <span className={styles.stepNumber}>{item.step}</span>
                  <p className={styles.timelineCopy}>{item.copy}</p>
                </div>
              ))}
            </div>
          </NoiseCard>

          <NoiseCard
            className={`${styles.supportCard} ${styles.animateFadeUp} ${styles.staggerDelay3}`}
            ref={(el) => {
              elementsRef.current[6] = el;
            }}
          >
            <h3 className={styles.serviceTitle}>Embedded partnership</h3>
            <div className={styles.metricList}>
              {metrics.map((metric) => (
                <div key={metric.label} className={styles.metric}>
                  <span className={styles.metricValue}>{metric.value}</span>
                  <span className={styles.metricLabel}>{metric.label}</span>
                </div>
              ))}
            </div>
          </NoiseCard>

          <NoiseCard
            className={`${styles.videoCard} ${styles.animateFadeUp} ${styles.staggerDelay4}`}
            contentClassName={styles.videoContent}
            ref={(el) => {
              elementsRef.current[7] = el;
            }}
          >
            <div className={styles.videoWrapper}>
              <video
                src={video.src}
                poster={video.poster}
                muted
                autoPlay
                loop
                playsInline
                preload="none"
                aria-label="Behind the scenes look at Lux Legacy creative delivery"
              />
              <div className={styles.videoOverlay}>
                <div className={styles.videoHeading}>Your vision, beautifully orchestrated.</div>
                <p className={styles.videoCaption}>
                  From concept decks to post-launch optimization, our collective becomes your branded command center—so every touchpoint feels timeless.
                </p>
              </div>
            </div>
          </NoiseCard>
        </div>
      </div>
    </section>
  );
}
