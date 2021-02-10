export const className = (name, classes) => {
    let className = "form-control ";

    if (classes.includes(name)) {
        className += "is-invalid";
    }

    return className;
};