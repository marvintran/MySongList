import React, { useState } from 'react';
import Songs from './Songs'
import Collapse from 'react-bootstrap/Collapse';
import LazyLoad from 'react-lazyload';

const MonthList = ({ month, songs }) => {
  const [monthShowing, setMonthShowing] = useState(true);

  const songList = songs.map((song) => {
    return (
      <LazyLoad>
        <Songs song={song}/>
      </LazyLoad>
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