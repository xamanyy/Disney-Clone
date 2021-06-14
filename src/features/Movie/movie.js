import {createSlice} from '@reduxjs/toolkit';


const initialState = {
 
   recommend: '',
   newDisney: '', 
   original: '',
}

const movieSlice = createSlice({
 name:'movie',
 initialState,
 reducers:{
   setMovie : (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
   }
 }

});

export const {setMovie} = movieSlice.actions;

export const  selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state)=> state.movie.original;

export default movieSlice.reducer;