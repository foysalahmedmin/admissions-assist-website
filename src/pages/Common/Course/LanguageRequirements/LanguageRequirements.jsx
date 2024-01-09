<<<<<<< HEAD
const LanguageRequirements = () => {
  return (
    <section className="pt-7 pb-14 lg:pb-24" id="language_requirements">
      <div className="container mx-auto">
        <h2 className="title text-3xl mb-7">Language requirements</h2>
        <ul className="list-disc ml-4">
          <li>
            Your grade profile is likely to be supported by GCSE grades at A* to
            C and/or 9 to 4 (or equivalent)
          </li>
=======
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
>>>>>>> update-project/main
        </ul>
      </div>
    </section>
  );
};

export default LanguageRequirements;
