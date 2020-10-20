import React from 'react';
import SearchBar from "./SearchBar";
import YearList from "./YearList";
import january2020 from './data/january2020.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
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
        <SearchBar filterText={this.state.filterText}
                   onFilterTextChange={this.handleFilterTextChange}/>
        <YearList year={'2020'} january2020={january2020} filterText={this.state.filterText}/>
      </div>
    )
  }
}

export default App;