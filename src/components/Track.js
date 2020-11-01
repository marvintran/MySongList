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

  // string to camelCase: https://stackoverflow.com/a/52551910
  genreClick(value) {
    this.props.updateGenres(value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()));
  }

  tagClick(value) {
    this.props.updateTags(value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()));
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
      return <button class="filterButton" onClick={() => this.genreClick(genre)}>{genre}</button>;
    });

    const tags = this.props.track.tags.map((tag) => {
      return <button class="filterButton" onClick={() => this.tagClick(tag)}>{tag}</button>;
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