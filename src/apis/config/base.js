/*
 * Copyright (c) 2023-2024. This product is copyright by Rian
 */

import axios from "axios";

const base = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "https://cp.admissionsassist.com"
      : "https://cp.admissionsassist.com",
});

base.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem("aa_website"));
  config.headers.Authorization = token ? `Bearer ${token?.accessToken}` : "";
  return config;
});
export default base;
