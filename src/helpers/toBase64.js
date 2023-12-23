/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject("No file provided");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const base64 = reader.result;
      resolve(base64);
    };

    reader.onerror = () => {
      reject("Error reading the file");
    };

    reader.readAsDataURL(file);
  });
};
