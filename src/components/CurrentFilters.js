import React from 'react';
import Button from 'react-bootstrap/Button'
import { FiX } from "react-icons/fi";

class CurrentFilters extends React.Component {
  genreClick(value) {
    this.props.removeGenres(value);
  }

  tagClick(value) {
    this.props.removeTags(value);
  }

  // https://stackoverflow.com/a/7225450
  camelCaseToNormal(value) {
    if(value === "ost")
      return "OST";
    let result = value.replace( /([A-Z])/g, " $1" );
    let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  }

  render() {
    const genres = this.props.filterOptions[0].map((genre) => {
      return (
        <React.Fragment>
          <Button onClick={() => this.genreClick(genre)} variant="outline-primary">
            {this.camelCaseToNormal(genre)}<FiX/>
          </Button>{' '}
        </React.Fragment>);
    });

    const tags = this.props.filterOptions[1].map((tag) => {
      return (
        <React.Fragment>
          <Button onClick={() => this.tagClick(tag)} variant="outline-primary">
            {this.camelCaseToNormal(tag)}<FiX/>
          </Button>{' '}
        </React.Fragment>);
    });

    return (
      <div>
        Current Filters:
        {genres}
        {tags}
      </div>
    )
  }
}

export default CurrentFilters;