import { forwardRef, type ReactNode } from "react";
import clsx from "clsx";
import styles from "./NoiseCard.module.css";

interface NoiseCardProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export const NoiseCard = forwardRef<HTMLDivElement, NoiseCardProps>(
  ({ children, className, contentClassName }, ref) => (
    <div ref={ref} className={clsx(styles.card, className)}>
      <div className={clsx(styles.inner, contentClassName)}>{children}</div>
    </div>
  ),
);

NoiseCard.displayName = "NoiseCard";
