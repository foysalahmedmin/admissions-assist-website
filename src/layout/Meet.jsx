/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import React from "react";
import {Outlet} from "react-router-dom";
import Header from "@/pages/Header/Header/Header.jsx";
import Footer from "@/pages/Footer/Footer/Footer.jsx";

const Meet = () => {
  return (
    <div>
      <Header navigationClassName={"container mx-auto"} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Meet;
