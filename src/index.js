// @format
import { Component } from "preact";
import { html } from "htm/preact";
import NominalAllocator from "./components/NominalAllocator";

export class NominalAllocatorContainer extends Component {
  state = { value: 3};

  onUpdate = (value) => {
    this.setState({value: value});
  };

  render() {
    return html`
      <${NominalAllocator} min="${0}" max="${12}" value="${this.state.value}" onUpdate="${this.onUpdate}" />
    `;
  }
}
