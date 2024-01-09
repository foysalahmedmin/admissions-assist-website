<<<<<<< HEAD
=======
/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

>>>>>>> update-project/main
import { Link } from "react-router-dom";

const BottomFooter = () => {
  return (
    <div className="bg-[#283639] py-7">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4">
          <strong className="text-center lg:text-left">
<<<<<<< HEAD
            © 2023 Edubid. All Rights Reserved. Design By Tahmidul Hassan
          </strong>
          <div className="flex items-center gap-2">
            <Link to={"terms_and_conditions"}>Terms and conditions</Link>/
            <Link to={"privacy_and_cookies"}>Privacy and cookies</Link>
=======
            © 2023 Admissions Assist. All Rights Reserved.
          </strong>
          <div className="flex items-center gap-2">
            <Link to={"/privacy_policy"}>Terms and conditions</Link>/
            <Link to={"/privacy_policy"}>Privacy and cookies</Link>
>>>>>>> update-project/main
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
