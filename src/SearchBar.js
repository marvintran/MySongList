import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  render() {
    return (
      <div>
        Search:
        <form>
          <input
            type="text"
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
            />
        </form>
      </div>
    )
  }
}

export default SearchBar;