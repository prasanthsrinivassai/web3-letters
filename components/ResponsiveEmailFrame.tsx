"use client";

import { useEffect, useRef, useState } from "react";

export function ResponsiveEmailFrame({
  html,
  title,
  naturalWidth = 600,
}: {
  html: string;
  title: string;
  naturalWidth?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [scale, setScale] = useState(1);
  const [naturalHeight, setNaturalHeight] = useState(800);

  useEffect(() => {
    function updateScale() {
      const containerWidth = containerRef.current?.offsetWidth ?? naturalWidth;
      setScale(Math.min(1, containerWidth / naturalWidth));
    }
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [naturalWidth]);

  function measure() {
    const doc = iframeRef.current?.contentDocument;
    const height = doc?.body?.scrollHeight;
    if (height && height > 0) setNaturalHeight(height);
  }

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        maxWidth: `${naturalWidth}px`,
        margin: "0 auto",
        overflow: "hidden",
        height: `${naturalHeight * scale}px`,
      }}
    >
      <div
        style={{
          width: `${naturalWidth}px`,
          height: `${naturalHeight}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <iframe
          ref={iframeRef}
          srcDoc={html}
          title={title}
          onLoad={measure}
          style={{
            width: `${naturalWidth}px`,
            height: `${naturalHeight}px`,
            border: "none",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
