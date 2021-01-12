import React, { useContext, useState } from 'react';
import "../stylesheets/Songs.css";
import Track from "./Track"
import { FilterContext } from './filter-context';
import DefaultCoverArt from '../data/Default_Cover_Art.svg';
import Badge from "react-bootstrap/Badge";

// https://stackoverflow.com/a/7225450
function camelCaseToNormal(value) {
  if(value === "ost")
    return "OST";
  else if(value === "rnb")
    return "R&B";

  let result = value.replace( /([A-Z])/g, " $1" );
  return result.charAt(0).toUpperCase() + result.slice(1);
}

function hasFilters(track, song, filterOptions) {
  let filters = filterOptions;

  if(filters[0].length === 0 && filters[1].length === 0)
    return true;

  let trackGenres = track.genre;
  let songTags = song.tags;

  let hasGenre = true;
  let hasTag = true;

  if(filters[0].length !== 0) {
    let aaa = filters[0].map((curr) => {
      let filterGenre = camelCaseToNormal(curr);
      return trackGenres.includes(filterGenre);
    });

    for(let i = 0; i < aaa.length; i++) {
      if(aaa[i] === false) {
        hasGenre = false;
        break;
      }
    }
  }

  if(filters[1].length !== 0) {
    let aaa = filters[1].map((curr) => {
      let filterTag = camelCaseToNormal(curr);
      return songTags.includes(filterTag);
    });

    for(let i = 0; i < aaa.length; i++) {
      if(aaa[i] === false) {
        hasTag = false;
        break;
      }
    }
  }

  return hasGenre && hasTag;
}

const Songs = ({ song }) => {
  const filters = useContext(FilterContext);
  const [videoCount, setVideoCount] = useState(0);
  const artistName = song.artist.join(", ");

  const rows = song.tracks
    .filter((track) =>
      ( artistName.toLowerCase().indexOf(filters.filterText.toLowerCase()) !== -1 ||
        track.name.toLowerCase().indexOf(filters.filterText.toLowerCase()) !== -1
      )
      && hasFilters(track, song, filters.selectedFilters())
    )
    .map((track) => {
      return(
        <Track track={track} videoCount={videoCount} setVideoCount={setVideoCount}/>)
    });

  const tags = song.tags.map((tag) => {
    return (
      <React.Fragment>
        <Badge variant="primary">{tag}</Badge>{' '}
      </React.Fragment>
    );
  });

  let css;
  if(videoCount > 0) {
    css = "song-item-video-showing"
  } else {
    css = "song-item-no-video"
  }

  let coverArt;
  if(song.art){
    coverArt = <img src={song.art} alt={"Cover Art"} width="150" height="150"/>
  } else {
    coverArt = <img src={DefaultCoverArt} alt={"Cover Art"} width="150" height="150"/>
  }

  if(rows.length > 0) {
    return (
      <div className={css}>
        <div className="artist-name">
          <h5>{artistName}</h5>
        </div>
        <div className="card-content">
          <div className="album-art">
            {coverArt}
          </div>
          <div className="track-list">
            <ul>
              {rows}
            </ul>
          </div>
        </div>
        <div className="tags">
          {tags}
        </div>
      </div>
    )}

  return null;
}

export default Songs;