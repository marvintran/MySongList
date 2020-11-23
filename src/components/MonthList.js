import React, { useState } from 'react';
import '../stylesheets/MonthList.css';
import Songs from './Songs'
import Collapse from 'react-bootstrap/Collapse';
import LazyLoad from 'react-lazyload';
import { Waypoint } from 'react-waypoint';

const MonthList = ({ month, songs, id, action }) => {
  const [monthShowing, setMonthShowing] = useState(true);

  const songList = songs.map((song) => {
    return (
      <LazyLoad>
        <Songs song={song}/>
      </LazyLoad>
    )});

  return (
    <React.Fragment>
      <Waypoint onEnter={() => {action(month)}} bottomOffset={window.innerHeight-1}>
        <div>
          <h2 id={id} className="header-month" onClick={() => setMonthShowing(!monthShowing)}>{month}</h2>
          <Collapse in={monthShowing}>
            <div>
              {songList}
            </div>
          </Collapse>
        </div>
      </Waypoint>
    </React.Fragment>
  )
}

export default MonthList;