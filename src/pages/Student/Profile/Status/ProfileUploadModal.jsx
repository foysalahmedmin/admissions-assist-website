import Modal from "@/components/Modal/Modal";
import dropdownImg from "@/assets/images/icons/dropdown-image.svg";
import Button from "@/components/Buttons/Button";
import { LuUpload } from "react-icons/lu";

const ProfileUploadModal = ({ isOpen, setIsOpen, setImageFile }) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isCloseBtn={false}
      className={"w-full lg:w-[50rem] bg-white"}
    >
      <div className=" ">
        <div className="w-full bg-primary text-white px-7 py-4">
          <h3 className="title text-white text-2xl">Upload Profile Picture</h3>
        </div>
        <div className="p-7">
          <div className="min-h-[20rem] flex items-center justify-center border-2 border-primary border-dashed rounded-3xl text-center">
            <div>
              <h5 className="title text-xl mb-7">Drag & drop to upload</h5>
              <img className="mx-auto mb-7" src={dropdownImg} alt="" />
              <div>
                <label htmlFor="profile_image" className="primary-btn">
                  <span>Upload Profile Picture</span>
                  <LuUpload />
                </label>
                <input
                  onChange={(e) => {
                    setImageFile(e.target.files[0]);
                    setIsOpen(false);
                  }}
                  className="hidden"
                  type="file"
                  name="profile_image"
                  id="profile_image"
                  accept="image/*"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProfileUploadModal;
