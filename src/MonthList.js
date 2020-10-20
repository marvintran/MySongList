import React from 'react';
import Song from './Song'

class MonthList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.songs.map((song) => {
          return <Song song={song} filterText={this.props.filterText}/>
        })}
      </ul>
    )
  }
}

export default MonthList;