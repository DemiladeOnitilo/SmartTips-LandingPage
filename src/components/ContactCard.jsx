const ContactCard = ({ label, info }) => {
  return (
    <div className="w-full rounded-xl border border-white/15 bg-white/[0.07] px-6 py-4 text-left sm:w-auto sm:min-w-52">
      <h3 className="text-sm font-normal text-[#B9DCC6]">{label}</h3>
      <p className="text-lg font-medium text-white">{info}</p>
    </div>
  );
};

export default ContactCard;
