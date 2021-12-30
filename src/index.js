import {html, render, Component} from "https://npm.reversehttp.com/preact,react:preact/compat,htm/preact";
import {NominalAllocator} from "./components/NominalAllocator";


class NominalAllocatorContainer extends Component {
        render() {
                return html`
            <${NominalAllocator}
                min="0"
                max="12"
                defaultValue="3"
                onUpdate="" />
                `
        };
}

render(html`<${NominalAllocatorContainer} />` , document.getElementById('root'));

