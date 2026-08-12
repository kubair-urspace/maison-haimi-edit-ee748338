import mark from "@/assets/haimi-mark.png.asset.json";

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
  // "vertical" = before/after stacked top & bottom, "horizontal" = side by side
  const stacked = split === "vertical";

  const markClass =
    "pointer-events-none absolute w-[12%] max-w-[64px] -translate-x-1/2 -translate-y-1/2 opacity-25 mix-blend-screen select-none";

  return (
    <figure
      className={`group relative aspect-square overflow-hidden rounded-3xl bg-muted/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_hsl(var(--gold)/0.25)] ${className}`}
      aria-label={alt}
    >
      <img
        src={image}
        alt={alt}
        draggable={false}
        loading="lazy"
        className="h-full w-full object-contain"
      />

      {/* Watermark centered within each half, kept small and subtle */}
      <img
        src={mark.url}
        alt=""
        aria-hidden="true"
        draggable={false}
        className={markClass}
        style={stacked ? { left: "50%", top: "25%" } : { left: "25%", top: "50%" }}
      />
      <img
        src={mark.url}
        alt=""
        aria-hidden="true"
        draggable={false}
        className={markClass}
        style={stacked ? { left: "50%", top: "75%" } : { left: "75%", top: "50%" }}
      />
    </figure>
  );
};

export default BeforeAfterComparison;
