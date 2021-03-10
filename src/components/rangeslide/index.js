import React, { Component } from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
class RngSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 5,
      value2: 10,
      value3: 10,
      value4: {
        min: 5,
        max: 10,
      },
      value5: {
        min: 3,
        max: 7,
      },
    };
  }
  render() {
    return (
      <form className="form">
        <InputRange
          draggableTrack
          maxValue={20}
          minValue={0}
          onChange={value => this.setState({ value5: value })}
          value={this.state.value5} />
      </form>
    );
  }
}

export default RngSlider;