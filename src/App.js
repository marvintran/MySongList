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
        ballad: true,
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
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
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
            filterGenre={this.state.filterGenre}
            filterTag={this.state.filterTag}
          />
          <FilterOptions

          />
        </div>

        <div>
          <h1>2020</h1>
          <h2>March 2020</h2>
            <MonthList songs={march2020.songs} filterText={this.state.filterText}/>
          <h2>February 2020</h2>
            <MonthList songs={february2020.songs} filterText={this.state.filterText}/>
          <h2>January 2020</h2>
            <MonthList songs={january2020.songs} filterText={this.state.filterText}/>
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