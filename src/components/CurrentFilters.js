import React from 'react';

class CurrentFilters extends React.Component {
  genreClick(value) {
    this.props.removeGenres(value);
  }
  tagClick(value) {
    this.props.removeTags(value);
  }

  render() {
    return (
      <div>
        Current Filters:
        { this.props.filterGenre.ballad
          ? <button onClick={() => this.genreClick("ballad")}>Ballad</button>
          : null
        }
        { this.props.filterGenre.indie
          ? <button onClick={() => this.genreClick("indie")}>Indie</button>
          : null
        }
        { this.props.filterGenre.rock
          ? <button onClick={() => this.genreClick("rock")}>Rock</button>
          : null
        }
        { this.props.filterGenre.popSong
          ? <button onClick={() => this.genreClick("popSong")}>Pop</button>
          : null
        }
        { this.props.filterGenre.acoustic
          ? <button onClick={() => this.genreClick("acoustic")}>Acoustic</button>
          : null
        }
        { this.props.filterGenre.jazz
          ? <button onClick={() => this.genreClick("jazz")}>Jazz</button>
          : null
        }

        { this.props.filterTag.korean
          ? <button onClick={() => this.tagClick("korean")}>Korean</button>
          : null
        }
        { this.props.filterTag.japanese
          ? <button onClick={() => this.tagClick("japanese")}>Japanese</button>
          : null
        }
        { this.props.filterTag.english
          ? <button onClick={() => this.tagClick("english")}>English</button>
          : null
        }
        { this.props.filterTag.femaleVocalist
          ? <button onClick={() => this.tagClick("femaleVocalist")}>Female Vocalist</button>
          : null
        }
        { this.props.filterTag.maleVocalist
          ? <button onClick={() => this.tagClick("maleVocalist")}>Male Vocalist</button>
          : null
        }
        { this.props.filterTag.girlGroup
          ? <button onClick={() => this.tagClick("girlGroup")}>Girl Group</button>
          : null
        }
        { this.props.filterTag.boyGroup
          ? <button onClick={() => this.tagClick("boyGroup")}>Boy Group</button>
          : null
        }
        { this.props.filterTag.ost
          ? <button onClick={() => this.tagClick("ost")}>OST</button>
          : null
        }
      </div>
    )
  }
}

export default CurrentFilters;