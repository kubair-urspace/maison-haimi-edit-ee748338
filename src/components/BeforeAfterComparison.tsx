interface BeforeAfterComparisonProps {
  image: string;
  alt: string;
  split?: "horizontal" | "vertical";
  className?: string;
}

const labelClass =
  "bg-charcoal/72 px-3 py-2 font-body text-[10px] uppercase tracking-[0.25em] text-cream backdrop-blur-sm";

const BeforeAfterComparison = ({
  image,
  alt,
  split = "vertical",
  className = "",
}: BeforeAfterComparisonProps) => {
  const isTopBottomLayout = split === "vertical";

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

      {isTopBottomLayout ? (
        <>
          <div className="absolute inset-x-0 top-0 flex justify-center p-4">
            <span className={labelClass}>Before</span>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-center p-4">
            <span className={labelClass}>After</span>
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-border/70" />
        </>
      ) : (
        <>
          <div className="absolute inset-y-0 left-0 flex items-start p-4">
            <span className={labelClass}>Before</span>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-start p-4">
            <span className={labelClass}>After</span>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-border/70" />
        </>
      )}
    </figure>
  );
};

export default BeforeAfterComparison;
