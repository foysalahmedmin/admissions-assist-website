/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import Accordion from "@/components/Accordion/Accordion";
import {LuUploadCloud} from "react-icons/lu";
import {useDispatch, useSelector} from "react-redux";
import {
  SetCenter,
  SetCertificate,
  SetExamDate,
  SetPlatform,
  SetScore,
} from "@/redux/applicationFormSlice/applicationFormSlice.jsx";
import moment from "moment";
import Button from "@/components/Buttons/Button.jsx";
import {BiDownload} from "react-icons/bi";
import useDownloader from "react-use-downloader";
import {urls} from "@/apis/config/urls.js";

const LanguageRequirements = () => {
  const { download } = useDownloader();
  const dispatch = useDispatch();
  const { english_language } = useSelector((state) => state.application_form);

  return (
    <Accordion
      title={"English Language requirements"}
      doneStatus={
        english_language?.platform &&
        english_language?.score &&
        english_language?.exam_date &&
        english_language?.center &&
        english_language?.certificate
      }
    >
      <div className="mb-7">
        <label htmlFor="english_certificate" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
            Which English proficiency certificate do you have?
          </span>
        </label>
        <select
          name="english_certificate"
          value={english_language?.platform}
          onChange={(e) => dispatch(SetPlatform(e.target.value))}
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="english_certificate"
          required
        >
          <option value="">Select Platform</option>
          <option value="general_ielts">General Ielts</option>
          <option value="academic_ielts">Academic Ielts</option>
        </select>
      </div>
      <div>
        <label htmlFor="score" className="block mb-4">
          <span className="block text-text-900">Score</span>
        </label>
        <input
          type="number"
          value={english_language?.score}
          onChange={(e) => dispatch(SetScore(Number(e.target.value)))}
          name="score"
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="score"
          placeholder="Score"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="Center" className="block mb-4">
          <span className="block text-text-900">Center</span>
        </label>
        <input
          type="text"
          name="Center"
          value={english_language?.center}
          onChange={(e) => dispatch(SetCenter(e.target.value))}
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="Center"
          placeholder="Center"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="Exam" className="block mb-4">
          <span className="block text-text-900">Exam Date</span>
        </label>
        <input
          type="date"
          name="Exam"
          value={moment(new Date(english_language?.exam_date)).format(
            "yyyy-MM-DD"
          )}
          onChange={(e) => dispatch(SetExamDate(e.target.value))}
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="Exam"
        />
      </div>
      <div className="mt-6">
        <label htmlFor={`certificate`} className="block mb-4">
          <span className="block text-text-900">Certificate</span>
        </label>
        <div className="flex gap-2">
          <div>
            <label
              className="secondary-btn inline-flex"
              htmlFor={`certificate`}
            >
              <span>Attach Certificate</span>{" "}
              <span>
                <LuUploadCloud className="text-2xl" />
              </span>
            </label>
            <input
              className="hidden text-sm"
              onChange={(e) => dispatch(SetCertificate(e.target.files[0]))}
              type="file"
              name={`certificate`}
              id={`certificate`}
            />
            {english_language?.certificate?.name && (
              <p className="mt-3 ml-2">{english_language?.certificate?.name}</p>
            )}
          </div>
          <div>
            {english_language?.certificate && (
              <Button
                onClick={() =>
                  download(
                    `${urls?.ielts}/${english_language?.certificate}`,
                    english_language?.certificate
                  )
                }
                icon={<BiDownload />}
              />
            )}
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default LanguageRequirements;
