import React from "react";

const isOperator = /[x/+‑]/,
  endsWithOperator = /[x+‑/]$/,
  endsWithNegativeSign = /\d[x/+‑]{1}‑$/,
  clearStyle = { background: '#ac3939' },
  operatorStyle = { background: '#666666' },
  equalsStyle = {
    background: '#004466',
    position: 'absolute',
    height: 130,
    bottom: 5
  };

  class Buttons extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (<div className='buttonContainer'>
        <button
          id="clear"
          onClick={this.props.reset}
          value="AC"
        >
          AC
        </button>
        <button
          id="divide" className='operator'
          onClick={this.props.operators}
          value="/"
        >
          /
        </button>
        <button
          id="multiply" className='operator'
          onClick={this.props.operators}
          value="x"
        >
          x
        </button>
        <button
          id="subtract" className='operator'
          onClick={this.props.operators}
          value="-"
        >
          -
        </button>
        <button
          id="add" className='operator'
          onClick={this.props.operators}
          value="+"
        >
          +
        </button>
        <button id="one"
          onClick={this.props.numbers}
          value="1">
          1
        </button>
        <button id="two"
          onClick={this.props.numbers}
          value="2">
          2
        </button>
        <button id="three"
          onClick={this.props.numbers}
          value="3">
          3
        </button>
        <button id="four"
          onClick={this.props.numbers}
          value="4">
          4
        </button>
        <button id="five"
          onClick={this.props.numbers}
          value="5">
          5
        </button>
        <button id="six"
          onClick={this.props.numbers}
          value="6">
          6
        </button>
        <button id="seven"
          onClick={this.props.numbers}
          value="7">
          7
        </button>
        <button id="eight"
          onClick={this.props.numbers}
          value="8">
          8
        </button>
        <button id="nine"
          onClick={this.props.numbers}
          value="9">
          9
        </button>
        <button
          id="zero"
          onClick={this.props.numbers}
          value="0"
        >
          0
        </button>
        <button id="decimal"
          onClick={this.props.decimal}
          value=".">
          .
        </button>
        <button
          id="equals"
          onClick={this.props.evaluate}
          value="="
        >
          =
        </button>
      </div>)
    }
  }
  
  export default Buttons;