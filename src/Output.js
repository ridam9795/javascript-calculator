import React from 'react';
class Output extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div className='output display' id='display'>{this.props.output}</div>
    }
  }
  export default Output;