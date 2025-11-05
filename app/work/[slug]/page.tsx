"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const projects = {
  "periwinkle-empire": {
    title: "Periwinkle Empire",
    category: "Real Estate",
    description: "A fully featured real estate platform for a modern property brand, designed with a sleek, premium feel and seamless browsing for prospective buyers.",
    client: "Periwinkle Empire",
    year: "2025",
    services: ["Brand Strategy", "Web Design", "E-Commerce Development", "Content Creation"],
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    review: "I'm extremely happy with the service provided by webcodge.",
    mediaType: "video" as const,
    mediaSrc: "https://res.cloudinary.com/dzrnkgvts/video/upload/q_auto,f_auto,vc_auto/v1762298717/SnapInsta.to_AQNi706TeCMKLn9uc8h2QBml_xHJ31yx5q2OY47b0fZFJOjprpEfiUlKN6Hq9MXzEGN2DPFa9WcISRyRc9V3ch8LZht6vHeyMVQpnAY_jhwvkf.mp4",
    mediaPoster: "https://res.cloudinary.com/dzrnkgvts/video/upload/so_0,f_jpg/v1762298717/SnapInsta.to_AQNi706TeCMKLn9uc8h2QBml_xHJ31yx5q2OY47b0fZFJOjprpEfiUlKN6Hq9MXzEGN2DPFa9WcISRyRc9V3ch8LZht6vHeyMVQpnAY_jhwvkf.jpg",
  },
  "bcode": {
    title: "bCODE",
    category: "E-Commerce",
    description: "An e‑commerce experience for an Adidas affiliates brand, featuring modern design and seamless user experience.",
    client: "Adidas Affiliates",
    year: "2024",
    services: ["UI/UX Design", "Web Development", "Platform Architecture"],
    technologies: ["React", "TypeScript", "Next.js"],
    review: "Outstanding work and exceptional attention to detail.",
    mediaType: "video" as const,
    mediaSrc: "https://res.cloudinary.com/dzrnkgvts/video/upload/q_auto,f_auto,vc_auto/v1762301242/bcode_quvcgh.mp4",
    mediaPoster: "https://res.cloudinary.com/dzrnkgvts/video/upload/so_0,f_jpg/v1762301242/bcode_quvcgh.jpg",
  },
  "aerol": {
    title: "Aerol",
    category: "Skincare E-Commerce",
    description: "An elegant e‑commerce experience for a premium skincare brand, combining luxury aesthetics with intuitive shopping flows.",
    client: "Aerol Skincare",
    year: "2024",
    services: ["E-Commerce Design", "Brand Identity", "Development"],
    technologies: ["React", "Shopify", "Tailwind CSS"],
    review: "Beautiful design that perfectly captures our brand essence.",
    mediaType: "video" as const,
    mediaSrc: "https://res.cloudinary.com/dzrnkgvts/video/upload/q_auto,f_auto,vc_auto/v1762300703/aesop_fbpa5t.mp4",
    mediaPoster: "https://res.cloudinary.com/dzrnkgvts/video/upload/so_0,f_jpg/v1762300703/aesop_fbpa5t.jpg",
  },
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Project Not Found</h1>
        <Link href="/">Go back home</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.backButton}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>

          <Link href="/book" className={styles.ctaButton}>
            Start Your Project
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.hero}>
          <span className={styles.category}>{project.category}</span>
          <h1 className={styles.title}>{project.title}</h1>
        </div>

        <div className={styles.content}>
          <div className={styles.mediaSection}>
            <div className={styles.mediaWrapper}>
              {project.mediaType === "video" ? (
                <video
                  src={project.mediaSrc}
                  poster={project.mediaPoster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={styles.media}
                />
              ) : (
                <Image
                  src={project.mediaSrc}
                  alt={project.title}
                  fill
                  className={styles.media}
                  style={{ objectFit: "cover" }}
                />
              )}
            </div>
          </div>

          <div className={styles.detailsSection}>
            <div className={styles.detailsInner}>
              <div className={styles.block}>
                <h2 className={styles.blockHeading}>About the Project</h2>
                <p className={styles.description}>{project.description}</p>
              </div>

              <div className={styles.metaGrid}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Client</span>
                  <span className={styles.metaValue}>{project.client}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Year</span>
                  <span className={styles.metaValue}>{project.year}</span>
                </div>
              </div>

              <div className={styles.block}>
                <h3 className={styles.blockLabel}>Services Provided</h3>
                <ul className={styles.tagList}>
                  {project.services.map((service) => (
                    <li key={service} className={styles.tag}>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.block}>
                <h3 className={styles.blockLabel}>Technologies</h3>
                <ul className={styles.tagList}>
                  {project.technologies.map((tech) => (
                    <li key={tech} className={styles.tag}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {project.review && (
                <div className={styles.reviewBlock}>
                  <span className={styles.reviewLabel}>Client Review</span>
                  <blockquote className={styles.review}>
                    &ldquo;{project.review}&rdquo;
                  </blockquote>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
