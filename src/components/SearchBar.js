import React from 'react';
import Form from 'react-bootstrap/Form'

const SearchBar = ({ filterText, onFilterTextChange }) => {
  return (
    <React.Fragment>
      <Form>
        <Form.Group>
          <Form.Label>Search</Form.Label>
          <Form.Control type="text"
                        placeholder="Artist or Title"
                        value={filterText}
                        onChange={event => onFilterTextChange(event.target.value)}
          />
        </Form.Group>
      </Form>
    </React.Fragment>
  )
}

export default SearchBar;