import logo from "@/assets/images/logo.svg";
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
} from "react-icons/bi";
import { LuMail, LuMapPin, LuSmartphone } from "react-icons/lu";
import { Link } from "react-router-dom";
import BottomFooter from "../BottomFooter/BottomFooter";

const Footer = () => {
  return (
    <footer className="bg-[#2B3D41] text-white">
      <div className="container mx-auto lg:py-24 py-14">
        <div className="h-10 mb-7">
          <img className="h-full" src={logo} alt="" />
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap grid-cols-4 justify-between gap-7 lg:gap-12">
          <div className="w-80">
            <p className="text-text-100 mb-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem a Ipsum has been the industry's standard fu dummy
              text ever since the 1500s.
            </p>
            <div>
              <h3 className="title text-white mb-4">Follow us</h3>
              <div className="flex items-center gap-4">
                <div className="h-7 w-7 rounded border border-primary-500 text-primary-500 flex items-center justify-center cursor-pointer">
                  <BiLogoFacebook className="text-xl" />
                </div>
                <div className="h-7 w-7 rounded border border-primary-500 text-primary-500 flex items-center justify-center cursor-pointer">
                  <BiLogoLinkedin className="text-xl" />
                </div>
                <div className="h-7 w-7 rounded border border-primary-500 text-primary-500 flex items-center justify-center cursor-pointer">
                  <BiLogoInstagramAlt className="text-xl" />
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
                <Link to={"/session_book"}>Book a session</Link>
              </li>
              <li className="text-line">
                <Link to={"/sign_up"}>Create an account</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="title text-white text-2xl mb-7">Categories</h3>
            <ul className="flex flex-col gap-4">
              <li className="text-line">
                <Link to={"/photography"}>Photography</Link>
              </li>
              <li className="text-line">
                <Link to={"/engineering"}>Engineering</Link>
              </li>
              <li className="text-line">
                <Link to={"/development"}>Development</Link>
              </li>
              <li className="text-line">
                <Link to={"/sports"}>Sports</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="title text-white text-2xl mb-7">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li className="text-line flex gap-2 items-center">
                <div className="h-7 w-7 rounded-full border border-primary-500 bg-primary-500 flex items-center justify-center">
                  <LuMail className="font-bold" />
                </div>
                <span>info@edubid.com</span>
              </li>
              <li className="text-line flex gap-2 items-center">
                <div className="h-7 w-7 rounded-full border border-primary-500 bg-primary-500 flex items-center justify-center">
                  <LuSmartphone className="" />
                </div>
                <span>+44 330 3330 232</span>
              </li>
              <li className="text-line flex gap-2 items-center">
                <div className="h-7 w-7 rounded-full border border-primary-500 bg-primary-500 flex items-center justify-center">
                  <LuMapPin className="" />
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
