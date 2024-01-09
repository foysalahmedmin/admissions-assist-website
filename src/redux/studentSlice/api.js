/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import base from "@/apis/config/base.js";

export async function fetchStudentData() {
  const response = await base.get(`/api/student/get_common_info`);
  return response?.data[0];
}
