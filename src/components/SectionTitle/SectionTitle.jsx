const SectionTitle = ({ title, subtitle, text }) => {
  return (
    <div className="mx-auto text-center mb-12">
      <div className="text-secondary-500 capitalize flex items-center justify-center gap-2">
        <hr className="inline-block w-7 border-secondary-500" />{" "}
        <span>{subtitle}</span>{" "}
        <hr className="inline-block w-7 border-secondary-500" />
      </div>
      <h1 className="my-4 text-3xl lg:text-5xl title capitalize">{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default SectionTitle;
