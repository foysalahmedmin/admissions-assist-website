/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import React from "react";

const ComponentLoading = () => {
  return (
    <div className="flex items-center justify-center">
      <p className="text-5xl font-thin">L</p>
      <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-secondary-500"></div>
      <p className="text-5xl font-thin">ading...</p>
    </div>
  );
};

export default ComponentLoading;
