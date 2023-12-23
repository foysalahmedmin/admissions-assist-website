/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import base from "@/apis/config/base.js";

export async function getFilteredUniversitySearch({
  page,
  limit,
  search,
  country,
  city,
  session,
  start_rank,
  end_rank,
}) {
  const payload = {
    page,
    limit,
    ...(search && { search }),
    ...(country?.length > 0 && { country }),
    ...(city?.length > 0 && { city }),
    ...(session && { session }),
    ...(start_rank > 0 && { start_rank }),
    ...(end_rank > 0 && { end_rank }),
  };
  const response = await base.post(
    `/api/university/get_filtered_university`,
    payload,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response?.data[0];
}

export async function getSearchedSubjects({
  page,
  limit,
  search,
  course_types,
  country,
  city,
  session,
  isPoint,
  point,
  experience,
  level_3,
  assessment,
  ielts,
  score,
  start_rank,
  end_rank,
}) {
  const payload = {
    page,
    limit,
    ...(search && { search }),
    ...(course_types?.length > 0 ? { course_types } : { course_types: [] }),
    ...(country?.length > 0 ? { country } : { country: [] }),
    ...(city?.length > 0 ? { city } : { city: [] }),
    ...(session && { session }),
    ...(isPoint && { isPoint }),
    ...(point > 0 && { point }),
    ...(experience && { experience }),
    ...(level_3 && { level_3 }),
    ...(assessment && { assessment }),
    ...(ielts && { ielts }),
    ...(score > 0 && { score }),
    ...(start_rank > 0 && { start_rank }),
    ...(end_rank > 0 && { end_rank }),
  };
  const response = await base.post(
    `/api/requirement/get_searched_subjects`,
    payload,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response?.data[0];
}
