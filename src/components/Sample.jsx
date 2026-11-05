import betslip from "../assets/betslip.png";

const Sample = () => {
  return (
    <section
      id="sample"
      className="relative isolate overflow-hidden px-5 py-16 sm:px-8 md:py-24"
      style={{
        background:
          "radial-gradient(50% 55% at 85% 35%, rgba(0,185,79,0.13), transparent 72%), linear-gradient(180deg, #F7F4FC 0%, #F1EBF8 100%)",
      }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h2 className="text-4xl font-bold leading-tight text-[#32106D] sm:text-5xl">
            A clear look at every daily slip
          </h2>
          <p className="mx-auto max-w-xl text-lg text-[#514A5D] lg:mx-0">
            Each day’s selections, odds and booking code laid out in one tidy
            card. Everything shown here is placeholder content until real
            details are supplied.
          </p>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -z-10 h-64 w-64 rounded-full bg-[#5720A8]/15 blur-3xl sm:h-80 sm:w-80"
          />
          <img
            src={betslip}
            alt="Sample betting code card with placeholder content"
            className="w-full max-w-xs rotate-2 rounded-2xl drop-shadow-[0_24px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:rotate-0 sm:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Sample;
