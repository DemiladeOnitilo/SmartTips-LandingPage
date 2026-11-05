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
