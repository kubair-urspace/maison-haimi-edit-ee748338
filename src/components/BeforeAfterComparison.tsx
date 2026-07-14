import watermark from "@/assets/haimi-watermark.png.asset.json";

interface BeforeAfterComparisonProps {
  image: string;
  alt: string;
  split?: "horizontal" | "vertical";
  className?: string;
}

const BeforeAfterComparison = ({
  image,
  alt,
  className = "",
}: BeforeAfterComparisonProps) => {
  return (
    <figure
      className={`relative aspect-square overflow-hidden bg-muted/30 ${className}`}
      aria-label={alt}
    >
      <img
        src={image}
        alt={alt}
        draggable={false}
        loading="lazy"
        className="h-full w-full object-contain"
      />
      <img
        src={watermark.url}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none absolute left-1/2 top-1/2 w-2/3 md:w-3/5 -translate-x-1/2 -translate-y-1/2 opacity-40 mix-blend-screen select-none"
      />

    </figure>
  );
};

export default BeforeAfterComparison;
