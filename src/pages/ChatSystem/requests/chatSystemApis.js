/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import base from "@/apis/config/base.js";

export async function fetchMyWeeklyEvents(date, view) {
  const response = await base.get(
    `/api/meeting/get_student_weekly_meetings?date=${date}&view=${view}`
  );
  return response?.data;
}
