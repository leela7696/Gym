import { useMemo } from "react";

type ScrollingPhotosProps = {
  images?: string[];
  speedMs?: number;
  className?: string;
};

const defaultImages = [
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop",
  "public/pexels-leonmart-1552249.jpg",
  "public/pexels-thelazyartist-2247179.jpg",
  "public/pexels-sabel-blanco-662810-1480510.jpg",
];

const ScrollingPhotos = ({ images = defaultImages, speedMs = 30000, className = "" }: ScrollingPhotosProps) => {
  const track = useMemo(() => [...images, ...images], [images]);
  const duration = `${speedMs}ms`;
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <style>
        {`
        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        `}
      </style>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32"
        style={{ background: "linear-gradient(to right, var(--background), rgba(0,0,0,0))" } as any}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32"
        style={{ background: "linear-gradient(to left, var(--background), rgba(0,0,0,0))" } as any}
      />
      <div
        className="flex w-[200%]"
        style={{ animation: `scrollX linear infinite`, animationDuration: duration } as any}
      >
        {track.map((src: string, idx: number) => (
          <div key={`${src}-${idx}`} className="w-[16.666%] md:w-[12.5%] p-1 md:p-2">
            <div className="aspect-[4/3] w-full rounded-lg overflow-hidden border border-border bg-muted">
              <img
                src={src}
                alt="Fitness imagery"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingPhotos;
