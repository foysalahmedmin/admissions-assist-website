/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import base from "@/apis/config/base.js";

export async function updateStudentPhoto({ photo }) {
  const payload = new FormData();
  payload.append("photo", photo);

  const response = await base.post(
    `/api/student/update_student_photo`,
    payload,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  return response?.data;
}

export async function fetchStepGuide() {
  const response = await base.get(`/api/application/get_profile_guide_steps`);
  return response?.data;
}

export async function createStudentMeeting({
  title,
  start_date,
  end_date,
  location,
  isOnline,
  description,
}) {
  const payload = {
    title,
    start_date,
    end_date,
    ...(location && { location }),
    ...(isOnline && { isOnline: isOnline }),
    ...(description && { description }),
  };

  const response = await base.post(
    `/api/meeting/add_student_meeting`,
    payload,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response?.data;
}
