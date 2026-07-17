import { FigmaPrimaryCtaLink } from '../../FigmaPrimaryCta';
import { MEDIA } from '../tokens';

/** Full-width rounded video panel with the CTA sitting on top of it. */
export default function CtaBand() {
  return (
    <section className="w-full pb-24 max-md:pb-16">
      <div>
        <div className="al-container">
          <div className="relative grid min-h-[460px] place-items-center overflow-hidden rounded-3xl max-md:min-h-[340px]">
            <video
              className="absolute inset-0 size-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              aria-hidden
            >
              <source src={MEDIA.mixed} type="video/mp4" />
            </video>
            {/* The mixed-media clip is bright and busy; /45 left the headline barely legible. */}
            <div aria-hidden className="absolute inset-0 bg-black/65" />
            <div className="relative z-10 flex flex-col items-center px-6 text-center">
              <h2 className="serif-display m-0 max-w-[16ch] text-white">Your AI journey starts here.</h2>
              {/* Equal 1fr columns under an intrinsically-sized grid: both buttons take the
                  width of the wider one, so the pair stays symmetric without pinning a
                  magic px value. Stacks below 420px, where two 176px pills won't fit. */}
              <div className="mt-9 grid grid-cols-2 gap-5 max-[420px]:grid-cols-1">
                <FigmaPrimaryCtaLink text="Try Free Now" className="w-full" />
                <FigmaPrimaryCtaLink href="/affiliate.html" text="Affiliate" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
