/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import base from "@/apis/config/base.js";

export async function AddSubscriptions({ email }) {
  const payload = {
    email,
  };

  const response = await base.post(
    `/api/subscription/add_subscription`,
    payload,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response?.data;
}
