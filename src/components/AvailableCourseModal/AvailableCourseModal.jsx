import Modal from "@/components/Modal/Modal";
import Table from "./Table/Table";

// eslint-disable-next-line react/prop-types
const AvailableCourseModal = ({ isOpen, setIsOpen, courses }) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isCloseBtn={false}
      className={"rounded-3xl"}
    >
      <div className="text-text-500 px-7 py-14 rounded-3xl">
        <div className="mb-7">
          <h1 className="text-3xl title mb-2">
            {courses?.length} other courses options available
          </h1>
          <p className="text-text-900">
            Select a course option to view the information for the course{" "}
          </p>
        </div>
        <div>
          <Table table_data={courses} setIsOpen={setIsOpen} />
        </div>
      </div>
    </Modal>
  );
};

export default AvailableCourseModal;
