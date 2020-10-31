import React from 'react';

class CurrentFilters extends React.Component {
  render() {


    return (
      <div>
        Current Filters:
        { this.props.filterGenre.ballad
          ? <button>Ballad</button>
          : null
        }
        { this.props.filterGenre.indie
          ? <button>Indie</button>
          : null
        }
        { this.props.filterGenre.rock
          ? <button>Rock</button>
          : null
        }
        { this.props.filterGenre.popSong
          ? <button>Pop</button>
          : null
        }
        { this.props.filterGenre.acoustic
          ? <button>Acoustic</button>
          : null
        }
        { this.props.filterGenre.jazz
          ? <button>Jazz</button>
          : null
        }

        { this.props.filterTag.korean
          ? <button>Korean</button>
          : null
        }
        { this.props.filterTag.japanese
          ? <button>Japanese</button>
          : null
        }
        { this.props.filterTag.english
          ? <button>English</button>
          : null
        }
        { this.props.filterTag.femaleVocalist
          ? <button>Female Vocalist</button>
          : null
        }
        { this.props.filterTag.maleVocalist
          ? <button>Male Vocalist</button>
          : null
        }
        { this.props.filterTag.girlGroup
          ? <button>Girl Group</button>
          : null
        }
        { this.props.filterTag.boyGroup
          ? <button>Boy Group</button>
          : null
        }
        { this.props.filterTag.ost
          ? <button>OST</button>
          : null
        }
      </div>
    )
  }
}

export default CurrentFilters;