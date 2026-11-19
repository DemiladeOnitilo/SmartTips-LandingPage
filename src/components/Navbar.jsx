import { useEffect, useState } from "react";
import Logo from "../assets/Smartips.png";
import { scrollToId } from "./scrollTo.js";

const links = [
  { label: "How to Subscribe", id: "how" },
  { label: "What You Get", id: "benefits" },
  { label: "Matchday Guide", id: "matchday" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 8);
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
      let current = "";
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4)
          current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#E2D9EF] bg-white transition-shadow duration-200 ${scrolled ? "shadow-lg shadow-[#32106D]/10" : ""}`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6"
      >
        <a
          href="#top"
          onClick={(e) => go(e, "top")}
          className="shrink-0"
          aria-label="SmartTips home"
        >
          <img
            src={Logo}
            alt="SmartTips Logo"
            className="h-auto w-40 sm:w-48"
          />
        </a>
        <button
          className="rounded-lg p-2 text-2xl text-[#32106D] md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
        <div
          className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-t border-[#E2D9EF] bg-[#F7F4FC] p-4 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {links.map(({ label, id }) => {
            const on = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => go(e, id)}
                aria-current={on ? "location" : undefined}
                className={`relative rounded-lg px-3 py-3 text-base font-bold transition-colors md:px-0 md:py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B94F] focus-visible:ring-offset-4 ${on ? "text-[#32106D] after:absolute after:bottom-1 after:left-3 after:right-3 after:h-1 after:rounded-full after:bg-[#00B94F] md:after:bottom-0 md:after:left-0 md:after:right-0" : "text-[#187A42] hover:text-[#32106D]"}`}
              >
                {label}
              </a>
            );
          })}
          <a
            href="#how"
            onClick={(e) => go(e, "how")}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#32106D] px-5 py-3 font-extrabold text-white shadow-md shadow-[#32106D]/25 transition hover:-translate-y-0.5 hover:bg-[#240A54] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00B94F]/40 md:mt-0"
          >
            Subscribe <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>
      <div aria-hidden="true" className="h-[3px] bg-gray-100">
        <div
          className="h-full bg-gradient-to-r from-[#00B94F] to-[#5720A8]"
          style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }}
        />
      </div>
    </header>
  );
};

export default Navbar;
