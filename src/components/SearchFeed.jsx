import React from "react"
import { useState, useEffect } from "react"
import { Box, Typography } from "@mui/material"
import {  Videos } from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import { useParams } from "react-router-dom"

const SearchFeed = () => {
  const [videos, setVideos] = useState([])


//const searchUrl= useParams().searchTerm
const {searchTerm:searchUrl} = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchUrl}`).then((data) => {
      setVideos(data.items)
      //console.log(data.items)
    })
  }, [searchUrl])

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
       Search result for: <span style={{ color: "#F31503" }}>{searchUrl}</span> videos
      </Typography>
      {<Videos videos={videos} />}
    </Box>
  )
}

export default SearchFeed
