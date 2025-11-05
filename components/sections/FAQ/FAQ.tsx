"use client";

import { useEffect, useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import styles from "./FAQ.module.css";

interface FAQItemData {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItemData[] = [
  {
    id: "faq-1",
    question: "What services does Lux Legacy Agency provide?",
    answer:
      "We offer end-to-end brand and digital services including strategic consulting, brand identity design, web and mobile development, content systems, marketing automation, and fractional operational support. Our approach combines strategic vision with hands-on execution.",
  },
  {
    id: "faq-2",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A brand identity refresh may take 3-4 weeks, while a full web platform build typically ranges from 8-12 weeks. We provide detailed timelines during our discovery phase and maintain transparent milestone tracking throughout.",
  },
  {
    id: "faq-3",
    question: "Do you work with startups or only established brands?",
    answer:
      "We partner with visionary founders at all stages—from pre-seed startups to global enterprises. Our fractional studio model is designed to scale with your needs, whether you need a complete brand launch or ongoing operational support.",
  },
  {
    id: "faq-4",
    question: "What is your pricing structure?",
    answer:
      "We offer flexible engagement models including project-based pricing, monthly retainers, and fractional partnerships. Pricing is tailored to your scope and goals. After an initial discovery call, we provide transparent proposals with clear deliverables and timelines.",
  },
  {
    id: "faq-5",
    question: "Can you integrate with our existing tools and systems?",
    answer:
      "Absolutely. We specialize in seamless integrations with your existing tech stack—from CRMs and marketing automation platforms to custom APIs and data pipelines. Our team has experience with all major platforms and can build custom solutions when needed.",
  },
  {
    id: "faq-6",
    question: "What makes Lux Legacy different from other agencies?",
    answer:
      "We combine strategic depth with execution speed. Unlike traditional agencies, we function as an embedded extension of your team—providing fractional leadership, hands-on delivery, and ongoing optimization. Our 96% client retention rate reflects our commitment to long-term partnership.",
  },
];

export function FAQ() {
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
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.inner}>
        <header
          className={`${styles.header} ${styles.animateFadeUp}`}
          ref={(el) => {
            elementsRef.current[0] = el;
          }}
        >
          <span className={styles.label}>FREQUENTLY ASKED QUESTIONS</span>
          <h2 className={styles.heading}>
            Everything <span>you need to know.</span>
          </h2>
          <p className={styles.description}>
            Get clear, straightforward answers to the most common questions about partnering with Lux Legacy Agency.
          </p>
          <a href="mailto:hello@luxlegacy.agency" className={styles.contactLink}>
            <svg
              className={styles.contactIcon}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            hello@luxlegacy.agency
          </a>
        </header>

        <Accordion type="multiple" className={styles.faqList}>
          {faqData.map((item) => (
            <AccordionItem key={item.id} value={item.id} className={styles.faqItem}>
              <AccordionTrigger hideIcon className={styles.faqTrigger}>
                <span className={styles.faqQuestion}>{item.question}</span>
                <span className={styles.faqIcon} aria-hidden="true">
                  +
                </span>
              </AccordionTrigger>
              <AccordionContent className={styles.faqContent}>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
