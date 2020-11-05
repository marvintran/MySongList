import React from 'react';
import Track from "./Track"
import "../stylesheets/Songs.css";

class Songs extends React.Component {

  // https://stackoverflow.com/a/7225450
  camelCaseToNormal(value) {
    if(value === "ost")
      return "OST";
    let result = value.replace( /([A-Z])/g, " $1" );
    let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  }

  hasFilters(track) {
    let filters = this.props.filterOptions;

    if(filters[0].length === 0 && filters[1].length === 0)
      return true;

    let trackGenres = track.genre;
    let trackTags = track.tags;

    let hasGenre = true;
    let hasTag = true;
    
    if(filters[0].length !== 0) {
      let aaa = filters[0].map((curr) => {
        let filterGenre = this.camelCaseToNormal(curr);
        return trackGenres.includes(filterGenre);
      });

      for(let i = 0; i < aaa.length; i++) {
        if(aaa[i] === false) {
          hasGenre = false;
          break;
        }
      }
    }

    if(filters[1].length !== 0) {
      let aaa = filters[1].map((curr) => {
        let filterTag = this.camelCaseToNormal(curr);
        return trackTags.includes(filterTag);
      });

      for(let i = 0; i < aaa.length; i++) {
        if(aaa[i] === false) {
          hasTag = false;
          break;
        }
      }
    }

    return hasGenre && hasTag;
  }

  render() {
    const artistName = this.props.song.artist.join(", ");
    const filterText = this.props.filterText.toLowerCase();

    const rows = this.props.song.tracks
      .filter((track) =>
        (artistName.toLowerCase().indexOf(filterText) !== -1 || track.name.toLowerCase().indexOf(filterText) !== -1)
        && this.hasFilters(track)
      )
      .map((track) => {
        return(
          <Track
            track={track}
            updateGenres={this.props.updateGenres}
            updateTags={this.props.updateTags}
          />)
      });
    
    if(rows.length > 0) {
      return (
        <React.Fragment>
          <h5>{artistName}</h5>
          <ul>
            {rows}
          </ul>
        </React.Fragment>
    )}

    return null;
  }
}

export default Songs;