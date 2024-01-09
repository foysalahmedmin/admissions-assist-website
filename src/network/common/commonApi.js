/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import base from "@/apis/config/base.js";

export async function fetchFilteredCountries() {
  const response = await base.get(`/api/utils/country/get_all_country`);
  return response?.data;
}

export async function fetchSearchFilteredCountries() {
  const response = await base.get(`/api/utils/country/get_filtered_countries`);
  return response?.data;
}

export async function fetchSearchFilteredSessions() {
  const response = await base.get(
    `/api/utils/session/get_search_filtered_sessions?year=${new Date().getFullYear()}`
  );
  return response?.data;
}

export async function fetchCourseTypes() {
  const response = await base.get(
    `/api/utils/course_type/get_filtered_course_types`
  );
  return response?.data;
}

export async function fetchFilteredCities(country) {
  const response = await base.get(
    `/api/utils/city/get_filtered_cities?country=${country}`
  );
  return response?.data;
}

export async function fetchGroupedDegrees() {
  const response = await base.get(`/api/degree/get_grouped_degrees`);
  return response?.data;
}

export async function fetchFilteredGrades() {
  const response = await base.get(`/api/grade/get_filtered_grades`);
  return response?.data;
}

export async function fetchTopUniversities() {
  const response = await base.get(`/api/university/get_top_universities`);
  return response?.data;
}
