import React, { useEffect, useState } from "react"

//Validation
import * as Yup from "yup";
import { useFormik } from "formik";
import config from "../../../config";

import { Row, Col, CardBody, Card, Alert, Container, Form, Input, FormFeedback, Label, Spinner } from "reactstrap";
import { checkIfFilesAreCorrectType, checkIfFilesAreTooBig } from "../../common/fileValidation";



const TournamentForm = (props) => {

    const [loader, setLoader] = useState(false);

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            name: "",
            phone: "",
            addressLine: "",
            city: "",
            state: "",
            district: "",
            country: "",
            pincode: "",
            email: '',
            dp: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required(config.validationText.name).max(config.appRegex.maxLength40, config.validationText.maxLength40Text).trim(),
            dp: Yup.mixed()
                .test({
                    test: file => checkIfFilesAreTooBig(file, 1),
                    message: `File cannot be more than 1 MB.`
                })
                .test(
                    {
                        test: file => checkIfFilesAreCorrectType(file, 1),
                        message: `Only jpg, jpeg, and png files are allowed.`
                    }
                ),
            phone: Yup.string().required(config.validationText.contactNumber).matches(config.appRegex.contactNumber, config.validationText.contactRegex).trim(),
            addressLine: Yup.string().required(config.validationText.address).max(config.appRegex.maxLength100, config.validationText.maxLength100Text).trim(),
            city: Yup.string().required(config.validationText.city).max(config.appRegex.maxLength40, config.validationText.maxLength40Text).trim(),
            district: Yup.string().required(config.validationText.district).max(config.appRegex.maxLength40, config.validationText.maxLength40Text).trim(),
            state: Yup.string().required(config.validationText.state).max(config.appRegex.maxLength40, config.validationText.maxLength40Text).trim(),
            country: Yup.string().required(config.validationText.country).max(config.appRegex.maxLength40, config.validationText.maxLength40Text).trim(),
            pincode: Yup.string().required(config.validationText.pincode).matches(config.appRegex.pincode, config.validationText.pincodeRegexText).trim(),
            email: Yup.string().matches(config.appRegex.email, config.validationText.emailRegexText),
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });



    return (
        <React.Fragment>
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
                            <h4>
                                Register form
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

                            <Label className="form-label">Contact Number</Label>
                            <Input
                                name="phone"
                                className="form-control"
                                type="text"
                                onChange={validation.handleChange}
                                value={validation.values.phone || ""}
                                invalid={
                                    validation.touched.phone && validation.errors.phone ? true : false
                                }
                            />
                            {validation.touched.phone && validation.errors.phone ? (
                                <FormFeedback
                                    type="invalid">{validation.errors.phone}</FormFeedback>
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
                            <Label className="form-label">Profile Image</Label>
                            <Input
                                name="dp"
                                className="form-control cursor-not-allowed"
                                disabled
                                type="file"
                                accept="image/png, image/jpg, image/jpeg"
                                onChange={(e) => {
                                    const files = e.target.files;
                                    let file = {
                                        target: {
                                            name: "dp",
                                            value: files[0]
                                        }
                                    }
                                    console.log(file);
                                    validation.handleChange(file)
                                }}
                                value={validation.values.dp || ""}
                                invalid={
                                    validation.touched.dp && validation.errors.dp ? true : false
                                }
                            />
                            {validation.touched.dp && validation.errors.dp ? (
                                <FormFeedback
                                    type="invalid">{validation.errors.dp}</FormFeedback>
                            ) : null}
                        </div>

                        <div className="col-md-6 mb-3">

                            <Label className="form-label">Address</Label>
                            <Input
                                name="addressLine"
                                className="form-control"
                                type="text"
                                onChange={validation.handleChange}
                                value={validation.values.addressLine || ""}
                                invalid={
                                    validation.touched.addressLine && validation.errors.addressLine ? true : false
                                }
                            />
                            {validation.touched.addressLine && validation.errors.addressLine ? (
                                <FormFeedback
                                    type="invalid">{validation.errors.addressLine}</FormFeedback>
                            ) : null}
                        </div>

                        <div className="col-md-6 mb-3">

                            <Label className="form-label">City</Label>
                            <Input
                                name="city"
                                className="form-control"
                                type="text"
                                onChange={validation.handleChange}
                                value={validation.values.city || ""}
                                invalid={
                                    validation.touched.city && validation.errors.city ? true : false
                                }
                            />
                            {validation.touched.city && validation.errors.city ? (
                                <FormFeedback
                                    type="invalid">{validation.errors.city}</FormFeedback>
                            ) : null}
                        </div>

                        <div className="col-md-6 mb-3">

                            <Label className="form-label">District</Label>
                            <Input
                                name="district"
                                className="form-control"
                                type="text"
                                onChange={validation.handleChange}
                                value={validation.values.district || ""}
                                invalid={
                                    validation.touched.district && validation.errors.district ? true : false
                                }
                            />
                            {validation.touched.district && validation.errors.district ? (
                                <FormFeedback
                                    type="invalid">{validation.errors.district}</FormFeedback>
                            ) : null}
                        </div>

                        <div className="col-md-6 mb-3">

                            <Label className="form-label">State</Label>
                            <Input
                                name="state"
                                className="form-control"
                                type="text"
                                onChange={validation.handleChange}
                                value={validation.values.state || ""}
                                invalid={
                                    validation.touched.state && validation.errors.state ? true : false
                                }
                            />
                            {validation.touched.state && validation.errors.state ? (
                                <FormFeedback
                                    type="invalid">{validation.errors.state}</FormFeedback>
                            ) : null}
                        </div>

                        <div className="col-md-6 mb-3">

                            <Label className="form-label">Country</Label>
                            <Input
                                name="country"
                                className="form-control"
                                type="text"
                                onChange={validation.handleChange}
                                value={validation.values.country || ""}
                                invalid={
                                    validation.touched.country && validation.errors.country ? true : false
                                }
                            />
                            {validation.touched.country && validation.errors.country ? (
                                <FormFeedback
                                    type="invalid">{validation.errors.country}</FormFeedback>
                            ) : null}
                        </div>
                        <div className="col-md-6 mb-3">

                            <Label className="form-label">Pincode</Label>
                            <Input
                                name="pincode"
                                className="form-control"
                                type="text"
                                onChange={validation.handleChange}
                                value={validation.values.pincode || ""}
                                invalid={
                                    validation.touched.pincode && validation.errors.pincode ? true : false
                                }
                            />
                            {validation.touched.pincode && validation.errors.pincode ? (
                                <FormFeedback
                                    type="invalid">{validation.errors.pincode}</FormFeedback>
                            ) : null}
                        </div>


                    </div>
                </div>

                <div className="my-5">
                    <button
                        className="btn btn-primary w-100 waves-effect waves-light d-flex align-items-center justify-content-center opacity-100"
                        type="submit"
                        disabled={loader}
                    >
                        Register
                        {loader && <Spinner color="light" size={"sm"} className="ms-2" />}
                    </button>
                </div>

            </Form>

        </React.Fragment>
    )
}

export default TournamentForm;