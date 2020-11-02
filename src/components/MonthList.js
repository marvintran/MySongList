import React from 'react';
import Songs from './Songs'

class MonthList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthShowing: true,
    };
  }

  toggleView() {
    this.setState({
      monthShowing: !this.state.monthShowing
    });
  }

  render() {
    const songs = this.props.songs.map((song) => {
      return (
        <Songs
          song={song}
          filterText={this.props.filterText}
          filterOptions={this.props.filterOptions}
          updateGenres={this.props.updateGenres}
          updateTags={this.props.updateTags}
        />
      )});

    return (
      <React.Fragment>
        <h2 onClick={() => this.toggleView()}>{this.props.month}</h2>
        { this.state.monthShowing
          ? songs
          : null
        }
      </React.Fragment>
    )
  }
}

export default MonthList;