import React from 'react';

class FilterOptions extends React.Component {
  filterClick(event, value) {
    alert(value);
  }

  render() {
    return (
      <div>
        Filter Options:
        <div>
          Genres:
          <button onClick={e => this.filterClick(e, "ballad")}>Ballad</button>
          <button onClick={e => this.filterClick(e, "indie")}>Indie</button>
          <button onClick={e => this.filterClick(e, "rock")}>Rock</button>
          <button onClick={e => this.filterClick(e, "popSong")}>Pop</button>
          <button onClick={e => this.filterClick(e, "acoustic")}>Acoustic</button>
          <button onClick={e => this.filterClick(e, "jazz")}>Jazz</button>
        </div>
        <div>
          Tags:
          <button onClick={e => this.filterClick(e, "korean")}>Korean</button>
          <button onClick={e => this.filterClick(e, "japanese")}>Japanese</button>
          <button onClick={e => this.filterClick(e, "english")}>English</button>
          <button onClick={e => this.filterClick(e, "femaleVocalist")}>Female Vocalist</button>
          <button onClick={e => this.filterClick(e, "maleVocalist")}>Male Vocalist</button>
          <button onClick={e => this.filterClick(e, "girlGroup")}>Girl Group</button>
          <button onClick={e => this.filterClick(e, "boyGroup")}>Boy Group</button>
          <button onClick={e => this.filterClick(e, "ost")}>OST</button>
        </div>
      </div>
    )
  }
}

export default FilterOptions;