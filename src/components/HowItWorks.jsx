<<<<<<< HEAD
import { Ball, DotGrid } from "./Decor";

const steps = [
  {
    title: "Pick your plan",
    text: "Choose the subscription that fits how you like to follow the games. Plan options and details will be shared here.",
  },
  {
    title: "Get set up",
    text: "Follow the simple steps to activate your subscription and get ready for the day’s football tips.",
  },
  {
    title: "Enjoy the matchday tips",
    text: "Check out the daily selections, markets and odds, then decide what works for your own bet slip.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative isolate overflow-hidden bg-[#F0ECF7] px-5 py-16 sm:px-8 md:py-24"
    >
      <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border-[28px] border-[#E2D9EF]" />
      <DotGrid />
      <Ball className="absolute bottom-8 right-[7%] z-10 hidden w-16 animate-bounce opacity-80 [animation-duration:5s] md:block" />
      <div className="relative z-20 mx-auto max-w-6xl">
        <span className="text-sm font-extrabold uppercase tracking-[.18em] text-[#00A844]">
          Getting started
        </span>
        <h2 className="mt-2 text-4xl font-black tracking-tight text-[#32106D] sm:text-5xl">
          How to subscribe
        </h2>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#514A5D]">
          Your quick guide to getting started with Daily2Odds and following the
          day’s football picks.
        </p>
        <ol className="mt-9 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className={`rounded-3xl border border-[#E2D9EF] bg-white p-6 shadow-[0_9px_0_#d4c9e5] ${i === 1 ? "md:translate-y-3" : ""}`}
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#00B94F] text-lg font-black text-[#142016]">
                0{i + 1}
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-[#32106D]">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-[#625B6C]">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-9 rounded-2xl bg-[#E2F4E9] px-5 py-4 font-medium text-[#16532F]">
          Curious about the tips?{" "}
          <a
            className="font-extrabold underline decoration-[#00B94F] decoration-2 underline-offset-4"
            href="#sample"
          >
            Take a look at a sample slip
          </a>
          .
        </div>
      </div>
    </section>
  );
}
=======
import HIWCards from "./HIWCards";
import { Ball, DotGrid } from "./Decor";

const steps = [
  {
    title: "Choose a plan",
    text: "Pick the subscription option that suits you. Plan details will be confirmed by SmartTips.",
  },
  {
    title: "Get daily tips",
    text: "Receive the day’s predictions and booking code once you’re subscribed.",
  },
  {
    title: "Play responsibly",
    text: "Use the tips as one input among many, and only stake what you can afford to lose.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how"
      className="relative isolate overflow-hidden bg-[#F7F4FC] px-5 py-16 sm:px-8 md:py-24"
    >
      {/* Decor: dot grid, green glow, oversized faded ball */}
      <DotGrid />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#5720A8]/15 blur-3xl"
      />
      <Ball className="pointer-events-none absolute -right-14 -top-8 -z-10 w-48 rotate-12 opacity-[0.07] sm:w-64" />

      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:gap-12">
        <div className="flex max-w-xl flex-col gap-3">
        <h2 className="text-4xl font-bold text-[#32106D] sm:text-5xl">
            How it works
          </h2>
          <p className="text-lg text-[#514A5D]">
            Three simple steps to follow the daily predictions.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title}>
              <HIWCards step={index + 1} title={step.title} text={step.text} />
            </li>
          ))}
        </ol>

        <p className="text-sm text-[#736B7D]">
          Draft wording. Final subscription steps and delivery channel to be
          confirmed by the business.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
>>>>>>> ec135fafb42a9a289c622efcf5f730cf84475ee8
