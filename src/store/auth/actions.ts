import { createAsyncThunk } from '@reduxjs/toolkit'

import { axiosInstance, showNotification, EToastVersions } from 'libraries'

export const signIn = createAsyncThunk('auth/login', async (body: any, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post('/auth/login', body)

    showNotification(EToastVersions.success, data.message)

    return data.data.user
  } catch (error: any) {
    showNotification(EToastVersions.error, error.response.data.message)

    return rejectWithValue(error.response.data)
  }
})
