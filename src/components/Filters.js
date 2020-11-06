//https://levelup.gitconnected.com/refactoring-a-complex-react-component-5-best-practices-to-write-efficient-and-readable-components-b0d06f4f22b4

import React from 'react';
import PropTypes from 'prop-types';
import FilterButton from "./FilterButton";

const Filters = ({updateGenres, stateGenre, updateTags, stateTag}) => {
  return (
    <div>
      <p>Genres:</p>
      <div>
        <FilterButton title="Ballad" action={updateGenres} active={stateGenre.ballad}/>{' '}
        <FilterButton title="Indie" action={updateGenres} active={stateGenre.indie}/>{' '}
        <FilterButton title="Rock" action={updateGenres} active={stateGenre.rock}/>{' '}
        <FilterButton title="Pop" action={updateGenres} active={stateGenre.pop}/>{' '}
        <FilterButton title="Acoustic" action={updateGenres} active={stateGenre.acoustic}/>{' '}
        <FilterButton title="Jazz" action={updateGenres} active={stateGenre.jazz}/>
      </div>
      <p>Tags:</p>
      <div>
        <FilterButton title="Korean" action={updateTags} active={stateTag.korean}/>{' '}
        <FilterButton title="Japanese" action={updateTags} active={stateTag.japanese}/>{' '}
        <FilterButton title="English" action={updateTags} active={stateTag.english}/>{' '}
        <FilterButton title="Female Vocalist" action={updateTags} active={stateTag.femaleVocalist}/>{' '}
        <FilterButton title="Male Vocalist" action={updateTags} active={stateTag.maleVocalist}/>{' '}
        <FilterButton title="Girl Group" action={updateTags} active={stateTag.girlGroup}/>{' '}
        <FilterButton title="OST" action={updateTags} active={stateTag.ost}/>{' '}
        <FilterButton title="Korean" action={updateTags} active={stateTag.korean}/>
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