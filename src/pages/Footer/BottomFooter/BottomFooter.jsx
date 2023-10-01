import { Link } from "react-router-dom";

const BottomFooter = () => {
  return (
    <div className="bg-[#283639] py-7">
      <div className="container">
        <div className="flex items-center justify-between">
          <strong>
            © 2023 Edubid. All Rights Reserved. Design By Tahmidul Hassan
          </strong>
          <div className="flex items-center gap-2">
            <Link to={"terms_and_conditions"}>Terms and conditions</Link>/
            <Link to={"privacy_and_cookies"}>Privacy and cookies</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
