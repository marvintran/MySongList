import React from 'react';
import Form from 'react-bootstrap/Form'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(event) {
    this.props.onFilterTextChange(event.target.value);
  }

  render() {
    return (
      <React.Fragment>
        <Form>
          <Form.Group>
            <Form.Label>Search</Form.Label>
            <Form.Control type="text"
                          placeholder="Artist or Title"
                          value={this.props.filterText}
                          onChange={this.handleFilterTextChange}
            />
          </Form.Group>
        </Form>
      </React.Fragment>
    )
  }
}

export default SearchBar;