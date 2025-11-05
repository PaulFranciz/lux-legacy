import Image from "next/image";
import Link from "next/link";
import styles from "./FeaturedProjects.module.css";

type ProjectMedia =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      alt?: string;
    };

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  media: ProjectMedia;
  ctaLabel: string;
  href: string;
}

const projects: ProjectItem[] = [
  {
    id: "project-1",
    title: "Periwinkle Empire",
    category: "Real Estate",
    media: {
      type: "video",
      src: "https://res.cloudinary.com/dzrnkgvts/video/upload/q_auto,f_auto,vc_auto/v1762298717/SnapInsta.to_AQNi706TeCMKLn9uc8h2QBml_xHJ31yx5q2OY47b0fZFJOjprpEfiUlKN6Hq9MXzEGN2DPFa9WcISRyRc9V3ch8LZht6vHeyMVQpnAY_jhwvkf.mp4",
      poster: "https://res.cloudinary.com/dzrnkgvts/video/upload/so_0,f_jpg/v1762298717/SnapInsta.to_AQNi706TeCMKLn9uc8h2QBml_xHJ31yx5q2OY47b0fZFJOjprpEfiUlKN6Hq9MXzEGN2DPFa9WcISRyRc9V3ch8LZht6vHeyMVQpnAY_jhwvkf.jpg",
      alt: "Periwinkle real estate showcase",
    },
    ctaLabel: "View Case Study",
    href: "/work/periwinkle-empire",
  },
  {
    id: "project-2",
    title: "bCODE",
    category: "E-Commerce",
    media: {
      type: "video",
      src: "https://res.cloudinary.com/dzrnkgvts/video/upload/q_auto,f_auto,vc_auto/v1762301242/bcode_quvcgh.mp4",
      poster: "https://res.cloudinary.com/dzrnkgvts/video/upload/so_0,f_jpg/v1762301242/bcode_quvcgh.jpg",
      alt: "bCODE Adidas affiliates e-commerce showcase",
    },
    ctaLabel: "View Case Study",
    href: "/work/bcode",
  },
  {
    id: "project-3",
    title: "Aerol",
    category: "Skincare E-Commerce",
    media: {
      type: "video",
      src: "https://res.cloudinary.com/dzrnkgvts/video/upload/q_auto,f_auto,vc_auto/v1762300703/aesop_fbpa5t.mp4",
      poster: "https://res.cloudinary.com/dzrnkgvts/video/upload/so_0,f_jpg/v1762300703/aesop_fbpa5t.jpg",
      alt: "Aerol skincare e-commerce experience",
    },
    ctaLabel: "View Case Study",
    href: "/work/aerol",
  },
];

export function FeaturedProjects() {
  return (
    <section className={styles.section} id="works">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>Featured Projects</span>
          <h2 className={styles.heading}>
            Showcasing our latest digital <span>creations.</span>
          </h2>
          <p className={styles.subhead}>
            A curated collection of launch-ready experiences engineered for growth
            and global scale.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.cover}>
                {project.media.type === "video" ? (
                  <video
                    className={styles.coverMedia}
                    src={project.media.src}
                    poster={project.media.poster}
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="none"
                    aria-label={project.media.alt ?? project.title}
                  />
                ) : (
                  <Image
                    className={styles.coverMedia}
                    src={project.media.src}
                    alt={project.media.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    priority={project.id === "project-1"}
                  />
                )}
                <div className={styles.overlay}>
                  <div className={styles.meta}>
                    <span className={styles.category}>{project.category}</span>
                    <h3 className={styles.title}>{project.title}</h3>
                  </div>
                  <Link className={styles.cta} href={project.href}>
                    {project.ctaLabel}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
                <div className={styles.coverGlow} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
