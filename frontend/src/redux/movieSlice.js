import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name: "movie",
    initialState:{
        newMovie:null,
        allMovies:null,
    },
    reducers:{
        addNewMovie:(state,action)=>{
            state.newMovie = action.payload
        },
        getAllMovies:(state,action)=>{
            state.allMovies = action.payload
        }
    }
})
export const {addNewMovie, getAllMovies} = movieSlice.actions;
export default movieSlice.reducer