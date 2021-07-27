import React, { Component } from "react";
import "./listChairOder.css";
class ListChairOder extends Component {
  renderSelectedChair = () => {
    return this.props.seclectedChair.map((item) => {
      const { SoGhe,TenGhe, Gia, } = item.cart;
      return (
        <ul className="d-flex align-self-center">
          <li>
            <p>Ghế:</p>
          </li>
          <li>
            <p>{TenGhe}</p>
          </li>
          <li>
            <p>${Gia}</p>
          </li>
          <li >
            <button className="btn btn-danger">Hủy</button>
          </li>
        </ul>
      );
    });
  };
  render() {
    
    return <div className="oder">{this.renderSelectedChair()}</div>;
  }
}

export default ListChairOder;
