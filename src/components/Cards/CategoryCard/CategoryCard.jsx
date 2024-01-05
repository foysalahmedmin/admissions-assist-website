/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import {urls} from "@/apis/config/urls.js";

const CategoryCard = ({ data }) => {
  return (
    <div className="text-center">
      <div className="h-14 w-14 lg:h-24 lg:w-24 mx-auto mb-4 flex items-center justify-center">
        <img
          className="h-16 w-16 object-contain"
          src={`${urls?.icon}/${data?.icon}`}
          alt=""
        />
      </div>
      <div>
        <h1 className=" text-2xl title">{data?.name}</h1>
        <p className="text-lg">{data?.courses} Courses</p>
      </div>
    </div>
  );
};
export default CategoryCard;
