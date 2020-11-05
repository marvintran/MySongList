import React from 'react';
import { AiOutlineMinusCircle } from "react-icons/ai";
import { MdPlayCircleOutline } from "react-icons/md";
import ReactPlayer from "react-player";
import "../stylesheets/Track.css";
import Button from 'react-bootstrap/Button'

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

  // https://stackoverflow.com/a/7225450
  camelCaseToNormal(value) {
    if(value === "ost")
      return "OST";
    let result = value.replace( /([A-Z])/g, " $1" );
    let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  }

  isActive(index, value) {
    let filters = this.props.filterOptions;
    let isActive = false;
    if(filters[index].length !== 0) {
      for(let i = 0; i < filters[index].length; i++) {
        let filterValue = this.camelCaseToNormal(filters[index][i]);
        if(filterValue === value) {
          isActive = true;
          break;
        }
      }
    }
    return isActive;
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

    const genres = this.props.track.genre.map((genre, index) => {
      if(index < (this.props.track.genre.length-1))
        return (
          <React.Fragment>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => this.genreClick(genre)}
              active={this.isActive(0, genre)}
            >
              {genre}
            </Button>{' '}
          </React.Fragment>
        );

      else
        return (
          <React.Fragment>
            <Button
              className="last-button"
              variant="outline-primary"
              size="sm"
              onClick={() => this.genreClick(genre)}
              active={this.isActive(0, genre)}
            >
              {genre}
            </Button>{' '}
          </React.Fragment>
        );
    });

    const tags = this.props.track.tags.map((tag) => {
      return (
        <React.Fragment>
          <Button
            className="filterButton"
            variant="outline-primary"
            size="sm"
            onClick={() => this.tagClick(tag)}
            active={this.isActive(1, tag)}
          >
            {tag}
          </Button>{' '}
        </React.Fragment>
      );
    });

    return (
      <React.Fragment>
        <li>
          <p onClick={() => this.toggleVideo()}>{this.props.track.name}{' '}
          {button}
          </p>
          <div className="filter-options">
            {genres}
            {tags}
          </div>
          { videoShowing
            ? <ReactPlayer
              url={this.props.track.url}
              playing={true}
              controls={true}
              />
            : null
          }
        </li>
      </React.Fragment>
    )
  }
}

export default Track;