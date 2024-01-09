<<<<<<< HEAD
const UniversityCard = ({ data }) => {
  const { image_url, title, course_quantity } = data;
  return (
    <div>
      <div className="h-[420px] rounded-xl overflow-hidden relative">
        <img className="w-full h-full object-cover" src={image_url} alt="" />
        <div className="absolute bottom-0 left-0 right-0 inset-12 bg-gradient-to-t from-[#121212] text-center text-white p-4 pb-12 flex flex-col ">
          <div className="mt-auto">
            <h3 className="text-2xl title text-white">{title}</h3>
            <p className="title text-white">{course_quantity} Courses </p>
          </div>
        </div>
      </div>
=======
/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {urls} from "@/apis/config/urls.js";
import ComponentLoading from "@/components/Loading/ComponentLoading.jsx";
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const UniversityCard = ({ data, isLoading, isSmall }) => {
  const navigation = useNavigate();
  const { _id, image_url, title, course_quantity, isAddress, ranking } = data;
  return (
    <div>
      {isLoading ? (
        <ComponentLoading />
      ) : (
        <>
          {!isSmall && (
            <div
              onClick={() => navigation(`/university/${_id}`)}
              className="h-[420px] rounded-xl overflow-hidden relative cursor-pointer"
            >
              <img
                className="w-full h-full object-cover"
                src={`${urls?.university_cover}/${image_url}`}
                alt=""
              />
              <div className="absolute bottom-0 left-0 right-0 inset-12 bg-gradient-to-t from-[#121212] text-center text-white p-4 pb-12 flex flex-col ">
                <div className="mt-auto">
                  <h3 className="text-2xl title text-white">{title}</h3>
                  <p className="title text-white">{course_quantity} Courses </p>
                </div>
              </div>
            </div>
          )}
          {isSmall && (
            <div
              onClick={() => navigation(`/university/${_id}`)}
              className="h-[320px] rounded-xl overflow-hidden relative cursor-pointer"
            >
              <img
                className="w-full h-full object-cover"
                src={`${urls?.university_cover}/${image_url}`}
                alt=""
              />
              {isAddress ? (
                <div className="absolute bottom-0 left-0 right-0 inset-12 bg-gradient-to-t from-[#121212] text-center text-white p-4 pb-12 flex flex-col ">
                  <div className="mt-auto">
                    <h3 className="text-xl title text-white">{title}</h3>
                    <p className="title text-sm text-white">{ranking} rank</p>
                  </div>
                </div>
              ) : (
                <div className="absolute bottom-0 left-0 right-0 inset-12 bg-gradient-to-t from-[#121212] text-center text-white p-4 pb-12 flex flex-col ">
                  <div className="mt-auto">
                    <h3 className="text-xl title text-white">{title}</h3>
                    <p className="title text-sm text-white">
                      {course_quantity} Courses{" "}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}
>>>>>>> update-project/main
    </div>
  );
};

export default UniversityCard;
