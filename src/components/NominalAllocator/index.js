// @format
import { html } from "htm/preact";

function NominalAllocator(props) {
  const increment = () => {
    if (props.value < props.max) {
      props.onUpdate(props.value +1);
    }
  };

  const decrement = () => {
    if (props.value > props.min) {
      props.onUpdate(props.value -1);
    }
  };

  return html`
      <div>
        <button type="button" onClick="${() => decrement()}">-</button>
        <input type="number" min="${props.min}" max="${props.max}" value=${props.value} />
        <button type="button" onClick="${() => increment()}">+</button>
      </div>`
}

export default NominalAllocator;
