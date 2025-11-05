import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { LogoCarousel } from "@/components/sections/LogoCarousel";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Expectations } from "@/components/sections/Expectations";
import { CommunitySection } from "@/components/sections/Community";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <LogoCarousel />
        <FeaturedProjects />
        <Expectations />
        <CommunitySection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
