import Modal from "@/components/Modal/Modal";
import { Link } from "react-router-dom";

const DocumentModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isCloseBtn={false}
        className={"rounded-none"}
      >
        <div className="py-4 px-7 bg-primary text-white">
          <h3 className="title text-white text-2xl">Document: Passport</h3>
        </div>
        <div className="p-7">
          <p>
            You must submit a legible copy of your valid{" "}
            <Link className="text-secondary font-semibold">
              travel document
            </Link>{" "}
            which you will use to travel.
          </p>
          <p>If you have a passport, you must provide a copy of:</p>
          <ul className="list-disc ml-7">
            <li>
              the page that shows your birth date and country of origin, and
            </li>
            <li>any pages with stamps, visas or markings.</li>
          </ul>
          <p>
            If you do not have a passport and must use another travel document,
            it must be issued by a government and include your:
          </p>
          <ul className="list-disc ml-7">
            <li>Name</li>
            <li>Date of birth</li>
            <li>Document number</li>
            <li>Citizenship or residency status,</li>
            <li>Photo, end</li>
          </ul>
          <p>expiry date (if applicable).</p>
        </div>
      </Modal>
    </>
  );
};

export default DocumentModal;
