import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(event) {
    this.props.onFilterTextChange(event.target.value);
  }

  // https://reactjs.org/docs/forms.html#handling-multiple-inputs
  render() {
    return (
      <React.Fragment>
        Search:
        <form>
          <input
            type="text"
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
            />
        </form>
      </React.Fragment>
    )
  }
}

export default SearchBar;