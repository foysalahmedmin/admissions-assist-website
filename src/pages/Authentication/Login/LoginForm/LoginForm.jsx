import Button from "@/components/Buttons/Button";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";

const LoginForm = () => {
  return (
    <form action="">
      <div className="mb-7">
        <div className="px-4 flex items-center gap-2 text-placeholder border rounded-xl focus-within:text-text focus-within:border-text mb-4">
          <label htmlFor="email">
            <AiOutlineMail className="text-2xl" />
          </label>
          <input
            className="py-4 w-full bg-transparent outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="Email address/Username"
            required
          />
        </div>
        <div className="px-4 flex items-center gap-2 text-placeholder border rounded-xl focus-within:text-text focus-within:border-text">
          <label htmlFor="password">
            <AiOutlineLock className="text-2xl" />
          </label>
          <input
            className="py-4 w-full bg-transparent outline-none"
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
          Keep me logged in
        </label>
      </div>
      <div>
        <Button
          type={"submit"}
          className={"mx-auto w-full"}
          text={"Login"}
          icon={<span className="material-icons-outlined">trending_flat</span>}
        />
      </div>
    </form>
  );
};

export default LoginForm;
