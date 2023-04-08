import axios from 'axios';
import { Fragment, useEffect, useState } from "react";
import TournamentForm from './registerForm';
import logo from "../../../assets/images/tournament/mini-miltia.png"
import { tmntPostApi } from '../../common/api/helper';

const TournamentRegister = () => {
    const gameName = "Mini Militia"
    const [loader, setLoader] = useState(false);


    const rgtrMiniMiltia = async (values) => {
        console.log("value", values);
        setLoader(true)
        let data = await tmntPostApi(`/rgtrMM`, {
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
        }).catch((err) => {
            setLoader(false)
            alert("Server Error!, Try again later")
        })
        if (data) {
            setLoader(false)
            console.log(data);
        }
    }


    return (
        <Fragment>
            <div className="tmnt-game-container my-3 h-100">

                <TournamentForm gameName={gameName} logo={logo} register={rgtrMiniMiltia} loader={loader} />
            </div>
        </Fragment>
    );
}

export default TournamentRegister;