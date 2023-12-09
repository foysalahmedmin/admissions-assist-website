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
