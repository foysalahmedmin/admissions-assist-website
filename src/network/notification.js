/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import base from "@/apis/config/base.js";

export async function fetchStudentPending() {
  const response = await base.get(
    `/api/notification/get_student_pending_notifications`
  );
  return response?.data;
}

export async function fetchNotificationCount() {
  const response = await base.get(`/api/notification/get_notification_count`);
  return response?.data;
}

export async function markReadPending() {
  const response = await base.get(`/api/notification/mark_seen_all_pending`);
  return response?.data;
}
