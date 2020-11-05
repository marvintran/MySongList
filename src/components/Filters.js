//https://levelup.gitconnected.com/refactoring-a-complex-react-component-5-best-practices-to-write-efficient-and-readable-components-b0d06f4f22b4

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'

const FilterItem = ({ action, active, title}) => {
  let variant = "outline-primary";
  return (
    <Button onClick={() => action(title)} variant={variant} active={active}>{title}</Button>
  )
}

const Filters = ({updateGenres, stateGenre, updateTags, stateTag}) => {
  return (
    <div>
      <p>Genres:</p>
      <div>
        <FilterItem title="Ballad" action={updateGenres} active={stateGenre.ballad}/>{' '}
        <FilterItem title="Indie" action={updateGenres} active={stateGenre.indie}/>{' '}
        <FilterItem title="Rock" action={updateGenres} active={stateGenre.rock}/>{' '}
        <FilterItem title="Pop" action={updateGenres} active={stateGenre.pop}/>{' '}
        <FilterItem title="Acoustic" action={updateGenres} active={stateGenre.acoustic}/>{' '}
        <FilterItem title="Jazz" action={updateGenres} active={stateGenre.jazz}/>
      </div>
      <p>Tags:</p>
      <div>
        <FilterItem title="Korean" action={updateTags} active={stateTag.korean}/>{' '}
        <FilterItem title="Japanese" action={updateTags} active={stateTag.japanese}/>{' '}
        <FilterItem title="English" action={updateTags} active={stateTag.english}/>{' '}
        <FilterItem title="Female Vocalist" action={updateTags} active={stateTag.femaleVocalist}/>{' '}
        <FilterItem title="Male Vocalist" action={updateTags} active={stateTag.maleVocalist}/>{' '}
        <FilterItem title="Girl Group" action={updateTags} active={stateTag.girlGroup}/>{' '}
        <FilterItem title="OST" action={updateTags} active={stateTag.ost}/>{' '}
        <FilterItem title="Korean" action={updateTags} active={stateTag.korean}/>
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