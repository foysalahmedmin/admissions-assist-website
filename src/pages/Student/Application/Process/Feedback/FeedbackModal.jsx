/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import React, {useState} from "react";
import Button from "@/components/Buttons/Button";
import Modal from "@/components/Modal/Modal";
import StarRating from "@/components/StarRating/StarRating.jsx";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import {useMutation, useQueryClient} from "react-query";
import {createFeedback} from "@/pages/Student/Application/requests/applicationApis.js";

// eslint-disable-next-line react/prop-types
const FeedbackModal = ({ isOpen, setIsOpen }) => {
  const queryClient = useQueryClient();
  const { application } = useSelector((state) => state.submission);
  const [councilor_experience, setCouncilorExperience] = useState(0);
  const [councilor_response, setCouncilorResponse] = useState(0);
  const [informative, setInformative] = useState(0);
  const [software_experience, setSoftwareExperience] = useState(0);
  const [feedback, setFeedback] = useState("");

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: createFeedback,
    onSuccess: () => {
      queryClient.invalidateQueries(["one_feedback"]);
    },
  });
  const handleSave = async () => {
    try {
      if (
        !application ||
        councilor_experience === 0 ||
        councilor_response === 0 ||
        informative === 0 ||
        software_experience === 0
      ) {
        return toast.warn(
          `${
            (!application && "No application found!") ||
            (councilor_experience === 0 &&
              "Please rate on councilor experience!") ||
            (councilor_response === 0 &&
              "Please rate on councilor response!") ||
            (informative === 0 && "Please rate on about informative!") ||
            (software_experience === 0 && "Please rate on software experience!")
          }`
        );
      }
      const status = await mutateAsync({
        application,
        councilor_experience,
        councilor_response,
        informative,
        software_experience,
        feedback,
      });
      toast.success(status?.message);
      setCouncilorExperience(0);
      setCouncilorResponse(0);
      setInformative(0);
      setSoftwareExperience(0);
      setFeedback("");
      setIsOpen(false);
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isCloseBtn={false}
      className={"w-full lg:w-[50rem] bg-white"}
    >
      <div className=" ">
        <div className="w-full bg-primary-500 text-white px-7 py-4">
          <h3 className="title text-white text-2xl">Submit your feedback</h3>
        </div>
        <div className="p-7">
          <div className="mb-7">
            <div className="mb-7">
              <p className="mb-2">How was experience with councilor?</p>
              <div>
                <StarRating
                  rating={councilor_experience}
                  setRating={setCouncilorExperience}
                  clickable={true}
                />
              </div>
            </div>
            <div className="mb-7">
              <p className="mb-2">How fast the counsellor responded?</p>
              <div>
                <StarRating
                  rating={councilor_response}
                  setRating={setCouncilorResponse}
                  clickable={true}
                />
              </div>
            </div>
            <div className="mb-7">
              <p className="mb-2">How informative they were?</p>
              <div>
                <StarRating
                  rating={informative}
                  setRating={setInformative}
                  clickable={true}
                />
              </div>
            </div>
            <div className="mb-7">
              <p className="mb-2">
                How easy it was to use the software and their overall
                experience?
              </p>
              <div>
                <StarRating
                  rating={software_experience}
                  setRating={setSoftwareExperience}
                  clickable={true}
                />
              </div>
            </div>
            <div className="mb-7">
              <label htmlFor="feedback" className="mb-2 block">
                Any additional feedback?
              </label>
              <textarea
                className="w-full px-4 py-4 border outline-none focus-within:border-text-500 resize-none"
                name="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                id="feedback"
                rows="3"
                placeholder="Write here"
              ></textarea>
            </div>
          </div>
          <Button
            className={"mx-auto"}
            isLoading={isLoading}
            disabled={isLoading}
            onClick={handleSave}
            text={"Submit"}
            icon={
              <span className="material-icons-outlined">trending_flat</span>
            }
          />
        </div>
      </div>
    </Modal>
  );
};

export default FeedbackModal;
