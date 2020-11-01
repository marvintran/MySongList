import React from 'react';
import Songs from './Songs'

class MonthList extends React.Component {
  render() {
    const songs = this.props.songs.map((song) => {
      return (
        <Songs
          song={song}
          filterText={this.props.filterText}
          updateGenres={this.props.updateGenres}
          updateTags={this.props.updateTags}
        />
      )});

    return (
      <React.Fragment>
        {songs}
      </React.Fragment>
    )
  }
}

export default MonthList;