// if (process.env.NODE_ENV === "development") {
//     require("preact/debug");
// }
import { h, render } from "preact";

const bindComponent = (container, Component) => {
    const element = document.getElementById(`rct-${container}`);

    if (element) {
        if (element.dataset.props) {
            const props = JSON.parse(element.dataset.props);

            delete element.dataset.props;

            render(<Component {...props} />, element);
        } else {
            render(<Component />, element);
        }
    }
};

export default bindComponent;