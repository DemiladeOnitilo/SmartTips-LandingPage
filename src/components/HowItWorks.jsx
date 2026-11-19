import {  DotGrid } from "./Decor";

const plans = [
  { type: "Daily", code: "SMTD" },
  { type: "Weekly", code: "SMTW" },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative isolate overflow-hidden bg-[#F0ECF7] px-5 py-16 sm:px-8 md:py-24"
    >
      <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border-[28px] border-[#E2D9EF]" />
      <DotGrid />
      <div className="relative z-20 mx-auto max-w-6xl">
        <h2 className="mt-2 text-4xl font-black tracking-tight text-[#32106D] sm:text-5xl">
          How to subscribe
        </h2>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#514A5D]">
          Choose a SmartTips plan and send its code by SMS to <strong className="font-extrabold text-[#32106D]">7153</strong>.
        </p>
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {plans.map((plan) => (
            <article key={plan.type} className="rounded-3xl border border-[#E2D9EF] bg-white p-6 shadow-[0_9px_0_#d4c9e5] sm:p-8">
              <span className="inline-flex rounded-full bg-[#D4F2DF] px-4 py-1.5 text-sm font-extrabold uppercase tracking-wider text-[#16532F]">{plan.type} plan</span>
              <h3 className="mt-5 text-xl font-bold text-[#514A5D]">Send this SMS to 7153</h3>
              <p className="mt-3 rounded-2xl bg-[#F0ECF7] px-5 py-4 font-mono text-2xl font-black tracking-wide text-[#32106D]">{plan.code} <span className="font-sans text-base font-semibold tracking-normal text-[#625B6C]">to 7153</span></p>
            </article>
          ))}
        </div>
        <div className="mt-9 rounded-2xl bg-[#E2F4E9] px-5 py-4 font-medium text-[#16532F]">
          Ready to get started?{" "}
          <a
            className="font-extrabold underline decoration-[#00B94F] decoration-2 underline-offset-4"
            href="#benefits"
          >
            See what SmartTips offers
          </a>
          .
        </div>
      </div>
    </section>
  );
}
