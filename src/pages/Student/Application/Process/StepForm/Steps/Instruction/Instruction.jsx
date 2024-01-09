/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import Modal from "@/components/Modal/Modal.jsx";
import parse from "html-react-parser";

const Instruction = ({ isOpen, setIsOpen, title, instruction }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isCloseBtn={false}
        className={"rounded"}
      >
        <div className="py-4 px-7 bg-primary-500 text-white">
          <h3 className="title text-white text-2xl">Document: {title}</h3>
        </div>
        <div className="p-7">{parse(`${instruction}`)}</div>
      </Modal>
    </>
  );
};

export default Instruction;
