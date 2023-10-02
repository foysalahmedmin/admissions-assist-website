import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
import logo from "@/assets/images/logo.svg";
import LoginForm from "../LoginForm/LoginForm";

const Login = () => {
  return (
    <main>
      <BackgroundLayer bg_position={"bg-top"}>
        <div className="container mx-auto">
          <div className="min-h-screen-less-20 lg:py-24 py-14 flex items-center justify-center">
            <div>
              <div className="h-14 text-center mb-12">
                <img
                  className="h-full object-contain object-center mx-auto"
                  src={logo}
                  alt=""
                />
              </div>
              <div className="bg-white rounded-xl w-full lg:w-[28rem] px-7 py-14">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </BackgroundLayer>
    </main>
  );
};

export default Login;
