const SectionTitle = ({ title, subtitle, text }) => {
  return (
    <div className="max-w-[35rem] mx-auto text-center mb-12">
      <div className="text-secondary capitalize">
        -- <span>{subtitle}</span> --
      </div>
      <h1 className="my-4 text-title text-3xl lg:text-5xl font-bold capitalize">
        {title}
      </h1>
      <p>{text}</p>
    </div>
  );
};

export default SectionTitle;
