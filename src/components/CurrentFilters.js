import React, { useContext } from 'react';
import "../stylesheets/CurrentFilters.css";
import FilterButton from "./FilterButton";
import { FilterContext } from './filter-context';

// https://stackoverflow.com/a/7225450
function camelCaseToNormal(value) {
  if(value === "ost")
    return "OST";
  else if(value === "rnb")
    return "R&B";

  let result = value.replace( /([A-Z])/g, " $1" );
  return result.charAt(0).toUpperCase() + result.slice(1);
}

const CurrentFilters = () => {
  const filters = useContext(FilterContext);

  const genres = filters.selectedFilters()[0].map((genre) => {
    return (
      <React.Fragment>
        <FilterButton
          title={camelCaseToNormal(genre)}
          action={filters.removeGenre}
          active={true}
          currentFilter={true}
        />{' '}
      </React.Fragment>);
  });

  const tags = filters.selectedFilters()[1].map((tag) => {
    return (
      <React.Fragment>
        <FilterButton
          title={camelCaseToNormal(tag)}
          action={filters.removeTag}
          active={true}
          currentFilter={true}
        />{' '}
      </React.Fragment>);
  });

  return (
    <div className="current-filters">
      {genres}
      {tags}
    </div>
  )
}

export default CurrentFilters;