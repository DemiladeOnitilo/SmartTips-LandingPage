import { Ball, Pitch, FloatStyle } from "./Decor";
import { scrollToId } from "./scrollTo";

const Hero = () => {
  return (
    <>
      <section
        id="top"
        className="relative isolate overflow-hidden px-5 py-16 text-white sm:px-8 sm:py-20 lg:py-24"
        style={{
          background: [
            "radial-gradient(60% 50% at 8% 0%, rgba(117, 39, 207, 0.3), transparent 70%)",
            "radial-gradient(60% 50% at 92% 0%, rgba(0, 200, 83, 0.18), transparent 70%)",
            "linear-gradient(135deg, #16082E 0%, #32106D 58%, #173A2C 100%)",
          ].join(", "),
        }}
      >
        <FloatStyle />

        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <Pitch />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(22,8,46,0.7), transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-20 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-extrabold uppercase tracking-wider text-[#C9F5D9]">
              <Ball className="h-4 w-4" />
              Daily football predictions
            </span>

            <h1 className="max-w-2xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Your Daily Sports Predictions, All in One Place.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-[#E3D6F7] sm:text-xl">
              SmartTips shares daily betting tips and predictions for football
              fans across Nigeria, so you can follow each day’s selections
              without hunting around for them.
            </p>

            <a
              href="#how"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("how");
              }}
              className="mt-2 inline-flex items-center gap-2 rounded-xl bg-[#00B94F] px-6 py-4 text-lg font-extrabold text-[#142016] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-[#00A844] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
            >
              How to subscribe
            </a>

            <p className="text-sm text-[#B9DCC6]">
              Predictions are opinions, not guarantees. Bet responsibly.
            </p>
          </div>

          <div className="relative mx-auto flex w-full max-w-sm justify-center pb-6 sm:max-w-md lg:max-w-none lg:justify-end">
            <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-white/15 to-white/[0.04] p-6 shadow-2xl shadow-black/25 backdrop-blur-sm sm:p-9">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#00B94F]/35 sm:h-72 sm:w-72" />
              <div className="pointer-events-none absolute -right-5 -top-5 h-36 w-36 rounded-full border border-white/15 sm:h-48 sm:w-48" />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#C9F5D9]">
                    SmartTips
                  </span>
                  <Ball className="h-10 w-10 drop-shadow-lg sm:h-12 sm:w-12" />
                </div>
                <div className="mt-10 border-l-4 border-[#00B94F] pl-5 sm:mt-14">
                  <p className="text-sm font-bold uppercase tracking-[.18em] text-[#B9DCC6]">
                    Follow the game
                  </p>
                  <p className="mt-3 max-w-sm text-3xl font-black leading-tight text-white sm:text-4xl">
                    Football predictions for your matchday.
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  {["Daily tips", "Weekly tips"].map((label) => (
                    <span
                      key={label}
                      className="rounded-full border border-white/20 bg-[#16082E]/40 px-4 py-2 text-sm font-bold text-white"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#00B94F] text-[#142016]">
        <div className="mx-auto grid justify-center items-center max-w-6xl divide-y divide-[#008D3B]/25 px-5 py-3 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 md:py-5">
          {[
            "Daily football predictions",
            "Clear selections and odds",
            "Responsible play first",
          ].map((label, i) => (
            <div
              className="flex items-center gap-3 py-3 font-extrabold md:justify-center md:py-1"
              key={label}
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-lg text-[#32106D]">
                {["⚽", "▤", "✓"][i]}
              </span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
