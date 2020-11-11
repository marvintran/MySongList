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

// https://www.digitalocean.com/community/tutorials/how-to-share-state-across-react-components-with-context
const genres = {
  ballad: false,
  indie: false,
  rock: false,
  pop: false,
  acoustic: false,
  jazz: false
}

const tags = {
  korean: false,
  japanese: false,
  english: false,
  femaleVocalist: false,
  maleVocalist: false,
  girlGroup: false,
  boyGroup: false,
  ost: false
}

const App = () => {
  const [toggleYear2020, setYear2020] = useState(true);
  const [toggleYear2019, setYear2019] = useState(true);
  const [toggleYear2018, setYear2018] = useState(true);
  const [toggleYear2017, setYear2017] = useState(true);
  const [toggleYear2016, setYear2016] = useState(true);
  const [filterText, setFilterText] = useState('');
  const [filterGenre, setGenre] = useState(genres);
  const [filterTag, setTag] = useState(tags);

  // Dynamic State, use computed Property
  // https://stackoverflow.com/a/53986441

  // Updating nested state object
  // https://stackoverflow.com/a/43639228

  // https://daveceddia.com/usestate-hook-examples/
  function updateGenre(value) {
    let toCamelCase = value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

    setGenre({
      ...filterGenre,
      [toCamelCase]: !filterGenre[toCamelCase]
    });
  }

  function updateTag(value) {
    let toCamelCase = value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    if(value === "OST")
      toCamelCase = "ost";

    setTag({
      ...filterTag,
      [toCamelCase]: !filterTag[toCamelCase]
    });
  }

  function removeGenre(value) {
    let toCamelCase = value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    setGenre({
      ...filterGenre,
      [toCamelCase]: false
    });
  }

  function removeTag(value) {
    let toCamelCase = value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    setTag({
      ...filterTag,
      [toCamelCase]: false
    });
  }

  function selectedFilters() {
    const genres = Object.keys(filterGenre)
      .filter((genre) => filterGenre[genre] === true)
      .map((genre) => { return genre });

    const tags = Object.keys(filterTag)
      .filter((tag) => filterTag[tag] === true)
      .map((tag) => { return tag });

    return [genres, tags];
  }

  return (
    <Container>
      <Container>
        <SearchBar
          filterText={filterText}
          onFilterTextChange={setFilterText}
        />
        <CurrentFilters
          filterOptions={selectedFilters()}
          removeGenres={removeGenre}
          removeTags={removeTag}
        />
        <Filters
          updateGenres={updateGenre}
          updateTags={updateTag}
          stateGenre={filterGenre}
          stateTag={filterTag}
        />
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
              filterText={filterText}
              filterOptions={selectedFilters()}
              updateGenres={updateGenre}
              updateTags={updateTag}
            />
            <MonthList
              month={"February 2020"}
              songs={february2020.songs}
              filterText={filterText}
              filterOptions={selectedFilters()}
              updateGenres={updateGenre}
              updateTags={updateTag}
            />
            <MonthList
              month={"January 2020"}
              songs={january2020.songs}
              filterText={filterText}
              filterOptions={selectedFilters()}
              updateGenres={updateGenre}
              updateTags={updateTag}
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