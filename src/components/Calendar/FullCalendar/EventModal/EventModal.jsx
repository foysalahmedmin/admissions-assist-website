/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import Modal from "@/components/Modal/Modal";
import {BiLogoZoom} from "react-icons/bi";
import {format} from "date-fns";
import Button from "@/components/Buttons/Button.jsx";
import {useNavigate} from "react-router-dom";
import {Tooltip} from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

// eslint-disable-next-line react/prop-types
const EventModal = ({ isOpen, setIsOpen, event }) => {
  console.log(event);
  const navigation = useNavigate();
  return (
    <>
      <Modal
        isCloseBtn={false}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        className={"w-full lg:w-[40rem]"}
      >
        <div>
          <div className="w-full bg-primary-500 text-white px-7 py-4">
            <h3 className="title text-white text-2xl">{event?.title}</h3>
          </div>
          <div className="bg-white px-7 py-7">
            <div className="top-1 button-1 left-1 right-1 bg-[#01D7DF] rounded-2xl py-2 px-1 lg:px-4 flex flex-col">
              {event?.platform && (
                <div className="inline-flex flex-wrap gap-2 items-center justify-center px-2 py-2 rounded-xl bg-white bg-opacity-40">
                  <div className="h-5 w-5 rounded bg-[#4087FC] text-white flex items-center justify-center">
                    <BiLogoZoom />
                  </div>
                  <span className="text-xs text-text-900 capitalize">
                    {event?.platform}
                  </span>
                </div>
              )}
            </div>
            <p className="mt-4">{event?.description}</p>
            <div className="mt-auto flex flex-wrap items-center gap-1">
              <span className="block text-text-900 font-semibold text-sm">
                {format(event.start, "EEE")}
              </span>
              <div className="text-xs">
                <span>{format(event.start, "hh:mm a")}</span> -{" "}
                <span>{format(event.end, "hh:mm a")}</span>
              </div>
            </div>
            <div>
              <Button
                data-tooltip-id="my-tooltip"
                disabled={!event?.isStarted}
                onClick={() =>
                  navigation(`/meet/${event?._id}/${event?.title}`)
                }
                icon={<BiLogoZoom />}
                className="mx-auto"
                text="Start"
              />
              <Tooltip
                id="my-tooltip"
                variant="warning"
                place="top"
                content={
                  !event?.isStarted
                    ? "please wait councilor will start meeting soon"
                    : "councilor started meeting"
                }
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EventModal;
