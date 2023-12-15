/*
 * Copyright (c) 2023. This product is copyright by Rian
 */
import base from "@/apis/config/base.js";

export async function fetchFilteredCourses(subject) {
  const response = await base.get(
    `/api/course/get_filtered_course?subject=${subject}`
  );
  return response?.data;
}

export async function fetchSingleRequirement(id) {
  const response = await base.get(`/api/requirement/get_single_details/${id}`);
  return response?.data[0];
}

export async function fetchFilteredRequirement(uId, sId, _id) {
  const response = await base.get(
    `/api/requirement/get_filtered_requirement?university=${uId}&subject=${sId}&course=${_id}`
  );
  return response?.data;
}
