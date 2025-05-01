import React, { useState } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import axios from 'axios'
import {Typography} from '@mui/material'

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("");
  const [genres, setGenres] = useState("");
  const [language, setLanguage] = useState("");
  const [industry, setIndustry] = useState("");
  const [duration, setDuration] = useState("");
  const [status, setStatus] = useState("All")

  const signupHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
        const res = await axios.post('http://localhost:3000/api/v1/movies/new', { name, genres, language, industry, duration, status }, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
        console.log(res)
        if (res.data.success) {
            navigate('/login')
            toast.success(res.data.message);
          }
          setName("");
          setGenres("");
          setLanguage("");
          setIndustry("");
          setDuration("");
          setStatus("All")
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
    setLoading(false)
}

  return (
    <>
    <div className="signup">
                <form
                    className="signupform"
                    onSubmit={signupHandler}
                >

                    <Typography>Add New Movie here...</Typography>
                    <input
                        type="text"
                        placeholder='Name'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder='Movie Genre'
                        required
                        value={genres}
                        onChange={(e) => setGenres(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Movie Language'
                        required
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Industry'
                        required
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Movie Duration'
                        required
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="All">All</option>
                        <option value="hit">hit</option>
                        <option value="flop">flop</option>
                    </select>

                    <button className='mybtn1' type='submit'>
                        {
                            loading ? (<CircularProgress color='' size={'30px'} />) : ('Add Movie')
                        }
                    </button>
                </form>
            </div>
    </>
  )
}

export default Register