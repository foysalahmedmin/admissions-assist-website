<<<<<<< HEAD

const EntryRequirements = () => {
=======
const EntryRequirements = ({
  local,
  internation,
  notRequiredInternational,
  notRequiredLocal,
  international_type,
}) => {
>>>>>>> update-project/main
  return (
    <section className="py-7" id="entry_requirements">
      <div className="container mx-auto">
        <h2 className="title text-3xl mb-7">Entry requirements</h2>
        <ul className="list-disc ml-4">
<<<<<<< HEAD
          <li>
            A* to C grade and/or 9 to 4 in GCSE Maths (or equivalent) is
            strongly recommended.
          </li>
          <li>A BTEC Level 4 qualification in Engineering.</li>
          <li>Other related Level 4 qualifications.</li>
          <li>An international equivalent of the above.</li>
=======
          {!notRequiredInternational && international_type === "ielts" && (
            <li>
              IELTS <strong>{internation?.ielts}</strong> is strongly
              recommended for <strong>International</strong> students.
            </li>
          )}
          {!notRequiredInternational && international_type === "point" && (
            <li>
              Point <strong>{internation?.point}</strong> is strongly
              recommended for <strong>International</strong> students.
            </li>
          )}
          {!notRequiredInternational && international_type === "assessment" && (
            <li>
              Assessment is strongly recommended for{" "}
              <strong>International</strong> students.
            </li>
          )}
          {!notRequiredInternational &&
            international_type === "ielts_and_point" && (
              <li>
                Point <strong>{internation?.point}</strong> and IELTS{" "}
                <strong>{internation?.ielts}</strong> is strongly recommended
                for <strong>International</strong> students.
              </li>
            )}
          {!notRequiredInternational &&
            international_type === "ielts_or_point" && (
              <li>
                Point <strong>{internation?.point}</strong> or IELTS{" "}
                <strong>{internation?.ielts}</strong> is strongly recommended
                for <strong>International</strong> students.
              </li>
            )}
          {!notRequiredInternational &&
            international_type === "ielts_and_assessment" && (
              <li>
                IELTS <strong>{internation?.ielts}</strong> and assessment is
                strongly recommended for <strong>International</strong>{" "}
                students.
              </li>
            )}
          {!notRequiredInternational &&
            international_type === "ielts_or_assessment" && (
              <li>
                IELTS <strong>{internation?.ielts}</strong> or assessment is
                strongly recommended for <strong>International</strong>{" "}
                students.
              </li>
            )}
          {!notRequiredInternational &&
            international_type === "point_and_assessment" && (
              <li>
                Point <strong>{internation?.point}</strong> and assessment is
                strongly recommended for <strong>International</strong>{" "}
                students.
              </li>
            )}
          {!notRequiredInternational &&
            international_type === "point_or_assessment" && (
              <li>
                Point <strong>{internation?.point}</strong> or assessment is
                strongly recommended for <strong>International</strong>{" "}
                students.
              </li>
            )}
          {!notRequiredInternational &&
            international_type === "ielts_or_point_or_assessment" && (
              <li>
                Point <strong>{internation?.point}</strong> or IELTS{" "}
                <strong>{internation?.ielts}</strong> or assessment is strongly
                recommended for <strong>International</strong> students.
              </li>
            )}
          {!notRequiredInternational &&
            international_type === "ielts_and_point_and_assessment" && (
              <li>
                Point <strong>{internation?.point}</strong> and IELTS{" "}
                <strong>{internation?.ielts}</strong> and assessment is strongly
                recommended for <strong>International</strong> students.
              </li>
            )}
          {!notRequiredLocal && local?.experience && (
            <li>
              Experience will be must required for <strong>Local</strong>{" "}
              students.
            </li>
          )}
          {!notRequiredLocal && local?.level_3 && (
            <li>
              Level 3 certification will be must required for{" "}
              <strong>Local</strong> students.
            </li>
          )}
          {!notRequiredLocal && local?.level_3 && local?.experience && (
            <li>
              Level 3 and experience certification will be must required for{" "}
              <strong>Local</strong> students.
            </li>
          )}
          {notRequiredLocal && (
            <li>
              No requirement required for <strong>Local</strong> students.
            </li>
          )}
          {notRequiredInternational && (
            <li>
              No requirement required for <strong>International</strong>{" "}
              students.
            </li>
          )}
>>>>>>> update-project/main
        </ul>
      </div>
    </section>
  );
};

export default EntryRequirements;
