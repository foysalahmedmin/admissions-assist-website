/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import axios from "axios";

const base = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5021"
      : "https://admin.admissionsassist.com",
});

base.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem("aa_website"));
  config.headers.Authorization = token ? `Bearer ${token?.accessToken}` : "";
  return config;
});
export default base;
