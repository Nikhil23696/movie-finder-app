import { Movie } from "../models/movieModel.js";


// add movie
export const addNewMovie = async (req, res) => {
    try {
        const { name, genres, industry, language, status, duration } = req.body;
        if (!name || !genres || !industry || !language || !status || !duration) {
            return res.status(404).json({
                message: "All inputs are required"
            })
        }
        const newMovie = await Movie.create({
            name,
            genres,
            industry,
            language,
            status,
            duration
        })
        return res.status(201).json({
            success: true,
            message: "Movie added",
            newMovie
        })
    } catch (error) {
        console.log(error)
    }
}
// get movie
export const getMovie = async (req, res) => {
    const search = req.query.search || ""
    const genres = req.query.genres || ""
    const status = req.query.status || ""
    const sort = req.query.sort || ""
    const page = req.query.page || 1
    const ITEM_PER_PAGE = 3;

    const query = {}

    if (search) {
      query.name = { $regex: search, $options: "i" }
    }
    
    if (genres && genres !== "All") {
      query.genres = genres
    }
    
    if (status && status !== "All") {
      query.status = status
    }
    
    try {
        console.log("search",req.query.search)
        const skip = (page - 1)*ITEM_PER_PAGE
        const count = await Movie.countDocuments(query)

        const movie = await Movie.find(query)
        .sort({ dateCreated: sort === "new" ? -1 : 1, _id: 1 }) // use _id as tiebreaker
        .limit(ITEM_PER_PAGE)
        .skip(skip)

        const pageCount = Math.ceil(count/ITEM_PER_PAGE);

        res.status(200).json({
            success:true,
            Pagination:{count, pageCount},
            movie
        })
    } catch (error) {
        console.log(error)
    }
}