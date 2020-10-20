import React from 'react';
import Songs from './Songs'

class MonthList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.songs.map((song) => {
          return <Songs song={song} filterText={this.props.filterText}/>
        })}
      </ul>
    )
  }
}

export default MonthList;