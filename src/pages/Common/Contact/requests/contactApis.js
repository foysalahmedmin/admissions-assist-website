/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import base from "@/apis/config/base.js";

export async function AddNewContact({
  name,
  email,
  phone,
  category,
  description,
}) {
  const payload = {
    name,
    email,
    phone,
    category,
    description,
  };

  const response = await base.post(`/api/contact/add_contact`, payload, {
    headers: { "Content-Type": "application/json" },
  });
  return response?.data;
}

export async function fetchContactCategories() {
  const response = await base.get(`/api/contact/category/get_all_categories`);
  return response?.data;
}
