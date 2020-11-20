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
import Nav from 'react-bootstrap/Nav';

import january2020 from './data/2020_01_january.json';
import february2020 from './data/2020_02_february.json';
import march2020 from './data/2020_03_march.json';
import {Waypoint} from "react-waypoint";

const App = () => {
  const [toggleYear2020, setYear2020] = useState(true);
  const [toggleYear2019, setYear2019] = useState(true);
  const [toggleYear2018, setYear2018] = useState(true);
  const [toggleYear2017, setYear2017] = useState(true);
  const [toggleYear2016, setYear2016] = useState(true);

  const [currMarker, setMarker] = useState("2020");

  let bottomOffSet = 602;

  return (
      <Container fluid>
        <Row>
          <Col>
            <Nav defaultActiveKey="#2020" className="nav-bar">
              <NavLink title={"2020"} currMarker={currMarker}/>
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
            </Nav>
          </Col>
          <Col md="auto">
            <Waypoint onEnter={() => {setMarker("2020")}} bottomOffset={bottomOffSet}>
              <div>
                <h1 id="2020" onClick={() => setYear2020(!toggleYear2020)}>
                  2020
                </h1>
              </div>
            </Waypoint>
            <Collapse in={toggleYear2020}>
              <div>
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
              <div>
                <h1 id="2019" onClick={() => setYear2019(!toggleYear2019)}>
                  2019
                </h1>
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
              <div>
                <h1 id="2018" onClick={() => setYear2018(!toggleYear2018)}>
                  2018
                </h1>
              </div>
            </Waypoint>
            <Collapse in={toggleYear2018}>
              <div>

              </div>
            </Collapse>

            <Waypoint onEnter={() => {setMarker("2017")}} bottomOffset={bottomOffSet}>
              <div>
                <h1 id="2017" onClick={() => setYear2017(!toggleYear2017)}>
                  2017
                </h1>
              </div>
            </Waypoint>
            <Collapse in={toggleYear2017}>
              <div>

              </div>
            </Collapse>

            <Waypoint onEnter={() => {setMarker("2016")}} bottomOffset={bottomOffSet}>
              <div>
                <h1 id="2016" onClick={() => setYear2016(!toggleYear2016)}>
                  2016
                </h1>
              </div>
            </Waypoint>
            <Collapse in={toggleYear2016}>
              <div>

              </div>
            </Collapse>
          </Col>
          <Col>
            <div className="filters">
              <SearchBar/>
              <CurrentFilters/>
              <Filters/>
            </div>
          </Col>
        </Row>
      </Container>
  )
}

export default App;