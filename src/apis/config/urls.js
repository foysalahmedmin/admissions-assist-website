/*
 * Copyright (c) 2023-2024. This product is copyright by Rian
 */

let current =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5021"
    : "https://cp.admissionsassist.com";
export const urls = {
  mainURL: `${current}`,
  user_photos: `${current}/uploads/user_photos`,
  country: `${current}/uploads/utils/country`,
  university_logo: `${current}/uploads/university/logos`,
  university_cover: `${current}/uploads/university/covers`,
  scholarship: `${current}/uploads/university/scholarship`,
  subject: `${current}/uploads/subject`,
  submission: `${current}/uploads/submission`,
  student: `${current}/uploads/student/photo`,
  message: `${current}/uploads/message`,
  education: `${current}/uploads/student/education`,
  experience: `${current}/uploads/student/experience`,
  ielts: `${current}/uploads/student/ielts`,
  blog: `${current}/uploads/blog`,
};
