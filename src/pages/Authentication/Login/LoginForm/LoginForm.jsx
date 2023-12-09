import Button from "@/components/Buttons/Button";
import { LuLock, LuMail } from "react-icons/lu";
import { useMutation } from "react-query";
import { StudentSignIn } from "@/pages/Authentication/requests/auth.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const { isLoading, mutateAsync } = useMutation({
    mutationFn: StudentSignIn,
  });

  const handleLogin = async () => {
    try {
      const response = await mutateAsync({ email, password });
      toast.success("Login Successful");
      localStorage.setItem("aa_website", JSON.stringify(response));
      navigation("/profile");
    } catch (err) {
      toast.error(err?.response?.data?.error?.message);
    }
  };
  return (
    <form action="">
      <div className="mb-7">
        <div className="px-4 flex items-center gap-2 text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500 mb-4">
          <label htmlFor="email">
            <LuMail className="text-2xl" />
          </label>
          <input
            className="py-3 w-full bg-transparent outline-none"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            placeholder="Email address/Username"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          disabled={isLoading}
          isLoading={isLoading}
          onClick={handleLogin}
          className={"mx-auto w-full"}
          text={"Login"}
          icon={<span className="material-icons-outlined">trending_flat</span>}
        />
      </div>
    </form>
  );
};

export default LoginForm;
