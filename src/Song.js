import React from 'react';

class Song extends React.Component {
  render() {
    const filterText = this.props.filterText.toLowerCase();
    const artistName = this.props.song.artist;

    const rows = [];
    this.props.song.tracks.forEach((song) => {
      if(artistName.toLowerCase().indexOf(filterText) !== -1 || song.name.toLowerCase().indexOf(filterText) !== -1)
        rows.push(<li>{song.name}</li>);
    });

    if(rows.length > 0) {
      return (
      <div>
        <h3>{artistName}</h3>
        {rows}
      </div>
    )}

    return <div></div>;
  }
}

export default Song;