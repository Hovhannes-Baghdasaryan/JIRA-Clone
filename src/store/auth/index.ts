import { createSlice } from '@reduxjs/toolkit'

import { signIn } from './actions'
import { IAuthInitialState } from './types'

export const initialState: IAuthInitialState = {
  signIn: {
    data: null,
    error: null,
    loading: false,
  },
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signIn.pending, state => {
      state.signIn.loading = true
      state.signIn.error = null
    })

    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.signIn.loading = false
      state.signIn.error = null
      state.signIn.data = payload
    })

    builder.addCase(signIn.rejected, (state, action) => {
      state.signIn.loading = false
      state.signIn.error = action.payload as null
    })
  },
})

export const { name, actions } = authSlice

const authReducer = authSlice.reducer

export default authReducer
