import React, { Component } from "react";

class ItemChair extends Component {
  state = {
    isBooking: false,
  };
  checkColor = () => {
    this.setState({
      isBooking: !this.state.isBooking,
    });
  };

  render() {
    const { SoGhe, TrangThai } = this.props.chair;
    let btnClass = this.state.isBooking ? "btn btn-primary" : "btn btn-dark";
    if (TrangThai === true) {
      btnClass = "btn btn-danger";
    }
    return (
      <div className="mt-2 text-center">
        <button
          className={btnClass}
          onClick={() => {
            this.props.setSelectedChair(this.props.chair);
            this.checkColor();
          }}
          disabled={TrangThai}
        >
          {SoGhe}
        </button>
      </div>
    );
  }
}

export default ItemChair;
