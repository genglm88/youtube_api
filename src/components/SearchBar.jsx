import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from "@mui/material"
import { Search } from "@mui/icons-material"
import SearchFeed from "./SearchFeed"

const SearchBar = () => {
  const [searchUrl, setSearchUrl] = useState("")
  console.log(searchUrl)
  const navigate = useNavigate()
  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        e.preventDefault()
        if (searchUrl) {
          navigate(`/search/${searchUrl}`)
          setSearchUrl("")
        }
      }}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchUrl}
        onChange={(e) => setSearchUrl(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
