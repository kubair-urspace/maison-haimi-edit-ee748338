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
        className="pointer-events-none absolute bottom-3 right-3 w-24 md:w-28 opacity-70 mix-blend-screen select-none"
      />
    </figure>
  );
};

export default BeforeAfterComparison;
