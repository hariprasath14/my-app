import axios from 'axios';
import { Fragment, useEffect, useState } from "react";
import TournamentForm from './registerForm';
import logo from "../../../assets/images/tournament/mini-miltia.png"

const TournamentRegister = () => {
    const player = { name: "", review: "", rating: 0 }
    const [value, setValue] = useState(player);
    const [playersList, setPlayersList] = useState([]);
    const gameName = "Mini Militia"
    const [loader, setLoader] = useState(false);

    const handelChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value, })
    }

    useEffect(() => {
        // getReview()
    }, [])

    useEffect(() => {
        console.log("playersList", playersList);
    }, [playersList])

    const rgtrMiniMiltia = (values) => {
        console.log("value", values);
        setLoader(true)
        axios.post(`${process.env.REACT_APP_ADMIN_API_BASEUR}/rgtrMM`, {
            address: values.addressLine,
            city: values.city,
            country: values.country,
            district: values.district,
            // dp: values.dp,
            email: values.email,
            name: values.name,
            phn_num: values.phone,
            pincode: values.pincode,
            state: values.state,
        }).then((res) => {
            // console.log("saved", res);
            // getReview()
            setLoader(false)
        }).catch((err) => {
            setLoader(false)
            alert("Server Error!, Try again later")
        })
    }


    let controller;

    const getReview = () => {
        if (controller) controller.abort()
        controller = new AbortController()

        axios.get(`${process.env.REACT_APP_ADMIN_API_BASEUR}/get_mm__players`, {
            signal: controller.signal
        }).then((res) => {
            setPlayersList(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }


    return (
        <Fragment>
            <div className="tmnt-game-container my-3 h-100">

                <TournamentForm gameName={gameName} logo={logo} register={rgtrMiniMiltia} loader={loader} />
                {/* <>
                    <button onClick={() => {
                        getReview()
                    }}>Register</button>
                </> */}
                {/* <button onClick={() => { saveReview() }}>Submit</button> */}
              
            </div>
        </Fragment>
    );
}

export default TournamentRegister;