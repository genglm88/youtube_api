import React from "react"
import { Box, Stack } from "@mui/material"
import VideoCard from "./VideoCard"
import ChannelCard from "./ChannelCard"

const Videos = ({ videos, direction='row' }) => (
  <Stack direction={direction} flexWrap="wrap" justifyContent="start" gap={2}>
    {videos.map((video, index) => (
      <Box key={index}>
        {video.id.videoId && <VideoCard video={video} />}

        {video.id.channelId && <ChannelCard channelDetail={video} />}
       
      </Box>
    ))}
  </Stack>
)

export default Videos
