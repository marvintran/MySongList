//https://levelup.gitconnected.com/refactoring-a-complex-react-component-5-best-practices-to-write-efficient-and-readable-components-b0d06f4f22b4

import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import FilterButton from "./FilterButton";
import { FilterContext } from './filter-context';

const Filters = () => {
  const filters = useContext(FilterContext);

  return (
    <div>
      <p>Genres:</p>
      <div>
        <FilterButton title="Ballad" action={filters.updateGenre} active={filters.filterGenre.ballad}/>{' '}
        <FilterButton title="Indie" action={filters.updateGenre} active={filters.filterGenre.indie}/>{' '}
        <FilterButton title="Rock" action={filters.updateGenre} active={filters.filterGenre.rock}/>{' '}
        <FilterButton title="Pop" action={filters.updateGenre} active={filters.filterGenre.pop}/>{' '}
        <FilterButton title="Acoustic" action={filters.updateGenre} active={filters.filterGenre.acoustic}/>{' '}
        <FilterButton title="Jazz" action={filters.updateGenre} active={filters.filterGenre.jazz}/>{' '}
        <FilterButton title="R&B" action={filters.updateGenre} active={filters.filterGenre.rnb}/>{' '}
        <FilterButton title="Soul" action={filters.updateGenre} active={filters.filterGenre.soul}/>
      </div>
      <p>Tags:</p>
      <div>
        <FilterButton title="Korean" action={filters.updateTag} active={filters.filterTag.korean}/>{' '}
        <FilterButton title="Japanese" action={filters.updateTag} active={filters.filterTag.japanese}/>{' '}
        <FilterButton title="English" action={filters.updateTag} active={filters.filterTag.english}/>{' '}
        <FilterButton title="Female Vocalist" action={filters.updateTag} active={filters.filterTag.femaleVocalist}/>{' '}
        <FilterButton title="Male Vocalist" action={filters.updateTag} active={filters.filterTag.maleVocalist}/>{' '}
        <FilterButton title="Girl Group" action={filters.updateTag} active={filters.filterTag.girlGroup}/>{' '}
        <FilterButton title="OST" action={filters.updateTag} active={filters.filterTag.ost}/>{' '}
        <FilterButton title="Live" action={filters.updateTag} active={filters.filterTag.live}/>
      </div>
    </div>
  )
}

Filters.propTypes = {
  updateGenres: PropTypes.func,
  stateGenre: PropTypes.func,
  updateTags: PropTypes.func,
  stateTag: PropTypes.func,
};

export default Filters;