/** Hero: background video, gradient headline, model picker (Figma 2316:23438) */
export default function HeroSection() {
  return (
    <section className="flex w-full flex-col items-center px-12.5 pb-8 max-md:px-4">
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/15 bg-black aspect-1512/875 max-md:aspect-square">
        <div
          className="hero-media-frame absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
          style={{ width: `${(1412 / 1512) * 100}%`, height: `${(793.695 / 875) * 100}%` }}
        >
          <video
            src="/Snowboarder%20Rotates%20Video.mp4"
            className="block h-full w-full object-cover"
            style={{ objectPosition: 'center 15%' }}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
        <div className="absolute left-1/2 top-[54%] z-10 flex w-275 max-w-[92%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 md:top-1/2 md:gap-14">
          <div className="flex w-full flex-col items-center gap-4 md:gap-10">
            <p
              className="m-0 text-center font-['Figtree',sans-serif] font-medium"
              style={{
                fontSize: 'clamp(34px, 7vw, 108px)',
                lineHeight: 1,
                background:
                  'radial-gradient(ellipse at 21% 80%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.65) 41%, rgba(255,255,255,1) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              Find,<br />Create, Generate.<br />Your AI Journey<br />Starts Here.
            </p>
            <p className="hidden max-w-225 text-center font-['Figtree',sans-serif] text-base font-normal leading-[1.4] text-greygrey-800 md:block md:text-[24px]">
              Multi‑AI chat, image &amp; video generation with the most powerful models.<br />
              Pay as you go — no subscription required.
            </p>
          </div>
          <div className="flex w-full max-w-262.5 flex-col items-start justify-center gap-6 overflow-hidden rounded-xl bg-black p-4 md:gap-20 md:rounded-2xl md:p-9">
            <p className="w-full font-['Figtree',sans-serif] text-sm font-normal leading-[1.3] text-[#B5B5B5] md:text-[22px]">
              Choose your best AI model ...
            </p>
            <div className="flex w-full items-start justify-between">
              <button type="button" className="flex items-center justify-center overflow-hidden rounded-full border border-white p-3 md:p-4" aria-label="Add">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="md:h-8 md:w-8">
                  <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button type="button" className="relative flex items-center justify-center overflow-hidden rounded-full border border-white/20 p-3 md:p-4" aria-label="Send" style={{ boxShadow: 'inset -0.765px -0.765px 0.765px 0 #32EEFF' }}>
                <img src="/send.png" alt="Send" className="h-6 w-6 object-contain md:h-8 md:w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
