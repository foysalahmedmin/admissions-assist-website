import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";

const Login = () => {
  return (
    <div className="bg-white rounded-xl w-full lg:w-[28rem] text-center px-7 py-14">
      <h3 className="title text-2xl mb-12">Login</h3>
      <LoginForm />
      <div className="text-center mt-7">
        <p>
          Don’t have an Account?{" "}
          <Link to={"/sign_up"} className="text-secondary font-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
