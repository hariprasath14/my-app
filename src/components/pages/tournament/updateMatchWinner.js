
//Validation
import * as Yup from "yup";
import { useFormik } from "formik";
import config from "../../../config";
import ClipLoader from "react-spinners/ClipLoader";
import { Form, FormFeedback, Input, Label, Modal, ModalBody } from "reactstrap";
import { useEffect, useState } from "react";

const UpdateMatchWinner = ({ openEditPoint, setOpenEditPoint }) => {
    const [updateWinLoader, setUpdateWinLoader] = useState(false);
    useEffect(() => {
        console.log(openEditPoint);
    }, [])
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            password: "",
            winner: "",
            // matchId:"",//need to encrypted
        },
        validationSchema: Yup.object({
            password: Yup.string().required(config.validationText.password),
            winner: Yup.string().required(),
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });


    return (

        <Modal
            isOpen={openEditPoint !== null}
            toggle={() => { setOpenEditPoint(null) }}
            centered
        >
            <ModalBody >
                <Form
                    className="form-horizontal tournament-form"
                    noValidate
                    onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                    }}
                >
                    <div>
                        <label>Select winner and enter password to update winner</label>

                        <Label className="form-label">I am an</Label>

                        <div className=" d-flex flex-column flex-sm-row mb-4">

                            <Label className="form-label me-5 mb-2 mb-sm-0 cursor-pointer">

                                <Input
                                    name="winner"
                                    type="radio"
                                    className="me-2"
                                    onChange={validation.handleChange}
                                    value={openEditPoint?.m1?.name}
                                    invalid={
                                        validation.touched.winner && validation.errors.winner ? true : false
                                    }
                                />
                                {openEditPoint?.m1?.name}

                            </Label>

                            <Label className="form-label mb-2 mb-sm-0 me-5 cursor-pointer">

                                <Input
                                    name="winner"
                                    type="radio"
                                    className="me-2"
                                    onChange={validation.handleChange}
                                    value={openEditPoint?.m2?.name}
                                    invalid={
                                        validation.touched.winner && validation.errors.winner ? true : false
                                    }
                                />
                                {openEditPoint.m2.name}

                            </Label>

                            {validation.touched.winner && validation.errors.winner ? (
                                <FormFeedback type="invalid" className={`${validation.touched.winner && validation.errors.winner ? "d-block" : ""}`} >{validation.errors.winner}</FormFeedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Label className="form-label">Password</Label>
                            <div className='input-code-container'>
                                <Input
                                    name="password"
                                    type={"password"}
                                    placeholder=""
                                    maxLength={20}
                                    onChange={validation.handleChange}
                                    value={validation.values.password || ""}
                                    invalid={
                                        validation.touched.password && validation.errors.password ? true : false
                                    }
                                />
                                {validation.touched.password && validation.errors.password ? (
                                    <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 tmnt-form-submit make-center">
                        <button
                            className="btn btn-primary waves-effect waves-light make-center opacity-100"
                            type="submit"
                            disabled={updateWinLoader}
                        >

                            {updateWinLoader ?
                                <ClipLoader
                                    size={24}
                                    color={"#fff"}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                />
                                : "Update"}
                        </button>
                    </div>

                </Form>

            </ModalBody>
        </Modal>
    );
}

export default UpdateMatchWinner;