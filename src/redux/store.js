import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './toolkit'
export const store = configureStore({
  reducer: counterReducer,
})