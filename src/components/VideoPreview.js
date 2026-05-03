"use client";

import { useRef, useEffect, useState } from "react";

const VideoPreview = ({ src, title }) => {
  const videoRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set fast-forward speed for preview
    video.playbackRate = 3;

    const onFullscreenChange = () => {
      const isFull = !!document.fullscreenElement;
      setIsFullscreen(isFull);
      if (video) {
        video.playbackRate = isFull ? 2 : 3;
        video.muted = !isFull;
      }
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  };

  return (
    <div className="mp-video" onClick={handleClick}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
      <div className="mp-video-overlay">
        <i className="ri-fullscreen-line"></i>
        <span>Click to preview — {title}</span>
      </div>
    </div>
  );
};

export default VideoPreview;
