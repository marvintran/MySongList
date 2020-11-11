import React from 'react';
import FilterButton from "./FilterButton";

// https://stackoverflow.com/a/7225450
function camelCaseToNormal(value) {
  if(value === "ost")
    return "OST";
  let result = value.replace( /([A-Z])/g, " $1" );
  let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
}

const CurrentFilters = ({ filterOptions, removeGenres, removeTags }) => {
  const genres = filterOptions[0].map((genre) => {
    return (
      <React.Fragment>
        <FilterButton
          title={camelCaseToNormal(genre)}
          action={removeGenres}
          active={true}
          currentFilter={true}
        />{' '}
      </React.Fragment>);
  });

  const tags = filterOptions[1].map((tag) => {
    return (
      <React.Fragment>
        <FilterButton
          title={camelCaseToNormal(tag)}
          action={removeTags}
          active={true}
          currentFilter={true}
        />{' '}
      </React.Fragment>);
  });

  return (
    <div>
      {genres}
      {tags}
    </div>
  )
}

export default CurrentFilters;