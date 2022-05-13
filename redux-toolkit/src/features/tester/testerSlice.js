import { createSlice } from "@reduxjs/toolkit"

export const testerSlice = createSlice({
  name: 'tester',
  initialState: {
    value: 'Hello Redux'
  },
  reducers: {
    changeHello: (state) => {
      state.value = 'Redux state changed'
    }
  }
})

export const { changeHello } = testerSlice.actions

export default testerSlice.reducer 
