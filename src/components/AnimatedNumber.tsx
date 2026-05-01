import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: string;
  duration?: number;
}

/**
 * Counts up numeric portions of `value` when scrolled into view.
 * Non-numeric text (e.g. "+", "%", "/") is preserved.
 */
export function AnimatedNumber({ value, duration = 1400 }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const target = Number(numStr);
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

    setDisplay(`${prefix}0${suffix}`);

    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            const current = (target * eased).toFixed(decimals);
            setDisplay(`${prefix}${current}${suffix}`);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
