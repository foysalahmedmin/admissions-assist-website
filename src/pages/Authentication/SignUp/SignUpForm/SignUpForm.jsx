import Button from "@/components/Buttons/Button";
import { LuLock, LuMail, LuUser2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const SignUpForm = ({ setStep }) => {
  return (
    <form action="" onSubmit={() => setStep(1)}>
      <div className="mb-7">
        <div className="px-4 flex items-center gap-2 text-placeholder border rounded-xl focus-within:text-text focus-within:border-text mb-4">
          <label htmlFor="username">
            <LuUser2 className="text-2xl" />
          </label>
          <input
            className="py-3 w-full bg-transparent outline-none"
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
          />
        </div>
        <div className="px-4 flex items-center gap-2 text-placeholder border rounded-xl focus-within:text-text focus-within:border-text mb-4">
          <label htmlFor="email">
            <LuMail className="text-2xl" />
          </label>
          <input
            className="py-3 w-full bg-transparent outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            required
          />
        </div>
        <div className="px-4 flex items-center gap-2 text-placeholder border rounded-xl focus-within:text-text focus-within:border-text">
          <label htmlFor="password">
            <LuLock className="text-2xl" />
          </label>
          <input
            className="py-3 w-full bg-transparent outline-none"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
      </div>
      <div className="flex items-center gap-2 mb-12">
        <input
          className="h-4 w-4 cursor-pointer"
          type="checkbox"
          name="keep_login"
          id="keep_login"
        />
        <label className="cursor-pointer" htmlFor="keep_login">
          I agree to Edubids{" "}
          <Link
            to={"terms_and_conditions"}
            className="text-secondary underline"
          >
            Terms and Conditions
          </Link>
        </label>
      </div>
      <div>
        <Button
          type={"submit"}
          className={"mx-auto w-full"}
          text={"Create Account"}
          icon={<span className="material-icons-outlined">trending_flat</span>}
        />
      </div>
    </form>
  );
};

export default SignUpForm;
