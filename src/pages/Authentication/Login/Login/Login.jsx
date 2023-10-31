import LoginForm from "@/pages/Authentication/Login/LoginForm/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-white rounded-xl w-full lg:w-[30rem] text-center px-7 py-14">
      <h3 className="title text-3xl mb-12">Login</h3>
      <div>
        <LoginForm />
      </div>
      <div className="text-center mt-7">
        <p>
          Don’t have an Account?{" "}
          <Link
            to={"/authentication/sign_up"}
            className="text-secondary-500 font-bold"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
