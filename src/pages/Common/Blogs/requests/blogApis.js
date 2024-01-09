/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import base from "@/apis/config/base.js";

export async function fetchBlogs(page, limit, search) {
  const response = await base.get(
    `/api/blog/get_blogs?page=${page}&limit=${limit}&search=${search}`
  );
  return response?.data[0];
}

export async function fetchLatestBlogs() {
  const response = await base.get(`/api/blog/get_latest_blogs`);
  return response?.data;
}

export async function fetchOneBlog(id) {
  const response = await base.get(`/api/blog/get_one_blog/${id}`);
  return response?.data[0];
}
