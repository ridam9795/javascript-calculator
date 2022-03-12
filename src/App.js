import './App.css';
import React  from 'react';
import Formula from './Formula';
import Output from './Output';
import Buttons from './Buttons';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      output: '0',
      formula: '',
      evaluated: false
    }
    this.reset = this.reset.bind(this);
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleEvaluate = this.handleEvaluate.bind(this);
  }
  //‑
  reset() {
    this.setState({
      output: '0',
      formula: ''
    })
  }

  maxDigitWarning() {
    let temp = this.state.output;
    this.setState({
      output: 'Digit Limit Reached'
    });
    setTimeout(() => this.setState({ output: temp }), 1000);
  }

  handleNumbers(e) {
    // eslint-disable-next-line eqeqeq
    if ((this.state.output == 0 && e.target.value == 0 && !(/^0/.test(this.state.output) && this.state.output.includes('.'))) || /Limit/.test(this.state.output)) {
      return;
    }
 
    if (this.state.output.length > 10) {
      this.maxDigitWarning();
      return;
    }

    if (this.state.evaluated) {
      this.setState({
        evaluated: false,
        output: e.target.value,
        formula: e.target.value
      })
      return;
    }

    let output;
    if(/^0/.test(this.state.output) && this.state.output.includes('.') ){
      output = this.state.output + e.target.value
    } else if(/^[-/*+0]/.test(this.state.output)){
      output = e.target.value
    }  else {
      output = this.state.output + e.target.value
    }
    
    this.setState({
      output: output,
      formula: this.state.formula + e.target.value
    });
  }

  handleOperators(e) {
    let value = e.target.value.replace('x', '*');
    let formula = this.state.formula;
    let operator = '';

    if ((formula === '' && value !== "-") || formula === '-') {
      return;
    }

    if (this.state.evaluated) {
      this.setState({
        evaluated: false,
        formula: this.state.output + value,
        output: value
      })
      return;
    }

    if (/\+-$|\*-$|\/-$|--$/.test(formula)) {
      operator = formula.slice(0, -2) + value;
      console.log('Block 1');
    } else if (/[-/*+]$/.test(formula) && value !== '-' && !/--$/.test(formula)) {
      operator = formula.slice(0, -1) + value;
      console.log('Block 2');
    } else if (/[-/*+]$/.test(formula) && value === '-' && !/--$/.test(formula)) {
      operator = formula + value;
      console.log('Block 3');
    } else if (!/[-/*+]$/.test(formula)) {
      operator = formula + value;
      console.log('Block 4');
    } else
    // if(/[-]$/.test(formula) && value != '-') {
    //   operator = formula.slice(0, -1) + value;
    //   console.log('Block 5');
    // } else if(/[-]$/.test(formula) && value == '-' && !/--$/.test(formula)) {
    //   operator = formula + value;
    //   console.log('Block 6');
    // } else 
    {
      operator = 'Syntax Error'
      console.log('Syntax Error');
    }

    this.setState({
      output: value,
      formula: operator
      // /[-/*+]$/.test(formula) ? formula.slice(0, -1) + value : 
    })
  }

  handleDecimal(e) {
    if (this.state.output.includes('.')) {
      return;
    }
    this.setState({
      output: this.state.output + e.target.value,
      formula: this.state.formula + e.target.value
    })
  }

  handleEvaluate() {
    let expression = this.state.formula;
    if(!expression) {
      return;
    }
    if (/[-/*+]$/.test(expression)) {
      expression = expression.slice(0, -1)
    }
    expression = expression.replace('--', '+0+0+0+0+0+0+');
    // eslint-disable-next-line no-eval
    let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
    this.setState({
      output: answer,
      formula: this.state.formula + '=' + answer,
      evaluated: true
    })
  }

  render() {
    return (
      <div className='calculator'>
        <Formula formula={this.state.formula} />
        <Output output={this.state.output} />
        <p>{this.state.prevVal}</p>
        <Buttons
          reset={this.reset}
          numbers={this.handleNumbers}
          operators={this.handleOperators}
          decimal={this.handleDecimal} evaluate={this.handleEvaluate} />
      </div>
    )
  }
}


export default App;