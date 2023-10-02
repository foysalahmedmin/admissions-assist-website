import logo from "@/assets/images/logo.svg";
import BottomFooter from "../BottomFooter/BottomFooter";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineEnvironment,
  AiOutlineMail,
  AiOutlineMobile,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2B3D41] text-white">
      <div className="container mx-auto lg:py-24 py-14">
        <div className="h-10 mb-7">
          <img className="h-full" src={logo} alt="" />
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap grid-cols-4 justify-between gap-7 lg:gap-12">
          <div className="w-80">
            <p className="text-placeholder mb-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem a Ipsum has been the industry's standard fu dummy
              text ever since the 1500s.
            </p>
            <div>
              <h3 className="title text-white mb-4">Follow us</h3>
              <div className="flex items-center gap-4">
                <div className="h-7 w-7 rounded border border-primary text-primary flex items-center justify-center">
                  <AiFillFacebook className="text-2xl" />
                </div>
                <div className="h-7 w-7 rounded border border-primary text-primary flex items-center justify-center">
                  <AiFillLinkedin className="text-2xl" />
                </div>
                <div className="h-7 w-7 rounded border border-primary text-primary flex items-center justify-center">
                  <AiFillInstagram className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="title text-white text-2xl mb-7">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <li className="text-line">
                <Link to={"/contact"}>Contacts</Link>
              </li>
              <li className="text-line">
                <Link to={"/blogs"}>blogs</Link>
              </li>
              <li className="text-line">
                <Link to={"/support"}>Support</Link>
              </li>
              <li className="text-line">
                <Link to={"/sign_up"}>Create an account</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="title text-white text-2xl mb-7">About us</h3>
            <ul className="flex flex-col gap-4">
              <li className="text-line">
                <Link to={"/career"}>Career</Link>
              </li>
              <li className="text-line">
                <Link to={"/login"}>Join our team</Link>
              </li>
              <li className="text-line">
                <Link to={"/businesses"}>Businesses</Link>
              </li>
              <li className="text-line">
                <Link to={"/employers"}>Employers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="title text-white text-2xl mb-7">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li className="text-line flex gap-2 items-center">
                <div className="h-7 w-7 rounded-full border border-primary bg-primary flex items-center justify-center">
                  <AiOutlineMail className="" />
                </div>
                <span>info@edubid.com</span>
              </li>
              <li className="text-line flex gap-2 items-center">
                <div className="h-7 w-7 rounded-full border border-primary bg-primary flex items-center justify-center">
                  <AiOutlineMobile className="" />
                </div>
                <span>+44 330 3330 232</span>
              </li>
              <li className="text-line flex gap-2 items-center">
                <div className="h-7 w-7 rounded-full border border-primary bg-primary flex items-center justify-center">
                  <AiOutlineEnvironment className="" />
                </div>
                <span>345 Street 2, Bucharest</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <BottomFooter />
    </footer>
  );
};

export default Footer;
