import React from 'react';
import MonthList from "./MonthList";

class YearList extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.year}</h1>
        <h2>January {this.props.year}</h2>
        <MonthList songs={this.props.january2020.songs} filterText={this.props.filterText}/>
      </div>
    )
  }
}

export default YearList;