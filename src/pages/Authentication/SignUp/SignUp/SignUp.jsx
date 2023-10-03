import { Link } from "react-router-dom";
import SignUpForm from "@/pages/Authentication/SignUp/SignUpForm/SignUpForm";
import { useState } from "react";
import SignUpInfoForm from "../SignUpInfoForm/SignUpInfoForm";

const SignUp = () => {
  const [step, setStep] = useState(1);
  return (
    <>
      {step === 0 && (
        <div className="bg-white rounded-xl w-full lg:w-[30rem] text-center px-7 py-14">
          <h3 className="title text-3xl mb-12">Create Account</h3>
          <div>
            <SignUpForm setStep={setStep} />
          </div>
          <div className="text-center mt-7">
            <p>
              Already have an account?{" "}
              <Link
                to={"/authentication/login"}
                className="text-secondary font-bold"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="bg-white rounded-xl w-full lg:w-[40rem] text-center overflow-hidden">
          <SignUpInfoForm />
        </div>
      )}
    </>
  );
};

export default SignUp;
