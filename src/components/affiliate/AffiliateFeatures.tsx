/** Four evergreen selling points — text only, numbered from their position. */
const features = [
  { title: 'Real commission', desc: 'Earn a commission on every sale you refer.' },
  { title: 'Cookie tracking', desc: 'Get credit for referrals even if they buy later.' },
  { title: 'Fast payouts', desc: 'Receive your earnings quickly and securely.' },
  { title: 'Real-time tracking', desc: 'Track clicks, signups and earnings in real time.' },
];

export function AffiliateFeatures() {
  return (
    <div className="grid grid-cols-1 gap-6 rounded-xl border border-zinc-800 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
      {features.map(({ title, desc }, idx) => (
        <div key={title} className="flex flex-col gap-1.5">
          <h3 className="m-0 text-sm font-semibold text-white">
            <span className="text-zinc-400">{`${idx + 1}. `}</span>
            {title}
          </h3>
          <p className="m-0 text-sm leading-relaxed text-zinc-400">{desc}</p>
        </div>
      ))}
    </div>
  );
}
