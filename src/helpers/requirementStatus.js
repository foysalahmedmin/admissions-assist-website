/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

export const isLocalStudentQualified = (isNotRequired, local, student) => {
  let isExperienceNeed = local?.experience;
  let isLevel3Need = local?.level_3;
  let isBothNeed = local?.experience && local?.level_3;
  if (isNotRequired) {
    return true;
  }
  if (isExperienceNeed && !isLevel3Need && !isBothNeed) {
    return isExperienceNeed === student?.experience;
  } else if (!isExperienceNeed && isLevel3Need && !isBothNeed) {
    return isLevel3Need === student?.level_3;
  } else if (!isExperienceNeed && !isLevel3Need && isBothNeed) {
    return isBothNeed === (student?.experience && student?.level_3);
  }
};

export const isInternationalStudentQualified = (
  isNotRequired,
  international,
  type,
  student
) => {
  if (isNotRequired) {
    return true;
  }
  if (type === "ielts") {
    return international?.ielts >= student?.ielts;
  } else if (type === "point") {
    return international?.point >= student?.points;
  } else if (type === "ielts_and_point") {
    return (
      international?.ielts >= student?.ielts &&
      international?.point >= student?.points
    );
  } else if (type === "ielts_or_point") {
    return (
      international?.ielts >= student?.ielts ||
      international?.point >= student?.points
    );
  } else if (type === "ielts_and_assessment") {
    return (
      international?.ielts >= student?.ielts &&
      international?.assessment === student?.assessment
    );
  } else if (type === "ielts_or_assessment") {
    return (
      international?.ielts >= student?.ielts ||
      international?.assessment === student?.assessment
    );
  } else if (type === "point_and_assessment") {
    return (
      international?.point >= student?.points &&
      international?.assessment === student?.assessment
    );
  } else if (type === "point_or_assessment") {
    return (
      international?.point >= student?.points ||
      international?.assessment === student?.assessment
    );
  } else if (type === "ielts_or_point_or_assessment") {
    return (
      international?.point >= student?.points ||
      international?.assessment === student?.assessment ||
      international?.ielts >= student?.ielts
    );
  } else if (type === "ielts_and_point_and_assessment") {
    return (
      international?.point >= student?.points &&
      international?.assessment === student?.assessment &&
      international?.ielts >= student?.ielts
    );
  } else if (type === "assessment") {
    return international?.assessment === student?.assessment;
  }
};
