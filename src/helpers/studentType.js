/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import axios from "axios";

export const studentType = async () => {
  const response = await axios.get("https://geolocation-db.com/json/");
  if (response?.data?.country_name === "United Kingdom") {
    return "local";
  } else {
    return "international";
  }
};
