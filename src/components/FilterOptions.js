import React from 'react';

class FilterOptions extends React.Component {

  genreClick(value) {
    this.props.updateGenres(value);
  }

  tagClick(value) {
    this.props.updateTags(value);
  }

  render() {
    return (
      <div>
        Filter Options:
        <div>
          Genres:
          <button onClick={() => this.genreClick("ballad")}>Ballad</button>
          <button onClick={() => this.genreClick("indie")}>Indie</button>
          <button onClick={() => this.genreClick("rock")}>Rock</button>
          <button onClick={() => this.genreClick("popSong")}>Pop</button>
          <button onClick={() => this.genreClick("acoustic")}>Acoustic</button>
          <button onClick={() => this.genreClick("jazz")}>Jazz</button>
        </div>
        <div>
          Tags:
          <button onClick={() => this.tagClick("korean")}>Korean</button>
          <button onClick={() => this.tagClick("japanese")}>Japanese</button>
          <button onClick={() => this.tagClick("english")}>English</button>
          <button onClick={() => this.tagClick("femaleVocalist")}>Female Vocalist</button>
          <button onClick={() => this.tagClick("maleVocalist")}>Male Vocalist</button>
          <button onClick={() => this.tagClick("girlGroup")}>Girl Group</button>
          <button onClick={() => this.tagClick("boyGroup")}>Boy Group</button>
          <button onClick={() => this.tagClick("ost")}>OST</button>
        </div>
      </div>
    )
  }
}

export default FilterOptions;