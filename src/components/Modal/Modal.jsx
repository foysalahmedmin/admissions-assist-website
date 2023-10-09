import { useRef } from "react";
import { twMerge } from "tailwind-merge";

const Modal = ({
  isOpen,
  setIsOpen,
  isCloseBtn = true,
  className,
  children,
}) => {
  const modalRef = useRef(null);
  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  return (
    <div className="relative">
      <div
        onClick={handleOutsideClick}
        className={`fixed p-[2.5%] inset-0 flex flex-col items-center justify-center z-50 transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div className="fixed inset-0 bg-black opacity-25"></div>
        <div
          className={`${
            isOpen ? "scale-100" : "scale-0"
          } overflow-y-auto overflow-hidden transform transition-all duration-300 `}
        >
          <div
            ref={modalRef}
            className={twMerge(
              `bg-white overflow-hidden shadow-xl`,
              className
            )}
          >
            {isCloseBtn && (
              <div className="flex justify-end mb-7 flex-shrink-0">
                <button
                  className="h-7 w-7 flex items-center justify-center border rounded-full text-gray-700 hover:text-secondary flex-shrink-0"
                  onClick={() => setIsOpen(false)}
                >
                  ✕
                </button>
              </div>
            )}
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
