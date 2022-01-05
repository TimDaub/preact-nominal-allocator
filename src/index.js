// @format
import { Component } from "preact";
import { html } from "htm/preact";
import NominalAllocator from "./components/NominalAllocator";
import {create} from 'jss'
import preset from 'jss-preset-default'

const jss = create(preset());

const style = {
    allocatorButtonPlus: {
      backgroundColor: 'green',
      fontSize: 18
    },
    allocatorButtonMinus: {
      backgroundColor: 'orange',
      fontSize: 18
    },
    allocatorNumberInput: {
      backgroundColor: 'yellow'
    }
};

const { classes } = jss.createStyleSheet(style).attach();

export class NominalAllocatorContainer extends Component {
  state = { value: 3};

  onUpdate = (value) => {
    this.setState({value: value});
  };

  render() {
    return html`
      <${NominalAllocator} min="${0}" max="${12}" value="${this.state.value}" onUpdate="${this.onUpdate}" classes="${classes}"/>
    `;
  }
}
