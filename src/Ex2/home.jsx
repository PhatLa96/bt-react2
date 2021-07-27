import React, { Component } from "react";
import "./glass.css";
import model from "./glassesImage/model.jpg";
import v1 from "./glassesImage/v1.png";
import v2 from "./glassesImage/v2.png";
import v3 from "./glassesImage/v3.png";
import v4 from "./glassesImage/v4.png";
import v5 from "./glassesImage/v5.png";
import v6 from "./glassesImage/v6.png";
import v7 from "./glassesImage/v7.png";
import v8 from "./glassesImage/v8.png";
import v9 from "./glassesImage/v9.png";

class Glass extends Component {
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: v1,
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: v2,
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: v3,
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: v4,
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: v5,
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: v6,
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: v7,
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: v8,
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: v9,
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
  ];
  state = {
    selectedGlass: [],
  };
  selectedGlass = (glass) => {
    this.setState({ selectedGlass: glass });
  };
  renderGlass = () => {
    return this.arrProduct.map((item) => {
      return (
        <img
          key={item.id}
          src={item.url}
          alt={item.name}
          className="img-fuild ml-4 mt-5 glass-item"
          width={90}
          onClick={() => {
            this.selectedGlass(item);
          }}
        />
      );
    });
  };

  render() {
    const { name, desc, url } = this.state.selectedGlass;
    return (
      <div className="content">
        <div className="overlay">
          <h3>TRY GLASSES APP ONLINE</h3>
          <div className="container d-flex justify-content-center">
            <div className="card mt-3" style={{ width: "20rem" }}>
              <img
                className="card-img-top model"
                src={model}
                alt="Card image cap"
              />
              <img src={url} alt="" className="model-test" />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{desc}</p>
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-center bg-white w-75 mt-4">
            {this.renderGlass()}
          </div>
        </div>
      </div>
    );
  }
}

export default Glass;
