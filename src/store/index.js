import { configureStore } from '@reduxjs/toolkit'
import shareReducer from './reducers/shareReducer'

export const store = configureStore({
  reducer: shareReducer
})
