import {configureStore , getDefaultMiddleware} from '@reduxjs/toolkit'
import userReducer from '../features/user/Userslice'
import movieReducer from '../features/Movie/movie'

export default configureStore({

  reducer: {
    user: userReducer,
    movie:movieReducer,
  },
  midleware: getDefaultMiddleware({
serializableCheck: false,
  }),

  
})