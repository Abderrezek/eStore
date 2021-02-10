import { h } from "preact";

const Csrf = ({ csrf }) => <input type="hidden" name="_token" value={csrf} />;

export default Csrf;