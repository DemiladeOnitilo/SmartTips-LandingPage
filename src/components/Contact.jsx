import ContactCard from "./ContactCard";
import { Ball, Rings, FloatStyle } from "./Decor";

// Replace "info" with the real details once the business confirms them.
const contacts = [
  { label: "WhatsApp", info: "Number to be confirmed" },
  { label: "Telegram", info: "Handle to be confirmed" },
  { label: "Instagram", info: "Handle to be confirmed" },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden px-5 py-16 text-center text-white sm:px-8 md:py-24"
      style={{
        // Starts at the exact green the Sample section ends on, so there is no seam
        background: [
          "radial-gradient(55% 60% at 50% 100%, rgba(0,200,83,0.22), transparent 70%)",
          "linear-gradient(180deg, #32106D 0%, #1B0939 100%)",
        ].join(", "),
      }}
    >
      <FloatStyle />

      {/* Decor: big centre-circle rings, plus a floating ball on larger screens */}
      <Rings className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[150%] max-w-[56rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]" />
      <div className="d2o-float pointer-events-none absolute bottom-8 left-[6%] -z-10 hidden w-20 opacity-90 lg:block">
        <Ball className="h-auto w-full drop-shadow-[0_14px_18px_rgba(0,0,0,0.5)]" />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5">
        <h2 className="max-w-xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Ready to follow today’s predictions?
        </h2>
        <p className="max-w-md text-lg text-[#E3D6F7]">
          Get in touch to learn more about SmartTips and how to subscribe.
        </p>

        {/* Not linked yet: add an href (for example a WhatsApp link) once confirmed */}
        <button
          type="button"
          className="mt-2 cursor-pointer rounded-full bg-[#00B94F] px-8 py-3.5 text-lg font-semibold text-[#142016] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-[#00A844] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
        >
          Get in Touch
        </button>

        <div className="mt-8 grid w-full gap-4 sm:w-auto sm:grid-flow-col">
          {contacts.map((c) => (
            <ContactCard key={c.label} label={c.label} info={c.info} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
