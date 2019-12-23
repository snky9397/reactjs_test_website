import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // tags: ["tags1", "tag2", "tag3"],
    id: 0
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    let classes = this.getBadgeClasses();
    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>

        <button
          onClick={() => this.handleIncrement(1)}
          className="btn btn-secondary btn-lg m-2 pl-2"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "panel-title badge m-2 pl-6 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
