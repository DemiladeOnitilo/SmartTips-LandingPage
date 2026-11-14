import { Ball, Rings } from "./Decor.jsx";

const guide = [
  { icon: "⚽", title: "Pick your fixtures", text: "Start with the matches you’re most interested in following today." },
  { icon: "▤", title: "Review each selection", text: "Check the market, odds and booking code, then decide what fits your own approach." },
  { icon: "✦", title: "Keep it responsible", text: "Treat predictions as opinions, set a limit and only bet what you can afford to lose." },
];

export default function MatchdayGuide() {
  return (
    <section id="matchday" className="relative isolate overflow-hidden bg-[#E2F4E9] px-5 py-16 sm:px-8 md:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border-[28px] border-[#C8E9D3]" />
      <Rings className="pointer-events-none absolute -left-36 -bottom-40 z-0 w-[30rem] opacity-[0.08]" />
      <Ball className="pointer-events-none absolute bottom-8 right-[7%] z-10 hidden w-16 animate-bounce opacity-70 [animation-duration:5s] md:block" />
      <div className="relative z-20 mx-auto max-w-6xl">
        <span className="text-sm font-extrabold uppercase tracking-[.18em] text-[#168243]">Your matchday, your way</span>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-[#32106D] sm:text-5xl">A simple guide to following the tips</h2>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#514A5D]">Use SmartTips selections as a starting point, take time to review them, and keep matchday enjoyable.</p>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {guide.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-lg shadow-[#32106D]/[0.06]">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#D4F2DF] text-xl text-[#32106D]">{item.icon}</span>
              <h3 className="mt-4 text-xl font-extrabold text-[#32106D]">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-[#514A5D]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
