import { Component } from "react";
import Header from "./Header/Header";

export default class Mana extends Component {
  render() {
    document.body.classList.add("light");
    return (
      <>
        <Header />
      </>
    );
  }
}