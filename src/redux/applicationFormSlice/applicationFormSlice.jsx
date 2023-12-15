import { createSlice } from "@reduxjs/toolkit";

export const applicationFormSlice = createSlice({
  name: "application_form",
  initialState: {
    user_name: "",
    email: "",
    password: "",
    personal: {
      first_name: "",
      last_name: "",
      dob: "",
      gender: "",
      heard_us: "",
      agent: "",
    },
    residency: {
      address: "",
      phone: "",
    },
    nationality: {
      birth_country: "",
      is_birth_place_same: false,
      birth_address: "",
      nationality: "",
    },
    english_language: {
      platform: "",
      score: 0,
      exam_date: "",
      center: "",
      certificate: null,
    },
    finance: {
      source_of_fund: "",
    },
    education: [
      {
        degree: "",
        body: "",
        institute: "",
        passing_year: 0,
        certificate: null,
        grade: "",
      },
    ],
    experience: [
      {
        title: "",
        company: "",
        working_from: "",
        working_to: "",
        stillWorking: false,
        certificate: null,
      },
    ],
  },
  reducers: {
    SetUserName: (state, action) => {
      state.user_name = action.payload;
    },
    SetEmail: (state, action) => {
      state.email = action.payload;
    },
    SetPassword: (state, action) => {
      state.password = action.payload;
    },
    SetFirstName: (state, action) => {
      state.personal.first_name = action.payload;
    },
    SetLastName: (state, action) => {
      state.personal.last_name = action.payload;
    },
    SetDob: (state, action) => {
      state.personal.dob = action.payload;
    },
    SetGender: (state, action) => {
      state.personal.gender = action.payload;
    },
    SetHeardUs: (state, action) => {
      state.personal.heard_us = action.payload;
    },
    SetAgent: (state, action) => {
      state.personal.agent = action.payload;
    },
    SetAddress: (state, action) => {
      state.residency.address = action.payload;
    },
    SetPhone: (state, action) => {
      state.residency.phone = action.payload;
    },
    SetBirthCountry: (state, action) => {
      state.nationality.birth_country = action.payload;
    },
    SetIsBirthPlaceSame: (state, action) => {
      state.nationality.is_birth_place_same = action.payload;
    },
    SetBirthAddress: (state, action) => {
      state.nationality.birth_address = action.payload;
    },
    SetNationality: (state, action) => {
      state.nationality.nationality = action.payload;
    },
    SetPlatform: (state, action) => {
      state.english_language.platform = action.payload;
    },
    SetScore: (state, action) => {
      state.english_language.score = action.payload;
    },
    SetExamDate: (state, action) => {
      state.english_language.exam_date = action.payload;
    },
    SetCenter: (state, action) => {
      state.english_language.center = action.payload;
    },
    SetCertificate: (state, action) => {
      state.english_language.certificate = action.payload;
    },
    SetSourceFund: (state, action) => {
      state.finance.source_of_fund = action.payload;
    },
    SetEducation: (state, action) => {
      state.education = action.payload;
    },
    SetExperience: (state, action) => {
      state.experience = action.payload;
    },
    SetRegisterReset: (state) => {
      state.user_name = "";
      state.email = "";
      state.password = "";
      state.personal.first_name = "";
      state.personal.last_name = "";
      state.personal.dob = "";
      state.personal.gender = "";
      state.personal.heard_us = "";
      state.personal.agent = "";
      state.residency.address = "";
      state.residency.phone = "";
      state.nationality.birth_country = "";
      state.nationality.is_birth_place_same = false;
      state.nationality.birth_address = "";
      state.nationality.nationality = "";
      state.english_language.platform = "";
      state.english_language.score = 0;
      state.english_language.exam_date = "";
      state.english_language.center = "";
      state.english_language.certificate = null;
      state.finance.source_of_fund = "";
      state.education = [
        {
          degree: "",
          institute: "",
          passing_year: 0,
          certificate: null,
          grade: "",
        },
      ];
      state.experience = [
        {
          title: "",
          company: "",
          working_from: "",
          working_to: "",
          stillWorking: false,
          certificate: null,
        },
      ];
    },
  },
});
export const {
  SetUserName,
  SetEmail,
  SetPassword,
  SetFirstName,
  SetLastName,
  SetDob,
  SetGender,
  SetHeardUs,
  SetAgent,
  SetAddress,
  SetPhone,
  SetBirthCountry,
  SetIsBirthPlaceSame,
  SetBirthAddress,
  SetNationality,
  SetPlatform,
  SetScore,
  SetExamDate,
  SetCenter,
  SetCertificate,
  SetSourceFund,
  SetEducation,
  SetExperience,
  SetRegisterReset,
} = applicationFormSlice.actions;
export default applicationFormSlice.reducer;
