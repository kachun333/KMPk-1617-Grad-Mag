import Skeleton from "@mui/material/Skeleton";
import React, { useState } from "react";
import YouTube, { YouTubeEvent } from "react-youtube";

interface WrappedVideoProps {
  videoId: string;
}

const WrappedVideo: React.FC<WrappedVideoProps> = ({ videoId }) => {
  const [isReady, setIsReady] = useState(false);

  const opts = {
    height: 195,
    width: 320,
  };

  const onReady = (event: YouTubeEvent<any>) => {
    setIsReady(true);
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const ytDisplay = isReady ? undefined : "none";

  return (
    <>
      {!isReady && (
        <Skeleton
          variant="rectangular"
          height={opts.height}
          width={opts.width}
        />
      )}
      <YouTube
        style={{ display: ytDisplay }}
        videoId={videoId}
        opts={opts}
        onReady={onReady}
      />
    </>
  );
};

export default WrappedVideo;
