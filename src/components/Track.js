import React from 'react';
import { AiOutlineMinusCircle } from "react-icons/ai";
import { MdPlayCircleOutline } from "react-icons/md";
import ReactPlayer from "react-player";
import "../stylesheets/Track.css";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoShowing: false,
    };
  }

  toggleVideo() {
    this.setState({
      videoShowing: !this.state.videoShowing
    });
  }

  render() {
    if(this.props.track.url === "") {
      return <li>{this.props.track.name}</li>
    }

    let videoShowing = this.state.videoShowing;
    let button;

    if(videoShowing) {
      button = <AiOutlineMinusCircle/>;
    } else {
      button = <MdPlayCircleOutline/>
    }

    const genres = this.props.track.genre.map((genre) => {
      return <button class="filterButton">{genre}</button>;
    });

    const tags = this.props.track.tags.map((tag) => {
      return <button class="filterButton">{tag}</button>;
    });

    return (
      <React.Fragment>
        <li onClick={() => this.toggleVideo()}>
          {this.props.track.name}
          {button}
        </li>
        <li class="filterOptions">
          <p class="filterButton">Genres:</p>
          {genres}
          <p class="filterButton">Tags:</p>
          {tags}
        </li>
        { videoShowing
          ? <ReactPlayer
            url={this.props.track.url}
            playing={true}
            controls={true}
            />
          : null
        }
      </React.Fragment>
    )
  }
}

export default Track;