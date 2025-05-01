import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    genres: {
        type: String,
        required: true,
    },
    industry: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    duration:{
        type: String,
        required: true
    },
    dateCreated: Date
})
export const Movie = mongoose.model("Movie", movieSchema)