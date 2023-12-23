/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import Button from "@/components/Buttons/Button";
import UniversityCard from "@/components/Cards/UniversityCard.jsx/UniversityCard";
import Modal from "@/components/Modal/Modal";
import Pagination from "@/components/Pagination/Pagination";
import {SetTotal} from "@/redux/tableSlice/tableSlice";
import {useQuery} from "react-query";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {fetchMySuggestedUniversities} from "@/pages/Common/Course/Course/requests/courseApi.js";

const EnrollModal = ({
  isOpen,
  setIsOpen,
  points,
  ielts,
  experience,
  level_3,
  student_type,
}) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { page, limit } = useSelector((state) => state.table);
  const { isLoading, data: universities } = useQuery({
    queryKey: [
      "filtered_suggested_universities",
      page,
      limit,
      student_type,
      points,
      ielts,
      experience,
      level_3,
    ],
    queryFn: () =>
      fetchMySuggestedUniversities({
        page,
        limit,
        type: student_type,
        points,
        ielts,
        experience,
        level_3: false,
      }),
    onSuccess: (output) => {
      dispatch(SetTotal(output?.total));
    },
  });
  console.log("u", universities);
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isCloseBtn={false}
      className={"rounded-3xl w-full"}
    >
      <div className="text-text-500 px-7 w-full lg:w-[70rem] py-14 rounded-3xl">
        <div className="text-center">
          <h3 className="title text-3xl mb-2">Enrollment Required Action</h3>
          <p className="mb-4">Fill out other steps of application</p>
          <Button
            className={"mx-auto"}
            onClick={() => navigation("/profile")}
            text={"Complete Profile"}
            icon={
              <span className="material-icons-outlined">trending_flat</span>
            }
          />
        </div>
        <div className="my-4">
          <div className="text-secondary-500 capitalize flex items-center justify-center gap-2">
            <hr className="inline-block w-7 border-secondary-500" />
            <span>Or</span>
            <hr className="inline-block w-7 border-secondary-500" />
          </div>
        </div>
        <div>
          <p className="text-center mb-4">
            You can also apply from Billow Universities
          </p>
          <div className="">
            {universities?.data?.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-7 mb-7 lg:mb-12">
                {universities?.data?.map((x, i) => (
                  <UniversityCard
                    key={i}
                    isLoading:isLoading
                    isSmall={true}
                    data={{
                      _id: x?.university?._id,
                      image_url: x?.university?.cover,
                      title: x?.university?.name,
                      course_quantity: x?.subjects,
                      isAddress: true,
                      ranking: x?.university?.ranking,
                    }}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-sm text-secondary-500">
                No university found, which is matched with your requirements
              </p>
            )}
            {universities?.data?.length > 0 && (
              <div>
                <Pagination />
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EnrollModal;
