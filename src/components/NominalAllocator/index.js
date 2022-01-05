// @format
import { html } from "htm/preact";

function NominalAllocator(props) {
  const increment = () => {
    if (props.value < props.max) {
      props.onUpdate(props.value + 1);
    }
  };

  const decrement = () => {
    if (props.value > props.min) {
      props.onUpdate(props.value - 1);
    }
  };

  const rangeCheck = event => {
    if (event.target.value > props.max) {
      props.onUpdate(props.max);
    }
    if (event.target.value < props.min) {
      props.onUpdate(props.min);
    }
  };

  const { allocatorButtonPlus, allocatorNumberInput, allocatorButtonMinus } = props.classes;
  return html`
      <div class="">
        <button class="${allocatorButtonPlus}" type="button" onClick="${() => decrement()}">-</button>
        <input class="${allocatorNumberInput}" type="number" min="${props.min}" max="${props.max}" value=${props.value} onkeyup="${(e) => rangeCheck(e)}"/>
        <button class="${allocatorButtonMinus}" type="button" onClick="${() => increment()}">+</button>
      </div>`
}

export default NominalAllocator;
