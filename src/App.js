import React from 'react';
import SearchBar from "./components/SearchBar";
import MonthList from "./components/MonthList";
import CurrentFilters from "./components/CurrentFilters";
import FilterOptions from "./components/FilterOptions";
import "./App.css";

import january2020 from './data/2020_01_january.json';
import february2020 from './data/2020_02_february.json';
import march2020 from './data/2020_03_march.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      filterGenre: {
        ballad: false,
        indie: false,
        rock: false,
        popSong: false,
        acoustic: false,
        jazz: false
        },
      filterTag: {
        korean: false,
        japanese: false,
        english: false,
        femaleVocalist: false,
        maleVocalist: false,
        girlGroup: false,
        boyGroup: false,
        ost: false
      }
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.updateGenre = this.updateGenre.bind(this);
    this.updateTag = this.updateTag.bind(this);
    this.removeGenre = this.removeGenre.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.selectedFilters = this.selectedFilters.bind(this);
  }

  //https://stackoverflow.com/a/53986441
  //https://stackoverflow.com/a/43639228
  updateGenre(value) {
    this.setState(prevState => ({
      filterGenre: {
        ...prevState.filterGenre,
        [value]: !this.state.filterGenre[value]
      }
    }))
  }

  updateTag(value) {
    this.setState(prevState => ({
      filterTag: {
        ...prevState.filterTag,
        [value]: !this.state.filterTag[value]
      }
    }))
  }

  removeGenre(value) {
    this.setState(prevState => ({
      filterGenre: {
        ...prevState.filterGenre,
        [value]: false
      }
    }))
  }

  removeTag(value) {
    this.setState(prevState => ({
      filterTag: {
        ...prevState.filterTag,
        [value]: false
      }
    }))
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  selectedFilters() {
    const genres = Object.keys(this.state.filterGenre)
      .filter((genre) => this.state.filterGenre[genre] === true)
      .map((genre) => { return genre });

    const tags = Object.keys(this.state.filterTag)
      .filter((tag) => this.state.filterTag[tag] === true)
      .map((tag) => { return tag });

    return [genres, tags];
  }

  render() {
    return (
      <div>
        <div>
          <SearchBar
            filterText={this.state.filterText}
            onFilterTextChange={this.handleFilterTextChange}
          />
          <CurrentFilters
            filterOptions={this.selectedFilters()}
            removeGenres={this.removeGenre}
            removeTags={this.removeTag}
          />
          <FilterOptions
            updateGenres={this.updateGenre}
            updateTags={this.updateTag}
          />
        </div>

        <div>
          <h1>2020</h1>
          <h2>March 2020</h2>
            <MonthList
              songs={march2020.songs}
              filterText={this.state.filterText}
              updateGenres={this.updateGenre}
              updateTags={this.updateTag}
            />
          <h2>February 2020</h2>
            <MonthList
              songs={february2020.songs}
              filterText={this.state.filterText}
              updateGenres={this.updateGenre}
              updateTags={this.updateTag}
            />
          <h2>January 2020</h2>
            <MonthList
              songs={january2020.songs}
              filterText={this.state.filterText}
              updateGenres={this.updateGenre}
              updateTags={this.updateTag}
            />
        </div>

        <div>
          <h1>2019</h1>
        </div>

        <div>
          <h1>2018</h1>
        </div>

        <div>
          <h1>2017</h1>
        </div>

        <div>
          <h1>2016</h1>
        </div>
      </div>
    )
  }
}

export default App;