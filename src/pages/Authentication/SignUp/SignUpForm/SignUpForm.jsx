import Button from "@/components/Buttons/Button";
<<<<<<< HEAD
import { LuLock, LuMail, LuUser2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const SignUpForm = ({ setStep }) => {
=======
import {LuLock, LuMail, LuUser2} from "react-icons/lu";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SetEmail, SetPassword, SetUserName,} from "@/redux/applicationFormSlice/applicationFormSlice.jsx";

// eslint-disable-next-line react/prop-types
const SignUpForm = ({ setStep }) => {
  const dispatch = useDispatch();
  const { user_name, email, password } = useSelector(
    (state) => state.application_form
  );
>>>>>>> update-project/main
  return (
    <form action="" onSubmit={() => setStep(1)}>
      <div className="mb-7">
        <div className="px-4 flex items-center gap-2 text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500 mb-4">
          <label htmlFor="username">
            <LuUser2 className="text-2xl" />
          </label>
          <input
            className="py-3 w-full bg-transparent outline-none"
            type="text"
<<<<<<< HEAD
=======
            value={user_name}
            onChange={(e) => dispatch(SetUserName(e.target.value))}
>>>>>>> update-project/main
            name="username"
            id="username"
            placeholder="Username"
            required
          />
        </div>
        <div className="px-4 flex items-center gap-2 text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500 mb-4">
          <label htmlFor="email">
            <LuMail className="text-2xl" />
          </label>
          <input
            className="py-3 w-full bg-transparent outline-none"
            type="email"
<<<<<<< HEAD
=======
            value={email}
            onChange={(e) => dispatch(SetEmail(e.target.value))}
>>>>>>> update-project/main
            name="email"
            id="email"
            placeholder="Email address"
            required
          />
        </div>
        <div className="px-4 flex items-center gap-2 text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500">
          <label htmlFor="password">
            <LuLock className="text-2xl" />
          </label>
          <input
            className="py-3 w-full bg-transparent outline-none"
            type="password"
            name="password"
<<<<<<< HEAD
=======
            value={password}
            onChange={(e) => dispatch(SetPassword(e.target.value))}
>>>>>>> update-project/main
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
            className="text-secondary-500 underline"
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
