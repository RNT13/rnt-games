import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
  loading: boolean
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true
      state.user = action.payload
    },
    logout: state => {
      state.isAuthenticated = false
      state.user = null
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
