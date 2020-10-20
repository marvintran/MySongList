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

    return (
      <div onClick={() => this.toggleVideo()}>
        <li>
          {this.props.track.name}
          {this.state.button}
          { this.state.showing
            ? <ReactPlayer
                url={this.props.track.url}
                playing={true}
                controls={true}
              />
            : null
          }
        </li>
      </div>
    )
  }
}

export default Track;