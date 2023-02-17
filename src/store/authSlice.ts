import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthSate {
  isLogin: boolean
  token: string | undefined
  email: string | undefined
}
const initialState: AuthSate = {
  isLogin: false,
  token: undefined,
  email: undefined,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; email: string }>) => {
      localStorage.setItem("token", action.payload.token)
      localStorage.setItem("email", action.payload.email)
      state.token = action.payload.token
      state.email = action.payload.email
      state.isLogin = true
    },
    logout: (state) => {
      localStorage.removeItem("token")
      state.token = undefined
      state.email = undefined
      state.isLogin = false
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
