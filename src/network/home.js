/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import base from "@/apis/config/base.js";

export async function fetchWebSubjects() {
  const response = await base.get(`/api/subject/get_web_subjects`);
  return response?.data;
}
