/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import Button from "@/components/Buttons/Button";
import Modal from "@/components/Modal/Modal";
import {useNavigate} from "react-router-dom";

const EnrollModal = ({ isOpen, setIsOpen }) => {
  const navigation = useNavigate();
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isCloseBtn={false}
      className={"rounded-3xl w-full lg:w-[40rem]"}
    >
      <div className="text-text-500 px-7 py-14 rounded-3xl text-center">
        <h3 className="title text-3xl mb-2">Successfully Enrolled</h3>
        <p className="mb-4">Fill out other steps of application</p>
        <Button
          className={"mx-auto"}
          onClick={() => navigation("/application")}
          text={"Proceed to  Application"}
          icon={<span className="material-icons-outlined">trending_flat</span>}
        />
      </div>
    </Modal>
  );
};

export default EnrollModal;
