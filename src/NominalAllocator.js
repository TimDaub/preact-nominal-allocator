// @format
import { Component } from "preact";
import { html } from "htm/preact";

export default class NominalAllocator extends Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }
  render() {
    const outOfBounds = num =>
      num === "" || num > this.props.max || num < this.props.min;
    const { value } = this.state;
    const decrement = () =>
      !outOfBounds(value - 1) &&
      this.setState({ value: value - 1 }, () => this.props.onUpdate(value - 1));
    const increment = () =>
      !outOfBounds(value + 1) &&
      this.setState({ value: value + 1 }, () => this.props.onUpdate(value + 1));
    const onKeyUp = event =>
      !outOfBounds(event.target.value) &&
      this.setState({ value: event.target.value }, () =>
        this.props.onUpdate(event.target.value)
      );

    const {
      allocatorContainer,
      allocatorButtonPlus,
      allocatorNumberInput,
      allocatorButtonMinus
    } = this.props.styles;
    return html`
      <div class=${allocatorContainer}>
        <button class=${allocatorButtonPlus} type="button" onClick=${decrement}>
          -
        </button>
        <input
          class="${allocatorNumberInput}"
          type="number"
          min=${this.props.min}
          max=${this.props.max}
          value=${value}
          onKeyUp=${onKeyUp}
        />
        <button
          class=${allocatorButtonMinus}
          type="button"
          onClick=${increment}
        >
          +
        </button>
      </div>
    `;
  }
}
