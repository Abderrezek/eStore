import { h } from "preact";

export const Button = ({ type="submit", title, isLoading }) => {
    let loading = null;
    let classes = "btn ";
    if (isLoading) {
        classes += "disabled";
        loading = <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>;
    }

    return (
        <button class={classes} type="submit">
            {loading}{" "}{title}
        </button>
    );
};