import * as React from "react";
import { useEffect, useRef, useState } from "react";

//components
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";


const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: "100%",
  position: "relative",
  zIndex: 1,
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 6px 12px, rgba(0, 0, 0, 0.23) 0px 6px 12px",
  backgroundColor: "#011627",
  backdropFilter: "blur(5px)",
  ...theme.applyStyles("dark", {
    backgroundColor: "#011627",
  }),
}));
 
const CoverImage = styled("div")({
  width: 100,
  height: 100,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function MusicPlayerSlider() {
  const audioRef = useRef(null);
  const duration = 200; // seconds
  const [position, setPosition] = useState(32);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current && !paused) {
        setPosition(audioRef.current.currentTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [paused]);

  const  formatDuration = (value) => {
    const minute = Math.floor(value / 60);
    const secondLeft = Math.floor(value - minute * 60);
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const handlePlayPause = () => {
    if(paused){
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      })
    } else{
      audioRef.current.pause();
    }
    setPaused(!paused);
  }

  const handleSliderChange = (_, value) => {
    setPosition(value);
    if(audioRef.current){
      audioRef.current.currentTime = value;
    }
  }

  return (
    <Box sx={{ width: "100%", overflow: "hidden", position: "relative", p: 1 }}>
      <Widget>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CoverImage>
            <img
              alt="champion - kanye west"
              src="https://robynainsley21.github.io/images/personal-portfolio/artworks-F2ido6SltCjd-0-t500x500.jpg"
            />
          </CoverImage>
          <Box sx={{ ml: 1.5, minWidth: 0, color: "#5565e8" }}>
            <Typography
              variant="caption"
              sx={{ color: "#5565e8", fontWeight: 500 }}
            >
              click to play/pause 
            </Typography>
            <Typography noWrap>
              <b>Champion</b>
            </Typography>
            <Typography noWrap sx={{ letterSpacing: -0.25 }}>
              Kanye West
            </Typography>
          </Box>
        </Box>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={1}
          max={duration}
          onChange={handleSliderChange}
          sx={(t) => ({
            color: "#5565e8",
            height: 4,
            "& .MuiSlider-thumb": {
              width: 8,
              height: 8,
              transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
              "&::before": {
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible": {
                boxShadow: `0px 0px 0px 8px ${"rgb(0 0 0 / 16%)"}`,
                ...t.applyStyles("dark", {
                  boxShadow: `0px 0px 0px 8px ${"rgb(255 255 255 / 16%)"}`,
                }),
              },
              "&.Mui-active": {
                width: 20,
                height: 20,
              },
            },
            "& .MuiSlider-rail": {
              opacity: 0.28,
            },
            ...t.applyStyles("dark", {
              color: "#fff",
            }),
          })}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: -2,
            color: "#fff",
          }}
        >
          <TinyText>{formatDuration(position)}</TinyText>
          <TinyText>-{formatDuration(duration - position)}</TinyText>
        </Box>
        <Box
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: -1,
            "& svg": {
              color: "#5565e8",
              ...theme.applyStyles("dark", {
                color: "#fff",
              }),
            },
          })}
        >
          <IconButton aria-label="previous song">
            <FastRewindRounded fontSize="large" />
          </IconButton>
          <IconButton
            aria-label={paused ? "play" : "pause"}
            onClick={handlePlayPause}
          >
            {paused ? (
              <PlayArrowRounded sx={{ fontSize: "3rem", color: "#5565e8" }} />
            ) : (
              <PauseRounded sx={{ fontSize: "3rem" }} />
            )}
          </IconButton>
          <IconButton aria-label="next song">
            <FastForwardRounded fontSize="large" />
          </IconButton>
        </Box>
        <audio ref={audioRef} src="https://robynainsley21.github.io/images/personal-portfolio/Kanye_West_-_Champion_(ColdMP3.com).mp3" preload="metadata" />
      </Widget>
    </Box>
  );
}
