import { useState } from "react";
import React from "react";

interface LazyImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export function LazyImg({ src, alt, className = "", ...props }: LazyImgProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className="relative block w-full h-full">
      {!loaded && (
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-[inherit] animate-pulse"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.20 0.02 220) 0%, oklch(0.24 0.05 180) 50%, oklch(0.20 0.02 220) 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.6s infinite",
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </span>
  );
}
