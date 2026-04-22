import { useState } from "react";

interface BeforeAfterComparisonProps {
  image: string;
  alt: string;
  split?: "horizontal" | "vertical";
  className?: string;
}

const BeforeAfterComparison = ({
  image,
  alt,
  split = "vertical",
  className = "",
}: BeforeAfterComparisonProps) => {
  const [position, setPosition] = useState(50);

  const updatePosition = (clientX: number, rect: DOMRect) => {
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(5, Math.min(95, next)));
  };

  const imageClass =
    split === "vertical"
      ? "absolute left-0 h-[200%] w-full max-w-none object-cover"
      : "absolute top-0 h-full w-[200%] max-w-none object-cover";

  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden bg-charcoal select-none cursor-ew-resize ${className}`}
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        updatePosition(event.clientX, event.currentTarget.getBoundingClientRect());
      }}
      onPointerMove={(event) => {
        if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
        updatePosition(event.clientX, event.currentTarget.getBoundingClientRect());
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={`${alt} after`}
          draggable={false}
          className={imageClass}
          style={split === "vertical" ? { top: "-100%" } : { left: "-100%" }}
        />
      </div>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={image}
          alt={`${alt} before`}
          draggable={false}
          className={imageClass}
          style={split === "vertical" ? { top: 0 } : { left: 0 }}
        />
      </div>

      <div className="absolute inset-x-0 top-0 flex justify-between p-4 font-body text-[10px] tracking-[0.25em] uppercase text-cream">
        <span className="bg-charcoal/60 px-3 py-2 backdrop-blur-sm">Before</span>
        <span className="bg-charcoal/60 px-3 py-2 backdrop-blur-sm">After</span>
      </div>

      <div className="absolute top-0 bottom-0 w-px bg-cream" style={{ left: `${position}%` }}>
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-charcoal shadow-lg">
          <span className="text-lg leading-none">↔</span>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterComparison;