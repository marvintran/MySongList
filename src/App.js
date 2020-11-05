import React from 'react';
import SearchBar from "./components/SearchBar";
import MonthList from "./components/MonthList";
import CurrentFilters from "./components/CurrentFilters";
import FilterOptions from "./components/FilterOptions";
import Container from 'react-bootstrap/Container';

import january2020 from './data/2020_01_january.json';
import february2020 from './data/2020_02_february.json';
import march2020 from './data/2020_03_march.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      filterGenre: {
        ballad: false,
        indie: false,
        rock: false,
        pop: false,
        acoustic: false,
        jazz: false
        },
      filterTag: {
        korean: false,
        japanese: false,
        english: false,
        femaleVocalist: false,
        maleVocalist: false,
        girlGroup: false,
        boyGroup: false,
        ost: false
      },
      toggleYear2020: true,
      toggleYear2019: true,
      toggleYear2018: true,
      toggleYear2017: true
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.updateGenre = this.updateGenre.bind(this);
    this.updateTag = this.updateTag.bind(this);
    this.removeGenre = this.removeGenre.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.selectedFilters = this.selectedFilters.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  //https://stackoverflow.com/a/53986441
  //https://stackoverflow.com/a/43639228
  updateGenre(value) {
    this.setState(prevState => ({
      filterGenre: {
        ...prevState.filterGenre,
        [value]: !this.state.filterGenre[value]
      }
    }))
  }

  updateTag(value) {
    this.setState(prevState => ({
      filterTag: {
        ...prevState.filterTag,
        [value]: !this.state.filterTag[value]
      }
    }))
  }

  removeGenre(value) {
    this.setState(prevState => ({
      filterGenre: {
        ...prevState.filterGenre,
        [value]: false
      }
    }))
  }

  removeTag(value) {
    this.setState(prevState => ({
      filterTag: {
        ...prevState.filterTag,
        [value]: false
      }
    }))
  }

  selectedFilters() {
    const genres = Object.keys(this.state.filterGenre)
      .filter((genre) => this.state.filterGenre[genre] === true)
      .map((genre) => { return genre });

    const tags = Object.keys(this.state.filterTag)
      .filter((tag) => this.state.filterTag[tag] === true)
      .map((tag) => { return tag });

    return [genres, tags];
  }

  render() {
    return (
      <Container>
        <Container>
          <SearchBar
            filterText={this.state.filterText}
            onFilterTextChange={this.handleFilterTextChange}
          />
          <CurrentFilters
            filterOptions={this.selectedFilters()}
            removeGenres={this.removeGenre}
            removeTags={this.removeTag}
          />
          <FilterOptions
            updateGenres={this.updateGenre}
            updateTags={this.updateTag}
          />
        </Container>

        <Container>
          <h1 onClick={() =>
            this.setState({
              toggleYear2020: !this.state.toggleYear2020
            })}
          >
            2020
          </h1>
          { this.state.toggleYear2020
            ? <React.Fragment>
                <MonthList
                  month={"March 2020"}
                  songs={march2020.songs}
                  filterText={this.state.filterText}
                  filterOptions={this.selectedFilters()}
                  updateGenres={this.updateGenre}
                  updateTags={this.updateTag}
                />
                <MonthList
                  month={"February 2020"}
                  songs={february2020.songs}
                  filterText={this.state.filterText}
                  filterOptions={this.selectedFilters()}
                  updateGenres={this.updateGenre}
                  updateTags={this.updateTag}
                />
                <MonthList
                  month={"January 2020"}
                  songs={january2020.songs}
                  filterText={this.state.filterText}
                  filterOptions={this.selectedFilters()}
                  updateGenres={this.updateGenre}
                  updateTags={this.updateTag}
                />
              </React.Fragment>
            : null
          }
        </Container>

        <Container>
          <h1 onClick={() =>
            this.setState({
              toggleYear2019: !this.state.toggleYear2019
            })}
          >
            2019
          </h1>
          { this.state.toggleYear2019
            ? <React.Fragment>

              </React.Fragment>
            : null
          }
        </Container>

        <Container>
          <h1 onClick={() =>
            this.setState({
              toggleYear2018: !this.state.toggleYear2018
            })}
          >
            2018
          </h1>
          { this.state.toggleYear2018
            ? <React.Fragment>

              </React.Fragment>
            : null
          }
        </Container>

        <Container>
          <h1 onClick={() =>
            this.setState({
              toggleYear2017: !this.state.toggleYear2017
            })}
          >
            2017
          </h1>
          { this.state.toggleYear2017
            ? <React.Fragment>

              </React.Fragment>
            : null
          }
        </Container>

        <Container>
          <h1 onClick={() =>
            this.setState({
              toggleYear2016: !this.state.toggleYear2016
            })}
          >
            2016
          </h1>
          { this.state.toggleYear2016
            ? <React.Fragment>

              </React.Fragment>
            : null
          }
        </Container>
      </Container>
    )
  }
}

export default App;