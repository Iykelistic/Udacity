import React, { Component } from 'react';
import Game from './Game.js';
import Score from './Score.js';
import logo from './logo.svg';
import './App.css';


const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  state = {
    correctAnswer : 0,
    numQuestions : 0
  }
  constructor(props){
    super(props);
    this.handleAnswer = this.handleAnswer.bind(this);
  }
  
  handleAnswer = answerWasCorrect => {
    if(answerWasCorrect) {
      this.setState(currState => ({
        correctAnswer: currState.correctAnswer + 1,
      }));
  }
    this.setState(currState => ({
      numQuestions: currState.numQuestions + 1,
    }));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
			<Game handleAnswer = {this.handleAnswer} />
			<Score numCorrect = {this.state.corectAnswer} numQuestion = {this.state.numQuestions} />
{/*<p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>*/}
          </div>
          <button>True</button>
          <button>False</button>
          <p className="text">
            Your Score: {numCorrect}/{numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
