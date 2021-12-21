import React, { Component } from "react";

export class Individual extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <tr>
        <td style={{ border: "1px solid black" }} className='p-2'>{this.props.name}</td>
        <td style={{ border: "1px solid black" }} className='p-2'>{this.props.age}</td>
        <td>
          {" "}
          <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>{" "}
        </td>
      </tr>
    );
  }
}

export default Individual;
