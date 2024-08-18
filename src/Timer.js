import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: 0,
    color: "#" + Math.floor(Math.random() * 16777215).toString(16)
  };

  // Start the clock when the component mounts
  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000); // Set up an interval to call clockTick every second
  }

  // Clear the interval when the component is about to unmount
  componentWillUnmount() {
    this.stopClock(); // Ensure the interval is cleared when unmounting
  }

  render() {
    const { time, color } = this.state;
    return (
      <section className="Timer" style={{ background: color }}>
        <h1>{time}</h1>
        <button onClick={this.stopClock}>Stop</button>
        <aside className="mountText">Mounted</aside>
        <small onClick={this.handleClose}>X</small>
      </section>
    );
  }

  //clock functions
  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  };

  stopClock = () => {
    clearInterval(this.interval); // Stop the clock by clearing the interval
  };

  // for the 'x' button,
  handleClose = () => {
    this.props.removeTimer(this.props.id); // Call the parent function to remove this Timer
  };
}

export default Timer;
