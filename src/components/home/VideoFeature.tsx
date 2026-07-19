"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ExternalLink, Play } from "lucide-react";

interface VideoFeatureProps {
  videoId: string;
  title: string;
}

export function VideoFeature({ videoId, title }: VideoFeatureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activated, setActivated] = useState(false);

  const watchUrl = useMemo(
    () => `https://www.youtube.com/watch?v=${videoId}`,
    [videoId],
  );

  // loop 需要 playlist 参数才能生效
  const embedUrl = useMemo(
    () =>
      `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&playsinline=1&rel=0`,
    [videoId],
  );

  const thumbnailUrl = useMemo(
    () => `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    [videoId],
  );

  // IntersectionObserver: 进入视口自动加载 iframe（autoplay+mute+loop）
  useEffect(() => {
    if (activated) return;
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [activated]);

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-lg bg-black"
        style={{ paddingBottom: "56.25%" }}
      >
        {activated ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          // 点击回退：缩略图 + 播放按钮，点击后手动加载 iframe
          <button
            type="button"
            onClick={() => setActivated(true)}
            className="absolute top-0 left-0 w-full h-full group"
            aria-label={`Play ${title}`}
          >
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
              <span className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[hsl(var(--nav-theme))/0.9] group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 md:w-9 md:h-9 text-white ml-1" fill="white" />
              </span>
            </span>
          </button>
        )}
      </div>

      <div className="flex justify-center">
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors"
        >
          Watch on YouTube
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
