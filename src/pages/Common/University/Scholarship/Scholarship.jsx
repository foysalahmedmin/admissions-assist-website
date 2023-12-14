import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
import Button from "@/components/Buttons/Button";
import {LuDownload} from "react-icons/lu";
import {urls} from "@/apis/config/urls.js";

// eslint-disable-next-line react/prop-types
const Scholarship = ({ scholarship }) => {
  return (
    <div className="container mx-auto text-white" id="scholarship">
      <BackgroundLayer
        className={"lg:py-24 py-14 px-7 lg:px-14"}
        bg_position={"bg-right"}
        image_url={"/background/sub-footer.png"}
      >
        <div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-7 lg:gap-14">
            <div>
              <h2 className="title text-3xl text-white mb-7">Scholarship</h2>
              <p>{scholarship?.description}</p>
            </div>
            <div>
              <Button
                onClick={() =>
                  window.open(`${urls?.scholarship}/${scholarship?.attachment}`)
                }
                text={"Download"}
                icon={<LuDownload />}
              />
            </div>
          </div>
        </div>
      </BackgroundLayer>
    </div>
  );
};

export default Scholarship;
