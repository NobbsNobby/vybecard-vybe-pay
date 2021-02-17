import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 3,
  amount: "",
  firstName: "",
  lastName: "",
  initials: "",
};

const shareSlice = createSlice({
  name: "share",
  initialState,
  reducers: {
    setStep(state, { payload }) {
      state.step = +payload;
    },
    setAmount(state, { payload }) {
      state.amount = payload;
    },
    setName(state, { payload }) {
      const nameArr = payload.split("_");
      state.firstName = nameArr[0];
      state.lastName = nameArr[1];
      state.initials = nameArr[0].slice(0, 1) + nameArr[1].slice(0, 1);
    },
  },
});

export const { setStep, setAmount, setName } = shareSlice.actions;
export default shareSlice.reducer;
