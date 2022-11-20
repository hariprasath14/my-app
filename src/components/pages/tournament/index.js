import axios from 'axios';
import { Fragment, useEffect, useState } from "react";
import TournamentForm from './registorForm';
import "../../../scss/tournament.scss";
import logo from "../../../assets/images/tournament/mini-miltia.png"

const Tournament = () => {
    const player = { name: "", review: "", rating: 0 }
    const [value, setValue] = useState(player);
    const [playersList, setPlayersList] = useState([]);
    const gameName = "Mini Militia"

    const handelChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value, })
    }

    useEffect(() => {
        // getReview()
    }, [])

    useEffect(() => {
        console.log("playersList", playersList);
    }, [playersList])

    const saveReview = () => {
        console.log("value", value);
        axios.post(`${process.env.REACT_APP_ADMIN_API_BASEUR}/save_movie`, {
            movie_name: value.name,
            movie_review: value.review,
            movie_rating: value.rating,
        }).then((res) => {
            // console.log("saved", res);
            getReview()
        }).catch((err) => {
            console.log(err);
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
            <div className="tournament-container tmnt-minimiltia h-100">
                
                <TournamentForm gameName={gameName} logo={logo} />
                {/* <>
                    <button onClick={() => {
                        getReview()
                    }}>Register</button>
                </> */}
                {/* <button onClick={() => { saveReview() }}>Submit</button> */}
                <div>
                </div>
            </div>
        </Fragment>
    );
}

export default Tournament;