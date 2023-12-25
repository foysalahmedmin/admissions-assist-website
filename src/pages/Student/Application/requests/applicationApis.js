/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import base from "@/apis/config/base.js";

export async function fetchStudentCouncilor() {
  const response = await base.get(`/api/student/get_student_councilor`);
  return response?.data[0];
}

export async function fetchAppliedUniversities() {
  const response = await base.get(`/api/application/get_applied_universities`);
  return response?.data;
}

export async function fetchApplicationProcesses(university, application) {
  const response = await base.get(
    `/api/process/get_student_processes?university=${university}&application=${application}`
  );
  return response?.data;
}

export async function fetchOneProcesses(id) {
  const response = await base.get(`/api/process/get_one_student_process/${id}`);
  return response?.data[0];
}

export async function submitAProcess({
  application,
  processes,
  sl,
  text,
  attachment,
  date,
  lists,
}) {
  const payload = {
    application,
    processes,
    ...(lists?.length > 0 && { is_list: true }),
    sl,
    ...(text && { text }),
    ...(attachment && { attachment }),
    ...(date && { date }),
    ...(lists?.length > 0 ? { lists: lists } : { lists: [] }),
  };

  const response = await base.post(`/api/submission/add_submission`, payload, {
    headers: { "Content-Type": "application/json" },
  });
  return response?.data;
}

export async function fetchStepStatus(application, processes, sl) {
  const response = await base.get(
    `/api/submission/get_step_status?application=${application}&processes=${processes}&sl=${sl}`
  );
  return response?.data;
}

export async function updateASubmission({
  id,
  application,
  processes,
  sl,
  text,
  attachment,
  attachment_new,
  date,
  lists,
}) {
  const payload = {
    application,
    processes,
    ...(lists?.length > 0 && { is_list: true }),
    sl,
    ...(text && { text }),
    ...(attachment && { attachment }),
    ...(attachment_new && { attachment_new }),
    ...(date && { date }),
    ...(lists?.length > 0 ? { lists: lists } : { lists: [] }),
  };

  const response = await base.put(
    `/api/submission/update_submission/${id}`,
    payload,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response?.data;
}

export async function fetchApplicationPercentage(id) {
  const response = await base.get(
    `/api/application/get_applied_percentage/${id}`
  );
  return response?.data[0];
}
