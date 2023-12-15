const LanguageRequirements = ({ internation, international_type }) => {
  return (
    <section className="pt-7 pb-2 lg:pb-4" id="language_requirements">
      <div className="container mx-auto">
        <h2 className="title text-3xl mb-7">Language requirements</h2>
        <ul className="list-disc ml-4">
          {internation?.ielts > 0 && (
            <li>
              Your ielts score is likely to be {internation?.ielts} (or
              equivalent).
            </li>
          )}
          {(internation?.ielts === 0 || !internation?.ielts) && (
            <li>No need any english language certifications.</li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default LanguageRequirements;
