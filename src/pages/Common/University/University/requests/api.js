/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import base from "@/apis/config/base.js";

export async function fetchUniversityDetails(id) {
  const response = await base.get(
    `/api/university/get_one_university_website/${id}`
  );
  return response?.data[0];
}

export async function fetchUniversityWiseCourses(id) {
  const response = await base.get(
    `/api/university/get_university_and_courses/${id}`
  );
  return response?.data[0];
}
