import React from 'react';
import { AiOutlineMinusCircle } from "react-icons/ai";
import { MdPlayCircleOutline } from "react-icons/md";
import ReactPlayer from "react-player";

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
      return <div>{genre}</div>;
    });

    return (
      <div>
        <li onClick={() => this.toggleVideo()}>
          {this.props.track.name}
          {button}
        </li>
        <div>{genres}</div>
        { videoShowing
          ? <ReactPlayer
            url={this.props.track.url}
            playing={true}
            controls={true}
            />
          : null
        }
      </div>
    )
  }
}

export default Track;