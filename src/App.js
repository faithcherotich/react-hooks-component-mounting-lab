import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
  state = {
    timerIDs: []
  };

  // Automatically add a timer when the component mounts
  componentDidMount() {
    this.handleAddTimer();
  }

  handleAddTimer = () => {
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, Date.now()]
    }));
  };

  removeTimer = (id) => {
    this.setState(prevState => ({
      timerIDs: prevState.timerIDs.filter(timerID => timerID !== id)
    }));
  };

  renderTimers = () => this.state.timerIDs.map(id => (
    <Timer key={id} id={id} removeTimer={this.removeTimer} />
  ));

  render() {
    return (
      <div className="App">
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add New Timer</button>
        <div className="TimerGrid">
          {this.renderTimers()}
        </div>
      </div>
    );
  }
}

export default App;