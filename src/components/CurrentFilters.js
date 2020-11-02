import React from 'react';

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
      return <button onClick={() => this.genreClick(genre)}>{this.camelCaseToNormal(genre)}</button>
    });

    const tags = this.props.filterOptions[1].map((tag) => {
      return <button onClick={() => this.tagClick(tag)}>{this.camelCaseToNormal(tag)}</button>
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