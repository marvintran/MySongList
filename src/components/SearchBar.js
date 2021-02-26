import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form'
import { FilterContext } from './filter-context';

const SearchBar = () => {
  const filters = useContext(FilterContext);

  return (
    <React.Fragment>
      <Form>
        <Form.Group>
          <Form.Label><h4>Search</h4></Form.Label>
          <Form.Control type="text"
                        placeholder="Artist or Title"
                        value={filters.filterText}
                        onChange={event => filters.setFilterText(event.target.value)}
          />
        </Form.Group>
      </Form>
    </React.Fragment>
  )
}

export default SearchBar;