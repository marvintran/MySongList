import React from 'react';
import Track from "./Track"

class Songs extends React.Component {
  // https://stackoverflow.com/a/7225450
  camelCaseToNormal(value) {
    let result = value.replace( /([A-Z])/g, " $1" );
    let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  }

  test(track) {
    let filters = this.props.filterOptions;

    if(filters[0].length === 0 && filters[1].length === 0)
      return true;

    let trackGenres = track.genre;
    let trackTags = track.tags;
    let hasGenre = false;
    let hasTag = false;

    if(filters[0].length !== 0) {
      for(let i = 0; i < filters[0].length; i++) {
        let filterGenre = this.camelCaseToNormal(filters[0][i]);
        if(trackGenres.includes(filterGenre)) {
          hasGenre = true;
          break;
        }
      }
    } else {
      hasGenre = true;
    }

    if(filters[1].length !== 0) {
      for(let i = 0; i < filters[1].length; i++) {
        let filterTag = this.camelCaseToNormal(filters[1][i]);
        if(trackTags.includes(filterTag)) {
          hasTag = true;
          break;
        }
      }
    } else {
      hasTag = true;
    }
    
    return hasGenre && hasTag;
  }

  render() {
    const artistName = this.props.song.artist.join(", ");
    const filterText = this.props.filterText.toLowerCase();

    const rows = this.props.song.tracks
      .filter((track) =>
        (artistName.toLowerCase().indexOf(filterText) !== -1 || track.name.toLowerCase().indexOf(filterText) !== -1)
        && this.test(track)
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
          <h3>{artistName}</h3>
          <ul>
            {rows}
          </ul>
        </React.Fragment>
    )}

    return null;
  }
}

export default Songs;