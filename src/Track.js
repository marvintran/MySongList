import React from 'react';
import { AiOutlineMinusCircle } from "react-icons/ai";
import { MdPlayCircleOutline } from "react-icons/md";
import ReactPlayer from "react-player";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
      button: <MdPlayCircleOutline/>
    };
  }

  toggleVideo() {
    if(!this.state.showing) {
      this.setState({
        showing: true,
        button: <AiOutlineMinusCircle/>
      });
    } else {
      this.setState({
        showing: false,
        button: <MdPlayCircleOutline/>
      });
    }
  }

  render() {
    if(this.props.track.url === "") {
      return <li>{this.props.track.name}</li>
    }

    const genres = [];
    this.props.track.genre.forEach((genre) => {
      genres.push(<div>{genre}</div>);
    });

    return (
      <div>
        <li onClick={() => this.toggleVideo()}>
          {this.props.track.name}
          {this.state.button}
        </li>
        <div>{genres}</div>
        { this.state.showing
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