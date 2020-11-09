import React, { useState } from 'react';
import Songs from './Songs'
import Collapse from 'react-bootstrap/Collapse';

const MonthList = ({ month, songs, filterText, filterOptions, updateGenres, updateTags }) => {
  const [monthShowing, setMonthShowing] = useState(true);

  const songList = songs.map((song) => {
    return (
      <Songs
        song={song}
        filterText={filterText}
        filterOptions={filterOptions}
        updateGenres={updateGenres}
        updateTags={updateTags}
      />
    )});

  return (
    <React.Fragment>
      <h2 onClick={() => setMonthShowing(!monthShowing)}>{month}</h2>
      <Collapse in={monthShowing}>
        <div>
          {songList}
        </div>
      </Collapse>
    </React.Fragment>
  )
}

export default MonthList;