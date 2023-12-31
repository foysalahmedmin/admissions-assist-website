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

export async function fetchMe() {
  const response = await base.get(`/api/student/get_me`);
  return response?.data[0];
}

export async function fetchStudentChats() {
  const response = await base.get(`/api/chat/get_student_chats`);
  return response?.data;
}

export async function fetchMessages(chat) {
  const response = await base.get(
    `/api/message/get_councilor_messages?chat=${chat}`
  );
  return response?.data;
}

export async function createMessage({ content, chat, file }) {
  const payload = new FormData();
  payload.append("content", content);
  payload.append("chat", chat);
  file && payload.append("file", file);

  const response = await base.post(`/api/message/send_message`, payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response?.data;
}
