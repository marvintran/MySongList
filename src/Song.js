import React from 'react';

class Song extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const artistName = this.props.song.artist;

    return (
      <div>
        <h3>{artistName}</h3>
        {this.props.song.tracks.map((track) => (
          <li>{track.name}</li>
        ))}
      </div>
    )
  }
}

export default Song;