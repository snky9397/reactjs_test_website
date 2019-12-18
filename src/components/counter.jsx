import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 2,
    // tags: ["tags1", "tag2", "tag3"],
    id: 0
  };

  handleIncrement = e => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ id: this.state.id + 1 });
    console.log(this.state.id);
  };

  render() {
    let classes = this.getBadgeClasses();
    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <br />
        <br />
        <button
          onClick={() => this.handleIncrement(1)}
          className="btn btn-secondary gtn-sm m-2 pl-2"
        >
          Increment Button
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
