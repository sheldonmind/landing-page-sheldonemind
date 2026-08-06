import { useEffect, useRef } from 'react';

const SRC = '/sheldonmind-intro.mp4';
const POSTER = '/sheldonmind-intro-poster.jpg';

/**
 * The brand film, sat between the use-case rail and the model strip. Plays itself, loops,
 * and shows no controls — it reads as part of the page rather than as a player.
 *
 * No edge feather: this clip is near-white (edges sampled at 241-255 against a #0a0a0a page),
 * and masking is alpha reduction, so any ramp let the page through as a grey band eating into
 * the picture. It sits as a clean rounded frame instead, like the cards on the rail above.
 *
 * Muted because that is the only way browsers allow unattended playback; the clip's SFX
 * track is still in the file, just never audible here.
 *
 * Playback is driven by an observer instead of the `autoplay` attribute so `preload="none"`
 * holds: the file only goes over the wire once the section is actually approached, keeping
 * it clear of the hero video's own load.
 */
export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: '200px' },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="intro" className="relative w-full overflow-hidden pb-10 pt-0 max-md:pb-6">
      <div className="al-container">
        <video
          ref={videoRef}
          src={SRC}
          poster={POSTER}
          preload="none"
          muted
          loop
          playsInline
          aria-hidden
          className="block aspect-video w-full rounded-[10px]"
        />
      </div>
    </section>
  );
}
