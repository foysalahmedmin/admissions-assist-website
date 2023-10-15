import Modal from "@/components/Modal/Modal";
import Table from "./Table/Table";

const table_data = [
  {
    _id: '01',
    location: "Barnsley College Higher Education Church Street Campus",
    duration: "2 Years",
    session: "2024-2025",
    study_mode: "Full Time",
    class_starts: "2 March, 2024",
  },
  {
    _id: '02',
    location: "Barnsley College Higher Education Church Street Campus",
    duration: "2 Years",
    session: "2024-2025",
    study_mode: "Full Time",
    class_starts: "2 March, 2024",
  },
];

const AvailableCourseModal = ({ isOpen, setIsOpen, className }) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isCloseBtn={false}
      className={"rounded-3xl"}
    >
      <div className="text-text px-7 py-14 rounded-3xl">
        <div className="mb-7">
          <h1 className="text-3xl title mb-2">
            2 other courses options available
          </h1>
          <p className="text-title">
            Select a course option to view the information for the course{" "}
          </p>
        </div>
        <div>
          <Table table_data={table_data} />
        </div>
      </div>
    </Modal>
  );
};

export default AvailableCourseModal;
