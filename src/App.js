import React, { useState } from 'react';
import './App.css';

import NavLink from './components/NavLink';
import MonthList from './components/MonthList';
import SearchBar from './components/SearchBar';
import CurrentFilters from './components/CurrentFilters';
import Filters from './components/Filters';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';

import january2020 from './data/2020_01_january.json';
import february2020 from './data/2020_02_february.json';
import march2020 from './data/2020_03_march.json';
import april2020 from './data/2020_04_april.json';
import {Waypoint} from "react-waypoint";

const App = () => {
  const [toggleYear2021, setYear2021] = useState(true);
  const [toggleYear2020, setYear2020] = useState(true);
  const [toggleYear2019, setYear2019] = useState(true);
  const [toggleYear2018, setYear2018] = useState(true);
  const [toggleYear2017, setYear2017] = useState(true);
  const [toggleYear2016, setYear2016] = useState(true);

  const [currMarker, setMarker] = useState("2020");

  let bottomOffSet = window.innerHeight-1;

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col className="nav-wrapper">
            <div className="nav-bar">
              <NavLink title={"2021"} currMarker={currMarker}/>
              <NavLink title={"2020"} currMarker={currMarker}/>
              <NavLink title={"April 2020"} currMarker={currMarker} className={"month"}/>
              <NavLink title={"March 2020"} currMarker={currMarker} className={"month"}/>
              <NavLink title={"February 2020"} currMarker={currMarker} className={"month"}/>
              <NavLink title={"January 2020"} currMarker={currMarker} className={"month"}/>
              <NavLink title={"2019"} currMarker={currMarker}/>
              <NavLink title={"March 2019"} currMarker={currMarker} className={"month"}/>
              <NavLink title={"February 2019"} currMarker={currMarker} className={"month"}/>
              <NavLink title={"January 2019"} currMarker={currMarker} className={"month"}/>
              <NavLink title={"2018"} currMarker={currMarker}/>
              <NavLink title={"2017"} currMarker={currMarker}/>
              <NavLink title={"2016"} currMarker={currMarker}/>
            </div>
          </Col>
          <Col className="content">

            <Waypoint onEnter={() => {setMarker("2021")}} bottomOffset={bottomOffSet}>
              <div className="header-year">
                <h1 id="2021" >
                  2021
                </h1>
                <p onClick={() => setYear2021(!toggleYear2021)} className="minimize">
                  { toggleYear2021
                    ? "Hide"
                    : "Show"
                  }
                </p>
              </div>
            </Waypoint>

            <Collapse in={toggleYear2021}>
              <div>
              </div>
            </Collapse>

            <Waypoint onEnter={() => {setMarker("2020")}} bottomOffset={bottomOffSet}>
              <div className="header-year">
                <h1 id="2020" >
                  2020
                </h1>
                <p onClick={() => setYear2020(!toggleYear2020)} className="minimize">
                  { toggleYear2020
                    ? "Hide"
                    : "Show"
                  }
                </p>
              </div>
            </Waypoint>

            <Collapse in={toggleYear2020}>
              <div>
                <MonthList
                  id={"april2020"}
                  month={"April 2020"}
                  songs={april2020.songs}
                  action={setMarker}
                />
                <MonthList
                  id={"march2020"}
                  month={"March 2020"}
                  songs={march2020.songs}
                  action={setMarker}
                />
                <MonthList
                  id={"february2020"}
                  month={"February 2020"}
                  songs={february2020.songs}
                  action={setMarker}
                />
                <MonthList
                  id={"january2020"}
                  month={"January 2020"}
                  songs={january2020.songs}
                  action={setMarker}
                />
              </div>
            </Collapse>

            <Waypoint onEnter={() => {setMarker("2019")}} bottomOffset={bottomOffSet}>
              <div className="header-year">
                <h1 id="2019" >
                  2019
                </h1>
                <p onClick={() => setYear2019(!toggleYear2019)} className="minimize">
                  { toggleYear2019
                    ? "Hide"
                    : "Show"
                  }
                </p>
              </div>
            </Waypoint>
            <Collapse in={toggleYear2019}>
              <div>
                <MonthList
                  id={"march2019"}
                  month={"March 2019"}
                  songs={march2020.songs}
                  action={setMarker}
                />
                <MonthList
                  id={"february2019"}
                  month={"February 2019"}
                  songs={february2020.songs}
                  action={setMarker}
                />
                <MonthList
                  id={"january2019"}
                  month={"January 2019"}
                  songs={january2020.songs}
                  action={setMarker}
                />
              </div>
            </Collapse>

            <Waypoint onEnter={() => {setMarker("2018")}} bottomOffset={bottomOffSet}>
              <div className="header-year">
                <h1 id="2018" >
                  2018
                </h1>
                <p onClick={() => setYear2018(!toggleYear2018)} className="minimize">
                  { toggleYear2018
                    ? "Hide"
                    : "Show"
                  }
                </p>
              </div>
            </Waypoint>
            <Collapse in={toggleYear2018}>
              <div>

              </div>
            </Collapse>

            <Waypoint onEnter={() => {setMarker("2017")}} bottomOffset={bottomOffSet}>
              <div className="header-year">
                <h1 id="2017" >
                  2017
                </h1>
                <p onClick={() => setYear2017(!toggleYear2017)} className="minimize">
                  { toggleYear2017
                    ? "Hide"
                    : "Show"
                  }
                </p>
              </div>
            </Waypoint>
            <Collapse in={toggleYear2017}>
              <div>

              </div>
            </Collapse>

            <Waypoint onEnter={() => {setMarker("2016")}} bottomOffset={bottomOffSet}>
              <div className="header-year">
                <h1 id="2016" >
                  2016
                </h1>
                <p onClick={() => setYear2016(!toggleYear2016)} className="minimize">
                  { toggleYear2016
                    ? "Hide"
                    : "Show"
                  }
                </p>
              </div>
            </Waypoint>
            <Collapse in={toggleYear2016}>
              <div>

              </div>
            </Collapse>
          </Col>
          <Col md="3" className="filters-wrapper">
            <div className="filters">
              <SearchBar/>
              <CurrentFilters/>
              <Filters/>
            </div>

          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default App;