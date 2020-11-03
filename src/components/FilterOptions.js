import React from 'react';
import Button from 'react-bootstrap/Button'

class FilterOptions extends React.Component {
  genreClick(value) {
    this.props.updateGenres(value);
  }

  tagClick(value) {
    this.props.updateTags(value);
  }

  render() {
    return (
      <div>
        Filter Options:
        <div>
          Genres:
          <Button onClick={() => this.genreClick("ballad")} variant="outline-primary">Ballad</Button>{' '}
          <Button onClick={() => this.genreClick("indie")} variant="outline-primary">Indie</Button>{' '}
          <Button onClick={() => this.genreClick("rock")} variant="outline-primary">Rock</Button>{' '}
          <Button onClick={() => this.genreClick("pop")} variant="outline-primary">Pop</Button>{' '}
          <Button onClick={() => this.genreClick("acoustic")} variant="outline-primary">Acoustic</Button>{' '}
          <Button onClick={() => this.genreClick("jazz")} variant="outline-primary">Jazz</Button>
        </div>
        <div>
          Tags:
          <Button onClick={() => this.tagClick("korean")} variant="outline-primary">Korean</Button>{' '}
          <Button onClick={() => this.tagClick("japanese")} variant="outline-primary">Japanese</Button>{' '}
          <Button onClick={() => this.tagClick("english")} variant="outline-primary">English</Button>{' '}
          <Button onClick={() => this.tagClick("femaleVocalist")} variant="outline-primary">Female Vocalist</Button>{' '}
          <Button onClick={() => this.tagClick("maleVocalist")} variant="outline-primary">Male Vocalist</Button>{' '}
          <Button onClick={() => this.tagClick("girlGroup")} variant="outline-primary">Girl Group</Button>{' '}
          <Button onClick={() => this.tagClick("boyGroup")} variant="outline-primary">Boy Group</Button>{' '}
          <Button onClick={() => this.tagClick("ost")} variant="outline-primary">OST</Button>
        </div>
      </div>
    )
  }
}

export default FilterOptions;