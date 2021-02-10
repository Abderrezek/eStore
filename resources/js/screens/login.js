import { h } from "preact";
import { useState } from "preact/hooks";
// import axios from 'redaxios';
import axios from 'axios';

import CSRF from "../components/Csrf";
import Method from "../components/Method";
import { Success, Errors } from "../components/Alert";
import { Input, CheckBox } from "../components/Input";
import { Button } from "../components/Button";
import { validate } from "../utils";

const Login = ({ csrf, action, redirect, register, authGoogle, authFacebook, auth }) => {
    const [data, setData] = useState({
        email: "",
        password: "",
        keepMeSignedIn: false,
    });
    const [loading, setLoading] = useState(false);
    const [responces, setResponces] = useState([]);
    const [errors, setErrors] = useState([]);


    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (validInputs(data)) {
            setErrors([]);
            setResponces([]);
            let login = {
                _token: csrf,
                _method: "POST",
                email: data.email,
                password: data.password,
                remember: data.keepMeSignedIn,
            };
            axios.post(action, login)
                .then(res => {
                    console.log(res);
                    console.log("logged");
                    if (res.status === 200) {
                        setResponces(["Your Logged Successfully, redirect Now"]);
                        setTimeout(() => {
                            window.location = redirect;
                        }, 500);
                    }
                })
                .catch(err => {
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
        let { email, password } = data;
        if (email === "") {
            setErrors(["Email is required"]);
            setLoading(false);
            return false;
        } else if (!validate.Email(email)) {
            setErrors(["Email not valid"]);
            setLoading(false);
            return false;
        } else if (password === "") {
            setErrors(["Password is required"]);
            setLoading(false);
            return false;
        }
        return true;
    };

    const onChange = (e) => setData(state => {
        if (e.target.type === "checkbox") {
            return ({ ...state, [e.target.name]: e.target.checked });
        }

        return ({ ...state, [e.target.name]: e.target.value });
    });

    return (
        <div className="login-form">
            <Errors errors={errors} />
            <Success responces={responces} />

            <form className="needs-validation" method="POST" action={action} onSubmit={onSubmit}>
                <CSRF csrf={csrf} />
                <Method name="POST" />

                <div className="form-row">
                    {/* E-mail */}
                    <div class="col-md-6">
                        <Input
                            id="emailL"
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            onChange={onChange}
                        >E-mail</Input>
                    </div>

                    {/* Password */}
                    <div class="col-md-6">
                        <Input
                            id="passwordL"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={onChange}
                        >Password</Input>
                    </div>

                    {/* Keep Me Signed In */}
                    <div class="col-md-12">
                        <CheckBox
                            id="idKeepMeSignedIn"
                            name="keepMeSignedIn"
                            title="Keep me signed in"
                            onChange={onChange}
                        />
                    </div>

                    <div class="col-md-12">
                        <Button title="login" isLoading={loading} />
                    </div>
                    <div class="col-md-12 mt-2">
                        {!auth && (
                            <p>Don't have an Account? <a href={register}>Register</a></p>
                        )}
                        <p>
                            <a class="btn btn-primary" href={authFacebook}>Login with Facebook</a>
                            <a class="btn btn-danger mx-1" href={authGoogle}>Login with Google</a>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;

import bindComponent from "../renderComponent";
bindComponent('login', Login);