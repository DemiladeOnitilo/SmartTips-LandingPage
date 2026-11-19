const benefits = [
  {
    title: "Daily football tips",
    text: "Get football predictions and selections for the day’s matches.",
  },
  {
    title: "Choose your frequency",
    text: "Subscribe for daily tips or choose the weekly option instead.",
  },
  {
    title: "Keep it responsible",
    text: "Use predictions as information, make your own decisions and only bet what you can afford to lose.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative isolate overflow-hidden bg-[#1B0939] px-5 py-16 text-white sm:px-8 md:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-36 -top-40 h-[34rem] w-[34rem] rounded-full border border-white/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-[22rem] w-[22rem] rounded-full border border-[#00B94F]/20" />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div className="flex flex-col items-start">
          <span className="text-sm font-extrabold uppercase tracking-[.18em] text-[#62D68A]">The SmartTips approach</span>
          <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
            Football tips that fit your routine
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#D1C6DE]">
            Follow football predictions on a schedule that works for you, and stay in control of how you play.
          </p>
          <a href="#how" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#00B94F] px-5 py-3 font-extrabold text-[#142016] transition hover:-translate-y-0.5 hover:bg-[#62D68A]">
            Choose a subscription <span aria-hidden="true">→</span>
          </a>
        </div>
        <ol className="divide-y divide-white/15 border-y border-white/15">
          {benefits.map((benefit, index) => (
            <li key={benefit.title} className="grid gap-3 py-6 sm:grid-cols-[4.5rem_1fr] sm:gap-5 sm:py-7">
              <span className="text-3xl font-black text-[#62D68A]">0{index + 1}</span>
              <div>
                <h3 className="text-xl font-extrabold text-white sm:text-2xl">{benefit.title}</h3>
                <p className="mt-2 max-w-xl leading-relaxed text-[#D1C6DE]">{benefit.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
