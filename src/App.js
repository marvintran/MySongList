import React from 'react';
import SearchBar from "./SearchBar";
import MonthList from "./MonthList";

import january2020 from './data/january2020.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
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
          <SearchBar filterText={this.state.filterText}
                     onFilterTextChange={this.handleFilterTextChange}/>
        </div>

        <div>
          <h1>2020</h1>
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