import React, { useEffect, useState } from "react"

import ClipLoader from "react-spinners/ClipLoader";
//Validation
import * as Yup from "yup";
import { useFormik } from "formik";
import config from "../../../config";

import { Row, Col, CardBody, Card, Alert, Container, Form, Input, FormFeedback, Label, Spinner } from "reactstrap";
import { checkIfFilesAreCorrectType, checkIfFilesAreTooBig } from "../../common/fileValidation";
import { appAuthApi } from "../../common/api/helper";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthenticationCardUI } from "./login";



const Register = (props) => {
    const [loader, setLoader] = useState(false);
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            name: "",
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required(config.validationText.name).matches(config.appRegex.alpha, config.validationText.alphaRegexText).max(config.appRegex.maxLength100, config.validationText.maxLength100Text).trim(),
            email: Yup.string().required(config.validationText.email).matches(config.appRegex.email, config.validationText.emailRegexText).trim(),
            password: Yup.string().required(config.validationText.password).matches(config.appRegex.password, config.validationText.passwordRegexText).trim(),
        }),
        onSubmit: (values) => {
            registerUser(values);
        }
    });

    const registerUser = async (values) => {
        setLoader(true)
        let data = await appAuthApi("/register", {
            ...values
        }).catch((err) => {
            console.log(err);
            toast.error(err?.message)
        })
        if (data.responseCode === 1) {
            toast.success(data.responseMessage)
            localStorage.setItem("tmtData", JSON.stringify({ email: "yik;" }))
        } else if (data.responseCode === 0) {
            toast.error(data.responseMessage)
        }
        setLoader(false)
    }

    return (
        <React.Fragment>
            <AuthenticationCardUI>

                <Form
                    className="form-horizontal tournament-form"
                    noValidate
                    onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                    }}
                >
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mb-3">
                                <h4 className="make-center-mobile mb-0 mb-md-2">
                                    Register
                                </h4>
                            </div>
                            <div className="col-md-6 mb-3">

                                <Label className="form-label">Name</Label>
                                <Input
                                    name="name"
                                    className="form-control"
                                    type="text"
                                    onChange={validation.handleChange}
                                    value={validation.values.name || ""}
                                    invalid={
                                        validation.touched.name && validation.errors.name ? true : false
                                    }
                                />
                                {validation.touched.name && validation.errors.name ? (
                                    <FormFeedback
                                        type="invalid">{validation.errors.name}</FormFeedback>
                                ) : null}
                            </div>

                            <div className="col-md-6 mb-3">
                                <Label className="form-label">Email</Label>
                                <Input
                                    name="email"
                                    className="form-control"
                                    type="email"
                                    onChange={validation.handleChange}
                                    value={validation.values.email || ""}
                                    invalid={
                                        validation.touched.email && validation.errors.email ? true : false
                                    }
                                />
                                {validation.touched.email && validation.errors.email ? (
                                    <FormFeedback
                                        type="invalid">{validation.errors.email}</FormFeedback>
                                ) : null}
                            </div>

                            <div className="col-md-6 mb-3">
                                <Label className="form-label">Password</Label>
                                <Input
                                    name="password"
                                    className="form-control"
                                    type="password"
                                    onChange={validation.handleChange}
                                    value={validation.values.password || ""}
                                    invalid={
                                        validation.touched.password && validation.errors.password ? true : false
                                    }
                                />
                                {validation.touched.password && validation.errors.password ? (
                                    <FormFeedback
                                        type="invalid">{validation.errors.password}</FormFeedback>
                                ) : null}
                            </div>

                        </div>
                    </div>

                    <div className="mt-5 tmnt-form-submit make-center">
                        <button
                            className="btn btn-primary waves-effect waves-light make-center opacity-100"
                            type="submit"
                            disabled={loader}
                        >

                            {loader ?
                                <ClipLoader
                                    size={24}
                                    color={"#fff"}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                />
                                : "Register"}
                        </button>
                    </div>

                </Form>
                <div className="mt-5 make-center"><p>Already have a account? <Link to="/login">Login</Link></p></div>
            </AuthenticationCardUI>
        </React.Fragment>
    )
}

export default Register;