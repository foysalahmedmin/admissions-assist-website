import Modal from "@/components/Modal/Modal";

const EventModal = ({ isOpen, setIsOpen, event }) => {
  return (
    <>
      <Modal
        isCloseBtn={false}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        className={"w-full lg:w-[40rem]"}
      >
        <div>
          <div className="w-full bg-primary text-white px-7 py-4">
            <h3 className="title text-white text-2xl">{event.title}</h3>
          </div>
          <div className="bg-white px-7 py-7"></div>
        </div>
      </Modal>
    </>
  );
};

export default EventModal;
