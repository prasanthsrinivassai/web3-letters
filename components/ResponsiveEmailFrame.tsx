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
    if (height && height > 0) setNaturalHeight(height + 2);
  }

  // The iframe is its own browsing context, so it can show its own native
  // scrollbar independent of the outer page — even a 1px rounding gap
  // between the measured content height and the iframe's box triggers it.
  // Force it off inside the iframe's own document, on top of the legacy
  // `scrolling="no"` attribute which browsers still honor.
  const noScrollbarStyle = `<style>html,body{overflow:hidden!important;scrollbar-width:none!important}html::-webkit-scrollbar,body::-webkit-scrollbar{display:none!important;width:0!important;height:0!important}</style>`;
  const patchedHtml = html.includes("</head>")
    ? html.replace("</head>", `${noScrollbarStyle}</head>`)
    : noScrollbarStyle + html;

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
          srcDoc={patchedHtml}
          title={title}
          scrolling="no"
          onLoad={measure}
          style={{
            width: `${naturalWidth}px`,
            height: `${naturalHeight}px`,
            border: "none",
            display: "block",
            overflow: "hidden",
          }}
        />
      </div>
    </div>
  );
}
