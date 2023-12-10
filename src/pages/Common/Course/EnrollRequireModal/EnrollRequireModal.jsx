import Button from "@/components/Buttons/Button";
import UniversityCard from "@/components/Cards/UniversityCard.jsx/UniversityCard";
import Modal from "@/components/Modal/Modal";
import Pagination from "@/components/Pagination/Pagination";
import { getFilteredUniversitySearch } from "@/pages/Search/requests/search";
import { SetTotal } from "@/redux/tableSlice/tableSlice";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";

const EnrollModal = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const { page, limit, search } = useSelector((state) => state.table);
  const { country, city, session, start_rank, end_rank } = useSelector(
    (state) => state.filter
  );
  const { isLoading, data: universities } = useQuery({
    queryKey: [
      "filtered_search_universities",
      page,
      limit,
      search,
      country,
      city,
      session,
      start_rank,
      end_rank,
    ],
    queryFn: () =>
      getFilteredUniversitySearch({
        page,
        limit,
        search,
        country: country?.map((c) => c?.value),
        city: city?.map((c) => c?.value),
        session: session?.value,
        start_rank,
        end_rank,
      }),
    onSuccess: (output) => {
      dispatch(SetTotal(output?.total));
    },
    enabled: search !== "" || country?.length > 0,
  });
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
            <div className="grid md:grid-cols-3 gap-7 mb-7 lg:mb-12">
              {universities?.data?.map((x, i) => (
                <UniversityCard
                  key={i}
                  isLoading:isLoading
                  isSmall={true}
                  data={{
                    image_url: x?.cover,
                    title: x?.name,
                    course_quantity: x?.subjects,
                  }}
                />
              ))}
            </div>
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
