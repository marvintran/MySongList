import React, {useContext, useState} from 'react';
import { AiOutlineMinusCircle } from "react-icons/ai";
import { MdPlayCircleOutline } from "react-icons/md";
import ReactPlayer from "react-player";
import FilterButton from "./FilterButton";
import "../stylesheets/Track.css";
import { FilterContext } from './filter-context';

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

const Track = ({ track, videoCount, setVideoCount}) => {
  const filters = useContext(FilterContext);
  const [videoShowing, setVideoShowing] = useState(false);

  if(track.url === "") {
    return <li>{track.name}</li>
  }

  let button;

  if(videoShowing) {
    button = <AiOutlineMinusCircle size={23} className="cursor-pointer"/>;
  } else {
    button = <MdPlayCircleOutline size={23} className="cursor-pointer"/>
  }

  const genres = track.genre.map((genre, index) => {
    if(index < (track.genre.length-1))
      return (
        <React.Fragment>
          <FilterButton
            title={genre}
            action={filters.updateGenre}
            active={isActive(0, genre, filters.selectedFilters())}
            size="sm"
          />{' '}
        </React.Fragment>
      );

    else
      return (
        <React.Fragment>
          <FilterButton
            title={genre}
            action={filters.updateGenre}
            active={isActive(0, genre, filters.selectedFilters())}
            size="sm"
            className="last-button"
          />{' '}
        </React.Fragment>
      );
  });

  let css;
  if(videoShowing) {
    css = "track-title-longer"
  } else {
    css = "track-title-ellipsis"
  }

  return (
    <React.Fragment>
      <li>
        <div className={css}>
          {track.name}
        </div>
        <div className="filter-options">
          <span onClick={() => {
            if(videoShowing) {
              setVideoCount(videoCount - 1);
            } else {
              setVideoCount(videoCount + 1);
            }
            setVideoShowing(!videoShowing);
          }}>
            {button}
          </span>
            {' '} | {' '} {genres}
        </div>
        { videoShowing
          ? <div className='player-wrapper'>
              <ReactPlayer
                className="react-player"
                url={track.url}
                playing={true}
                controls={true}
                width="100%"
                height="100%"
              />
            </div>
          : null
        }
      </li>
    </React.Fragment>
  )
}

export default Track;