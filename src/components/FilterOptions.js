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
        <p>Genres:</p>
        <div>
          <Button onClick={() => this.genreClick("ballad")} variant="outline-primary" active={this.props.stateGenre.ballad}>Ballad</Button>{' '}
          <Button onClick={() => this.genreClick("indie")} variant="outline-primary" active={this.props.stateGenre.indie}>Indie</Button>{' '}
          <Button onClick={() => this.genreClick("rock")} variant="outline-primary" active={this.props.stateGenre.rock}>Rock</Button>{' '}
          <Button onClick={() => this.genreClick("pop")} variant="outline-primary" active={this.props.stateGenre.pop}>Pop</Button>{' '}
          <Button onClick={() => this.genreClick("acoustic")} variant="outline-primary" active={this.props.stateGenre.acoustic}>Acoustic</Button>{' '}
          <Button onClick={() => this.genreClick("jazz")} variant="outline-primary" active={this.props.stateGenre.jazz}>Jazz</Button>
        </div>
        <p>Tags:</p>
        <div>
          <Button onClick={() => this.tagClick("korean")} variant="outline-primary" active={this.props.stateTag.korean}>Korean</Button>{' '}
          <Button onClick={() => this.tagClick("japanese")} variant="outline-primary" active={this.props.stateTag.japanese}>Japanese</Button>{' '}
          <Button onClick={() => this.tagClick("english")} variant="outline-primary" active={this.props.stateTag.english}>English</Button>{' '}
          <Button onClick={() => this.tagClick("femaleVocalist")} variant="outline-primary" active={this.props.stateTag.femaleVocalist}>Female Vocalist</Button>{' '}
          <Button onClick={() => this.tagClick("maleVocalist")} variant="outline-primary" active={this.props.stateTag.maleVocalist}>Male Vocalist</Button>{' '}
          <Button onClick={() => this.tagClick("girlGroup")} variant="outline-primary" active={this.props.stateTag.girlGroup}>Girl Group</Button>{' '}
          <Button onClick={() => this.tagClick("boyGroup")} variant="outline-primary" active={this.props.stateTag.boyGroup}>Boy Group</Button>{' '}
          <Button onClick={() => this.tagClick("ost")} variant="outline-primary" active={this.props.stateTag.ost}>OST</Button>
        </div>
      </div>
    )
  }
}

export default FilterOptions;