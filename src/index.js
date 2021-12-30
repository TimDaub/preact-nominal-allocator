// @format
import { Component } from "preact";
import { html } from "htm/preact";
import { NominalAllocator } from "./components/NominalAllocator";

export class NominalAllocatorContainer extends Component {
  render() {
    return html`
      <${NominalAllocator} min="0" max="12" defaultValue="3" onUpdate="" />
    `;
  }
}
