import React from "react";
import Sound from "react-sound";
import casino from "./boarAssets/casino.mp3";

export const PlaySound = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) => {return(
  <div>
    <Sound
    url={casino}
    playStatus={Sound.status.PLAYING}
    
    />
  </div>
)};
