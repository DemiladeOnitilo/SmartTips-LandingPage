const HIWCards = ({ step, title, text }) => {
  return (
    <article className="flex h-full w-full flex-col gap-5 rounded-xl border border-[#E2D9EF] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#00B94F] sm:p-8">
      <div
        aria-hidden="true"
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#32106D] text-3xl font-black text-white"
      >
        {step}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-[#24183A]">{title}</h3>
        <p className="text-md leading-relaxed text-[#625B6C]">{text}</p>
      </div>
    </article>
  );
};

export default HIWCards;
