import React from 'react';
import { AiOutlineMinusCircle } from "react-icons/ai";
import { MdPlayCircleOutline } from "react-icons/md";
import ReactPlayer from "react-player";
import FilterButton from "./FilterButton";
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
            <FilterButton
              title={genre}
              action={this.props.updateGenres}
              active={this.isActive(0, genre)}
              size="sm"
            />{' '}
          </React.Fragment>
        );

      else
        return (
          <React.Fragment>
            <FilterButton
              title={genre}
              action={this.props.updateGenres}
              active={this.isActive(0, genre)}
              size="sm"
              className="last-button"
            />{' '}
          </React.Fragment>
        );
    });

    const tags = this.props.track.tags.map((tag) => {
      return (
        <React.Fragment>
          <FilterButton
            title={tag}
            action={this.props.updateTags}
            active={this.isActive(1, tag)}
            size="sm"
          />{' '}
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