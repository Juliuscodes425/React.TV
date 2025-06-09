import "./shows.css";
import "./EpisodeList";
import "./ShowSelection";
import "./EpisodeList";
import React, { useState } from "react";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ tvShows }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  return <div className="show-details"></div>;
}
if (!tvShows) {
  return <div>select a show</div>;
}
return (
  <div className="show-details">
    <EpisodeList episode={selectedEpisode} />
    <EpisodeDetails />
  </div>
);
