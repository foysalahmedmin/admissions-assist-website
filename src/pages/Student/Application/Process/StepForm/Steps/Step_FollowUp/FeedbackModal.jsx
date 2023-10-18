import Button from "@/components/Buttons/Button";
import Modal from "@/components/Modal/Modal";
import StarRating from "@/components/StarRating/StarRating";

const FeedbackModal = ({ isOpen, setIsOpen, handleSave }) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isCloseBtn={false}
      className={"w-full lg:w-[50rem] bg-white"}
    >
      <div className=" ">
        <div className="w-full bg-primary text-white px-7 py-4">
          <h3 className="title text-white text-2xl">Submit your feedback</h3>
        </div>
        <div className="p-7">
          <div className="mb-7">
            <div className="mb-7">
              <p className="mb-2">How was experience with councilor?</p>
              <div>
                <StarRating clickable={true} />
              </div>
            </div>
            <div className="mb-7">
              <p className="mb-2">How fast the counsellor responded?</p>
              <div>
                <StarRating clickable={true} />
              </div>
            </div>
            <div className="mb-7">
              <p className="mb-2">How informative they were?</p>
              <div>
                <StarRating clickable={true} />
              </div>
            </div>
            <div className="mb-7">
              <p className="mb-2">
                How easy it was to use the software and their
                overall experience?
              </p>
              <div>
                <StarRating clickable={true} />
              </div>
            </div>
            <div className="mb-7">
              <label htmlFor="feedback" className="mb-2 block">Any additional feedback?</label>
              <textarea className="w-full px-4 py-4 border outline-none focus-within:border-text resize-none" name="feedback" id="feedback" rows="3" placeholder="Write here"></textarea>
            </div>
          </div>
          <Button
            onClick={handleSave}
            className={"mx-auto"}
            text={"Submit"}
            icon={
              <span className="material-icons-outlined">trending_flat</span>
            }
          />
        </div>
      </div>
    </Modal>
  );
};

export default FeedbackModal;
