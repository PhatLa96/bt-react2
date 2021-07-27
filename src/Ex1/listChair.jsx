import React, { Component } from "react";
import ItemChair from "./itemChair";

class ListChair extends Component {
  renderChair = () => {
    return this.props.chairs.map((item) => {
      return (
        <div className="col-3" key={item.SoGhe}>
          <ItemChair chair={item} setSelectedChair={this.props.setSelectedChair}  />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
            {this.renderChair()}
        </div>
      </div>
    );
  }
}

export default ListChair;
