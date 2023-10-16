import Button from "@/components/Buttons/Button";
import Modal from "@/components/Modal/Modal";

const EnrollModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isCloseBtn={false}
      className={"rounded-3xl w-full lg:w-[40rem]"}
    >
      <div className="text-text px-7 py-14 rounded-3xl text-center">
        <h3 className="title text-3xl mb-2">Successfully Enrolled</h3>
        <p className="mb-4">Fill out other steps of application</p>
        <Button className={'mx-auto'} text={'Proceed to  Application'} icon={<span className="material-icons-outlined">trending_flat</span>} />
      </div>
    </Modal>
  );
};

export default EnrollModal;
