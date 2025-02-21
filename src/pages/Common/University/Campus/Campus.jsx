<<<<<<< HEAD
import { LuMapPin } from "react-icons/lu";

const Campus = () => {
  return (
    <section className="lg:pb-24 py-14" id="courses">
      <div className="container mx-auto">
        <h3 className="title text-3xl mb-7">Campus</h3>
        <div className="flex flex-wrap items-center gap-7">
          <div className="p-4 rounded bg-white text-center shadow">
            <span className="mx-auto text-text-900">Grenfall Campus</span>
            <div className="flex items-center justify-center gap-2">
              <LuMapPin className="text-primary-500" />
              <span>Oxford OX1 2JD, United Kingdom</span>
            </div>
          </div>
          <div className="p-4 rounded bg-white text-center shadow">
            <span className="mx-auto text-text-900">Grenfall Campus</span>
            <div className="flex items-center justify-center gap-2">
              <LuMapPin className="text-primary-500" />
              <span>Oxford OX1 2JD, United Kingdom</span>
            </div>
          </div>
          <div className="p-4 rounded bg-white text-center shadow">
            <span className="mx-auto text-text-900">Grenfall Campus</span>
            <div className="flex items-center justify-center gap-2">
              <LuMapPin className="text-primary-500" />
              <span>Oxford OX1 2JD, United Kingdom</span>
            </div>
          </div>
=======
import {LuMapPin} from "react-icons/lu";

// eslint-disable-next-line react/prop-types
const Campus = ({ campuses }) => {
  return (
    <section className="lg:pb-24 py-14" id="campuses">
      <div className="container mx-auto">
        <h3 className="title text-3xl mb-7">Campus</h3>
        <div className="flex flex-wrap items-center gap-7">
          {campuses?.map((x, i) => (
            <div key={i} className="p-4 rounded bg-white text-center shadow">
              <span className="mx-auto text-text-900">{x?.name}</span>
              <div className="flex items-center justify-center gap-2">
                <LuMapPin className="text-primary-500" />
                <span>{x?.location}</span>
              </div>
            </div>
          ))}
>>>>>>> update-project/main
        </div>
      </div>
    </section>
  );
};

export default Campus;
