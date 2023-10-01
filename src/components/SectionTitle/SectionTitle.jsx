const SectionTitle = ({ title, subtitle, text }) => {
  return (
    <div className="mx-auto text-center mb-12">
      <div className="text-secondary capitalize">
        -- <span>{subtitle}</span> --
      </div>
      <h1 className="my-4 text-3xl lg:text-5xl title capitalize">{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default SectionTitle;
