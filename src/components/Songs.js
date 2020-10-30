import React from 'react';
import Track from "./Track"

class Songs extends React.Component {
  render() {
    const artistName = this.props.song.artist.join(", ");
    const filterText = this.props.filterText.toLowerCase();

    const rows = this.props.song.tracks.filter((song) =>
      artistName.toLowerCase().indexOf(filterText) !== -1 || song.name.toLowerCase().indexOf(filterText) !== -1)
        .map(song => {
          return <Track track={song}/>;
        }
    );
    
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