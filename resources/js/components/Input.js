import { h, Fragment } from "preact";

export const Input = (props) => {
    const { id, type="text", className, name, placeholder, onChange, children, ...rest } = props;
    let classes = "";
    if (className === undefined) {
        classes = "form-control";
    } else {
        classes = className;
    }

    return (
        <Fragment>
            <label for={id}>{children}</label>
            <input
                class={classes}
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                {...rest}
            />
        </Fragment>
    );
};

export const CheckBox = ({ id, title, name, onChange }) => {
    return (
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id={id} name={name} onChange={onChange} />
            <label class="custom-control-label" for={id}>{title}</label>
        </div>
    );
};