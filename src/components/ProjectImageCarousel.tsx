"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "./ui";

const FADE_MS = 350;

/**
 * Wide banner gallery for a project's detail page. Renders exactly like a
 * single static <Image> when there's only one photo (no controls, no
 * fade — the common case today); once a project has more than one image,
 * arrow buttons and dots appear and each swap crossfades rather than cuts.
 */
export function ProjectImageCarousel({
  images,
  alt,
  caption,
}: {
  images: string[];
  alt: string;
  caption?: string;
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const transitioning = useRef(false);
  const count = images.length;

  const go = useCallback(
    (i: number) => {
      if (transitioning.current) return;
      const next = ((i % count) + count) % count;
      if (next === index) return;
      transitioning.current = true;
      setVisible(false);
      window.setTimeout(() => {
        setIndex(next);
        setVisible(true);
        window.setTimeout(() => {
          transitioning.current = false;
        }, FADE_MS);
      }, FADE_MS);
    },
    [count, index],
  );

  return (
    <div
      className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-mist lg:aspect-[21/9]"
      role={count > 1 ? "region" : undefined}
      aria-roledescription={count > 1 ? "carousel" : undefined}
      aria-label={count > 1 ? alt : undefined}
      tabIndex={count > 1 ? 0 : undefined}
      onKeyDown={
        count > 1
          ? (e) => {
              if (e.key === "ArrowLeft") go(index - 1);
              if (e.key === "ArrowRight") go(index + 1);
            }
          : undefined
      }
    >
      <Image
        src={images[index]}
        alt={count > 1 ? `${alt} — photo ${index + 1} of ${count}` : alt}
        fill
        sizes="(max-width: 1760px) 100vw, 1760px"
        priority
        className={`object-cover transition-opacity duration-[350ms] ease-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      {caption && (
        <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-3 pt-10 text-xs italic text-white/90 sm:px-7">
          {caption}
        </p>
      )}

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-ink shadow-md transition-colors hover:bg-white sm:left-4"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-ink shadow-md transition-colors hover:bg-white sm:right-4"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((src, i) => (
              <button
                key={src + i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to photo ${i + 1}`}
                aria-current={i === index}
                className={`h-2 cursor-pointer rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
