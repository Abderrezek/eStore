import { h } from "preact";
import { useState } from "preact/hooks";
import axios from 'axios';

import CSRF from "../components/Csrf";
import Method from "../components/Method";
import { Success, Errors } from "../components/Alert";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { validate, classCss } from "../utils";

const Register = ({ csrf, action, redirect, login, auth }) => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    });
    const [loading, setLoading] = useState(false);
    const [responces, setResponces] = useState([]);
    const [errors, setErrors] = useState([]);
    const [classes, setClasses] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        if (validInputs(data)) {
            console.log(data)
            setErrors([]);
            setResponces([]);
            let register = {
                _token: csrf,
                _method: "POST",
                firstName: data.firstName,
                lastName: data.lastName,
                mobile: data.mobile,
                email: data.email,
                password: data.password,
                password_confirmation: data.passwordConfirmation,
            };
            axios.post(action, register)
                .then(res => {
                    console.log("registred")
                    console.log(res)
                    if (res.status === 201) {
                        setResponces(["your a compte created a successful, now redirect"]);
                        setTimeout(() => {
                            window.location = redirect;
                        }, 500);
                    }
                })
                .catch(err => {
                    console.log(err.response)
                    if (err.response && "errors" in err.response.data) {
                        let errors = err.response.data.errors;
                        let errs = [];
                        for (let e in errors) {
                            errors[e].forEach(er => errs.push(er));
                        }
                        setErrors(errs);
                    }
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    const validInputs = (data) => {
        let { firstName, lastName, mobile, email, password, passwordConfirmation } = data;
        let notExistErr = true;
        // First Name
        if (firstName === "") {
            _errorInput("firstName", "First Name is required");
            notExistErr = false;
        } else {
            _removeError("firstName", "First Name is required");
            notExistErr = true;
        }
        // Last Name
        if (lastName === "") {
            _errorInput("lastName", "Last Name is required");
            notExistErr = false;
        } else {
            _removeError("lastName", "Last Name is required");
            notExistErr = true;
        }
        // Mobile
        if (mobile !== "" && !validate.mobileNumber(mobile)) {
            _errorInput("mobile", "Mobile not valid");
            notExistErr = false;
        } else {
            _removeError("mobile", "Mobile not valid");
            notExistErr = true;
        }
        // Email
        if (email === "") {
            _errorInput("email", "Email is required");
            notExistErr = false;
        } else {
            _removeError("email", "Email is required");
            notExistErr = true;
        }
        if (email !== "" && !validate.Email(email)) {
            _errorInput("email", "Email not valid");
            notExistErr = false;
        } else if (email !== "" && validate.Email(email)) {
            _removeError("email", "Email not valid");
            notExistErr = true;
        }
        // Password
        if (password === "") {
            _errorInput("password", "Password is required");
            notExistErr = false;
        } else {
            _removeError("password", "Password is required");
            notExistErr = true;
        }
        // Password Confirmation
        if (passwordConfirmation === "" || password !== passwordConfirmation) {
            _errorInput("passwordConfirmation", "Password Confirmation must be equel password");
            notExistErr = false;
        } else {
            _removeError("passwordConfirmation", "Password Confirmation must be equel password");
            notExistErr = true;
        }
        return notExistErr;
    };

    const _errorInput = (name, msg) => {
        setErrors(state => {
            if (state.includes(msg)) { return state; }
            return [ ...state, msg ];
        });
        setClasses(state => {
            if (state.includes(name)) { return state; }
            return [ ...state, name ];
        });
        setLoading(false);
    };

    const _removeError = (name, msg) => {
        setErrors(state => state.filter(err => err !== msg));
        setClasses(state => state.filter(cls => cls !== name));
        setLoading(false);
    };

    const onChange = (e) => setData(state => ({ ...state, [e.target.name]: e.target.value }));

    return (
        <div class="register-form">
            <Errors errors={errors} />
            <Success responces={responces} />

            <form className="needs-validation" method="POST" action={action} onSubmit={onSubmit}>
                <CSRF csrf={csrf} />
                <Method name="POST" />

                <div className="form-row">
                    {/* First Name */}
                    <div class="col-md-6">
                        <Input
                            id="firstNameR"
                            className={classCss.className("firstName", classes)}
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            onChange={onChange}
                        >First Name</Input>
                    </div>

                    {/* Last Name */}
                    <div class="col-md-6">
                        <Input
                            id="lastNameR"
                            className={classCss.className("lastName", classes)}
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            onChange={onChange}
                        >Last Name</Input>
                    </div>

                    {/* E-mail */}
                    <div class="col-md-6">
                        <Input
                            id="emailR"
                            className={classCss.className("email", classes)}
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            onChange={onChange}
                        >E-mail</Input>
                    </div>

                    {/* Mobile No */}
                    <div class="col-md-6">
                        <Input
                            id="mobileR"
                            className={classCss.className("mobile", classes)}
                            type="text"
                            name="mobile"
                            placeholder="Mobile No"
                            onChange={onChange}
                        >Mobile No</Input>
                    </div>

                    {/* Password */}
                    <div class="col-md-6">
                        <Input
                            id="passwordR"
                            className={classCss.className("password", classes)}
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={onChange}
                        >Password</Input>
                    </div>

                    {/* Password Confirmation */}
                    <div class="col-md-6">
                        <Input
                            id="passwordConfirmationR"
                            className={classCss.className("passwordConfirmation", classes)}
                            type="password"
                            name="passwordConfirmation"
                            placeholder="Password Confirmation"
                            onChange={onChange}
                        >Password Confirmation</Input>
                    </div>

                    <div class="col-md-12">
                        <Button title="Register" isLoading={loading} />
                    </div>
                    {!auth && (
                        <div class="col-md-12 mt-2">
                            <p>You have an Account? <a href={login}>Login</a></p>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Register;

import bindComponent from "../renderComponent";
bindComponent('register', Register);