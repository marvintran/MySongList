import React from 'react';
import Track from "./Track"
import "../stylesheets/Songs.css";

// https://stackoverflow.com/a/7225450
function camelCaseToNormal(value) {
  if(value === "ost")
    return "OST";
  let result = value.replace( /([A-Z])/g, " $1" );
  let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
}

function hasFilters(track, filterOptions) {
  let filters = filterOptions;

  if(filters[0].length === 0 && filters[1].length === 0)
    return true;

  let trackGenres = track.genre;
  let trackTags = track.tags;

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
      return trackTags.includes(filterTag);
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

const Songs = ({ song, filterText, filterOptions, updateGenres, updateTags }) => {
  const artistName = song.artist.join(", ");

  const rows = song.tracks
    .filter((track) =>
      ( artistName.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 ||
        track.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
      )
      && hasFilters(track, filterOptions)
    )
    .map((track) => {
      return(
        <Track
          track={track}
          filterOptions={filterOptions}
          updateGenres={updateGenres}
          updateTags={updateTags}
        />)
    });

  if(rows.length > 0) {
    return (
      <React.Fragment>
        <h5>{artistName}</h5>
        <ul>
          {rows}
        </ul>
      </React.Fragment>
    )}

  return null;
}

export default Songs;