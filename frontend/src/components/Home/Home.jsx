import React, { useState } from 'react'
import './Home.css'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import Table from '../Table/Table';
import useGetAlllMovies from '../../hooks/useGetAllmovies';
import { FaSortDown, FaSortUp } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconButton } from '@mui/material'

const Home = () => {
    const [search, setSearch] = useState("");
    const [genres, setGenres] = useState("All");
    const [status, setStatus] = useState("All");
    const [sort, setSort] = useState("new");
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    useGetAlllMovies(search, genres, status, sort, page, setPageCount )

    const handlePrevious = ()=>{
        setPage(()=>{
            if(page === 1) return page
            return page - 1
        })
    }

    const handleNext = ()=>{
        setPage(()=>{
            if(page === pageCount) return page
            return page + 1
        })
    }
    return (
        <>
            <div className="home">
                <div className="search">
                    <input
                        type="text"
                        placeholder='Search by name'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type='submit'>Search</button>
                </div>
                <div className="homeone">
                    <button>Add New Movie</button>
                    <div className="filterbygenre">
                        <h2>Filter By Genre</h2>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            // value={genres}
                            // onChange={(e)=> setGenres(e.target.value)}
                            >
                                <FormControlLabel value="All" control={<Radio />} label="All" onChange={(e) => setGenres(e.target.value)} />
                                <FormControlLabel value="Action" control={<Radio />} label="Action" onChange={(e) => setGenres(e.target.value)} />
                                <FormControlLabel value="Romance" control={<Radio />} label="Romance" onChange={(e) => setGenres(e.target.value)} />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="filterbygenre">
                        <h2>Filter By Status</h2>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="All" control={<Radio />} label="All" onChange={(e)=> setStatus(e.target.value)}/>
                                <FormControlLabel value="hit" control={<Radio />} label="Hit" onChange={(e)=> setStatus(e.target.value)}/>
                                <FormControlLabel value="flop" control={<Radio />} label="Flop" onChange={(e)=> setStatus(e.target.value)}/>
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="sortbyvalue">
                        <h2>Sort By Value</h2>
                    <FaSortUp size={'2.5vw'} onClick={(e)=> setSort(e.target.value)}/>
                    <FaSortDown size={'2.5vw'} onClick={(e)=> setSort(e.target.value)}/>
                    </div>
                </div>
                <Table page={page}/>
                <div className="pagination">
                <IconButton><IoIosArrowBack onClick={handlePrevious}/></IconButton>
                <p>{page}</p>
                <IconButton><IoIosArrowForward onClick={handleNext}/></IconButton>

            </div>
            </div>
        </>
    )
}

export default Home