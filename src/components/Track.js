import React, { useState } from 'react';
import { AiOutlineMinusCircle } from "react-icons/ai";
import { MdPlayCircleOutline } from "react-icons/md";
import ReactPlayer from "react-player";
import FilterButton from "./FilterButton";
import "../stylesheets/Track.css";

// https://stackoverflow.com/a/7225450
function camelCaseToNormal(value) {
  if(value === "ost")
    return "OST";
  let result = value.replace( /([A-Z])/g, " $1" );
  let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
}

function isActive(index, value, filters) {
  let isActive = false;
  if(filters[index].length !== 0) {
    for(let i = 0; i < filters[index].length; i++) {
      let filterValue = camelCaseToNormal(filters[index][i]);
      if(filterValue === value) {
        isActive = true;
        break;
      }
    }
  }
  return isActive;
}

const Track = ({ track, filterOptions, updateGenres, updateTags }) => {
  const [videoShowing, setVideoShowing] = useState(false);

  if(track.url === "") {
    return <li>{track.name}</li>
  }

  let button;

  if(videoShowing) {
    button = <AiOutlineMinusCircle/>;
  } else {
    button = <MdPlayCircleOutline/>
  }

  const genres = track.genre.map((genre, index) => {
    if(index < (track.genre.length-1))
      return (
        <React.Fragment>
          <FilterButton
            title={genre}
            action={updateGenres}
            active={isActive(0, genre, filterOptions)}
            size="sm"
          />{' '}
        </React.Fragment>
      );

    else
      return (
        <React.Fragment>
          <FilterButton
            title={genre}
            action={updateGenres}
            active={isActive(0, genre, filterOptions)}
            size="sm"
            className="last-button"
          />{' '}
        </React.Fragment>
      );
  });

  const tags = track.tags.map((tag) => {
    return (
      <React.Fragment>
        <FilterButton
          title={tag}
          action={updateTags}
          active={isActive(1, tag, filterOptions)}
          size="sm"
        />{' '}
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <li>
        <p onClick={() => setVideoShowing(!videoShowing)}>{track.name}{' '}
          {button}
        </p>
        <div className="filter-options">
          {genres}
          {tags}
        </div>
        { videoShowing
          ? <ReactPlayer
            url={track.url}
            playing={true}
            controls={true}
          />
          : null
        }
      </li>
    </React.Fragment>
  )
}

export default Track;