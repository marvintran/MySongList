import React from 'react';
import Songs from './Songs'

class MonthList extends React.Component {
  render() {

    const songs = [];
    this.props.songs.forEach((song) => {
      songs.push(<Songs song={song} filterText={this.props.filterText}/>);
    });

    return (
      <ul>
        {songs}
      </ul>
    )
  }
}

export default MonthList;