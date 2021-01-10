import React, {useState} from 'react';
import {AiOutlineMinusCircle} from "react-icons/ai";
import {MdPlayCircleOutline} from "react-icons/md";
import ReactPlayer from "react-player";
import "../stylesheets/Track.css";
import Badge from "react-bootstrap/Badge";

const Track = ({ track, videoCount, setVideoCount}) => {
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

  const genres = track.genre.map((genre) => {
    return (
      <React.Fragment>
        {' '}<Badge variant="primary">{genre}</Badge>
      </React.Fragment>
    );
  });

  let css;
  if(videoCount > 0) {
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
        <div className="badges">
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
            {' '} | {genres}
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