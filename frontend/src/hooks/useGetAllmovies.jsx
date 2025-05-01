import { useEffect } from "react"
import {useDispatch} from 'react-redux'
import axios from 'axios'
import { getAllMovies } from "../redux/movieSlice.js"

const useGetAlllMovies = (search, genres, status, sort, page, setPageCount)=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        const fetchMovies = async()=>{
            try {
                const res = await axios.get(`http://localhost:3000/api/v1/movies/all?search=${search}&genres=${genres}&status=${status}&sort=${sort}&page=${page}`, {withCredentials:true})
                   if(res.data.success)(
                    setPageCount(res.data.Pagination.pageCount)
                   )
                dispatch(getAllMovies(res.data.movie))
            } catch (error) {
                console.log(error)
            }
        }
        fetchMovies()
    },[dispatch, search, genres, status, sort, page, setPageCount])
}
export default useGetAlllMovies