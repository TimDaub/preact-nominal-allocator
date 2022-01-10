# preact-nominal-allocator



# Usage

- Demo

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Preact Nominal Allocator Demo</title>
    <script type="module" defer>
      import { Component, render, h } from "https://unpkg.com/preact?module";
      import htm from 'https://unpkg.com/htm?module'
      import preset from 'https://unpkg.com/jss-preset-default@10.9.0'
      import {create} from "https://unpkg.com/jss@10.9.0";
      import NominalAllocator from "./src/NominalAllocator.js";

      const html = htm.bind(h);
      const jss = create(preset());

      const style = {
        allocatorContainer: {
          display:'flex'
        },
        allocatorButtonPlus: {
          backgroundColor: 'green',
          fontSize: 18
        },
        allocatorButtonMinus: {
          backgroundColor: 'green',
          fontSize: 18
        },
        allocatorNumberInput: {
          backgroundColor: 'green'
        }
      };

      const { classes } = jss.createStyleSheet(style).attach();

      class NominalAllocatorDemo extends Component {
        state = { value: 3};

        onUpdate = (value) => {
          this.setState({value: value});
        };

        render() {
          return html`
            <${NominalAllocator} min="${0}" max="${12}" value="${this.state.value}" onUpdate="${this.onUpdate}" styles="${classes}"/>
            `;
        }
      }

      render(html`<${NominalAllocatorDemo} />`, document.body);
    </script>
  </head>
  <body></body>
</html>
```
### Notes
- Attributes: <br>
    `min` lowest input value <br>
    `max` highest input value <br>
    `value` current value <br>
    `onUpdate` used to update the current value <br>
    
- `NominalAllocator` inserts inline classes via [JSS](https://cssinjs.org). This
allows users to customize its style (via `styles` attribute) by adjusting classes like  `.allocatorContainer`,`.allocatorButtonPlus`, `.allocatorButtonMinus`,
and `.allocatorNumberInput`.
- 

## Contributing

```bash
$ git clone git@github.com:TimDaub/preact-nominal-allocator.git
$ cd preact-nominal-allocator
$ npm i
$ npm run dev
```
