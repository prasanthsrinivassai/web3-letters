"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function ScaleToFit({
  naturalWidth,
  naturalHeight,
  children,
  fitViewportHeight = false,
  verticalMargin = 0,
  fitViewportHeightBelowWidth,
}: {
  naturalWidth: number;
  naturalHeight: number;
  children: ReactNode;
  /** Also cap the scale so the content never exceeds the available
   *  viewport height — needed for a card meant to fit on-screen
   *  without scrolling (e.g. short/landscape viewports). Off by
   *  default so callers embedding this in normal document flow
   *  (where "available height" isn't meaningful) are unaffected. */
  fitViewportHeight?: boolean;
  /** Vertical space (px) to reserve outside the card — padding,
   *  safe-area insets — when fitViewportHeight is on. */
  verticalMargin?: number;
  /** Only apply the height constraint when window.innerWidth is below
   *  this value (mobile/tablet). Above it (desktop), a short browser
   *  window scrolls the page instead of shrinking the card — a short
   *  window is not the same situation as a small mobile screen. */
  fitViewportHeightBelowWidth?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function updateScale() {
      const containerWidth = containerRef.current?.offsetWidth ?? naturalWidth;
      let next = containerWidth / naturalWidth;

      const heightFitActive =
        fitViewportHeight &&
        (fitViewportHeightBelowWidth === undefined ||
          window.innerWidth < fitViewportHeightBelowWidth);

      if (heightFitActive) {
        // visualViewport tracks the actual visible area on mobile
        // (accounting for the browser's collapsing address bar etc.)
        // more reliably than 100vh/innerHeight alone.
        const availableHeight =
          (window.visualViewport?.height ?? window.innerHeight) - verticalMargin;
        const heightScale = availableHeight / naturalHeight;
        next = Math.min(next, heightScale);
      }

      setScale(Math.min(1, next));
    }

    updateScale();
    window.addEventListener("resize", updateScale);
    window.visualViewport?.addEventListener("resize", updateScale);
    return () => {
      window.removeEventListener("resize", updateScale);
      window.visualViewport?.removeEventListener("resize", updateScale);
    };
  }, [naturalWidth, naturalHeight, fitViewportHeight, verticalMargin, fitViewportHeightBelowWidth]);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", overflow: "hidden", height: `${naturalHeight * scale}px` }}
    >
      <div
        style={{
          width: `${naturalWidth}px`,
          height: `${naturalHeight}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}
