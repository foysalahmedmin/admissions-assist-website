import Button from "@/components/Buttons/Button";
import { Link } from "react-router-dom";

const Step_ContactInformation = ({ setStepStatusAndSetTab }) => {
  const handleSave = (e) => {
    e.preventDefault();
    setStepStatusAndSetTab();
  };
  return (
    <div>
      <form>
        <div>
          <h1 className="title text-2xl">Contact information</h1>
        </div>
        <hr className="mt-4 mb-7" />
        <div className="grid lg:grid-cols-2 gap-7 mb-7">
          <div>
            <label htmlFor="name" className="block mb-4">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
                Your Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-4">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
                Email Address
              </span>
            </label>
            <input
              type="email"
              name="email"
              className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
              id="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block mb-4">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
                Your Address
              </span>
            </label>
            <input
              type="text"
              name="address"
              className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
              id="address"
              placeholder="Enter your address"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-4">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
                Phone Number
              </span>
            </label>
            <input
              type="tel"
              name="phone"
              className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
              id="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label htmlFor="date_of_birth" className="block mb-4">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
                Date of Birth (s)
              </span>
            </label>
            <input
              type="date"
              name="date_of_birth"
              className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
              id="date_of_birth"
              required
            />
          </div>
        </div>
        <div>
          <Button
            onClick={handleSave}
            type={"submit"}
            text={"Save"}
            icon={
              <span className="material-icons-outlined">trending_flat</span>
            }
          />
        </div>
        <hr className="my-7" />
        <div>
          <h1 className="title text-2xl mb-4">Contact information</h1>
          <ul className="flex flex-col gap-2 text-title">
            <li>
              <Link className="underline">
                Can I save my application and return to complete it later?
              </Link>
            </li>
            <li>
              <Link className="underline">How do I upload my documents?</Link>
            </li>
            <li>
              <Link className="underline">
                My documents are too large to upload. How do I reduce the file
                size?
              </Link>
            </li>
          </ul>
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default Step_ContactInformation;
