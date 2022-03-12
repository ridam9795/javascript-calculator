import React from 'react';

class Formula extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div className='formula display'>{this.props.formula}</div>
    }
  }
  
export default Formula;  