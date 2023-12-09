/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import base from "@/apis/config/base.js";

export async function StudentRegister({
  user_name,
  email,
  password,
  personal,
  residency,
  nationality,
  english_language,
  finance,
  education,
  experience,
  ielts_certificate,
  experience_certificate,
  education_certificate,
}) {
  const payload = new FormData();

  payload.append("user_name", user_name);
  payload.append("email", email);
  payload.append("password", password);
  payload.append("personal", JSON.stringify(personal));
  payload.append("residency", JSON.stringify(residency));
  payload.append("nationality", JSON.stringify(nationality));
  payload.append("english_language", JSON.stringify(english_language));
  payload.append("finance", JSON.stringify(finance));
  payload.append("education", JSON.stringify(education));
  payload.append("experience", JSON.stringify(experience));
  payload.append("ielts_certificate", ielts_certificate);
  experience_certificate?.forEach((file) => {
    payload.append(`experience_certificate`, file);
  });
  education_certificate?.forEach((file) => {
    payload.append(`education_certificate`, file);
  });

  const response = await base.post(`/api/student/student_register`, payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response?.data;
}

export async function fetchAgents(role) {
  const response = await base.get(`/api/auth/get_filtered_users?role=${role}`);
  return response?.data;
}

export async function fetchOneCity(update_id) {
  const response = await base.get(`/api/utils/city/get_one_city/${update_id}`);
  return response?.data[0];
}

export async function UpdateNewCity({ update_id, data }) {
  const payload = {
    country: data?.country,
    name: data?.name,
  };

  const response = await base.put(
    `/api/utils/city/update_city/${update_id}`,
    payload,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response?.data;
}

export async function removeOneCity(id) {
  const response = await base.delete(`/api/utils/city/delete_city/${id}`);
  return response?.data;
}

export async function fetchFilteredCities(country) {
  const response = await base.get(
    `/api/utils/city/get_filtered_cities?country=${country}`
  );
  return response?.data;
}

export async function StudentSignIn({ email, password }) {
  const payload = {
    email,
    password,
  };
  const response = await base.post(`/api/student/student_login`, payload, {
    headers: { "Content-Type": "application/json" },
  });
  return response?.data;
}
