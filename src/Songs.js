import React from 'react';
import Track from "./Track"

class Songs extends React.Component {
  render() {
    const filterText = this.props.filterText.toLowerCase();
    const artistName = this.props.song.artist.join(", ");

    const rows = [];
    this.props.song.tracks.forEach((song) => {
      if(artistName.toLowerCase().indexOf(filterText) !== -1 || song.name.toLowerCase().indexOf(filterText) !== -1)
        rows.push(<Track track={song}/>);
    });

    if(rows.length > 0) {
      return (
      <div>
        <h3>{artistName}</h3>
        {rows}
      </div>
    )}

    return null;
  }
}

export default Songs;