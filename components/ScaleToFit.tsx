"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function ScaleToFit({
  naturalWidth,
  naturalHeight,
  children,
}: {
  naturalWidth: number;
  naturalHeight: number;
  children: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function updateScale() {
      const containerWidth = containerRef.current?.offsetWidth ?? naturalWidth;
      setScale(Math.min(1, containerWidth / naturalWidth));
    }
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [naturalWidth]);

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
