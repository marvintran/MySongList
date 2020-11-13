import React, { useState } from 'react';
import SearchBar from "./components/SearchBar";
import MonthList from "./components/MonthList";
import CurrentFilters from "./components/CurrentFilters";
import Filters from "./components/Filters";
import Container from 'react-bootstrap/Container';
import Collapse from 'react-bootstrap/Collapse';

import january2020 from './data/2020_01_january.json';
import february2020 from './data/2020_02_february.json';
import march2020 from './data/2020_03_march.json';

// https://web.dev/virtualize-long-lists-react-window/
// memoize

const App = () => {
  const [toggleYear2020, setYear2020] = useState(true);
  const [toggleYear2019, setYear2019] = useState(true);
  const [toggleYear2018, setYear2018] = useState(true);
  const [toggleYear2017, setYear2017] = useState(true);
  const [toggleYear2016, setYear2016] = useState(true);

  return (
    <Container>
      <Container>
        <SearchBar/>
        <CurrentFilters/>
        <Filters/>
      </Container>

      <Container>
        <h1 onClick={() => setYear2020(!toggleYear2020)}>
          2020
        </h1>
        <Collapse in={toggleYear2020}>
          <div>
            <MonthList
              month={"March 2020"}
              songs={march2020.songs}
            />
            <MonthList
              month={"February 2020"}
              songs={february2020.songs}
            />
            <MonthList
              month={"January 2020"}
              songs={january2020.songs}
            />
          </div>
        </Collapse>
      </Container>

      <Container>
        <h1 onClick={() => setYear2019(!toggleYear2019)}>
          2019
        </h1>
        { toggleYear2019
          ? <React.Fragment>

          </React.Fragment>
          : null
        }
      </Container>

      <Container>
        <h1 onClick={() => setYear2018(!toggleYear2018)}>
          2018
        </h1>
        { toggleYear2018
          ? <React.Fragment>

          </React.Fragment>
          : null
        }
      </Container>

      <Container>
        <h1 onClick={() => setYear2017(!toggleYear2017)}>
          2017
        </h1>
        { toggleYear2017
          ? <React.Fragment>

          </React.Fragment>
          : null
        }
      </Container>

      <Container>
        <h1 onClick={() => setYear2016(!toggleYear2016)}>
          2016
        </h1>
        { toggleYear2016
          ? <React.Fragment>

          </React.Fragment>
          : null
        }
      </Container>
    </Container>
  )
}

export default App;