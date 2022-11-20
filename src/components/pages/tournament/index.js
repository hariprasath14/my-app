import axios from 'axios';
import { Fragment, useEffect, useState } from "react";
import TournamentForm from './form';
import "../../../scss/tournament.scss";

const Tournament = () => {
    const player = { name: "", review: "", rating: 0 }
    const [value, setValue] = useState(player);
    const [playersList, setPlayersList] = useState([]);
    
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
                <TournamentForm/>
                <>
                    <button onClick={() => {
                        getReview()
                    }}>Register</button>
                </>
                <div>
                    <div>Name</div>
                    <div>
                        <input type={"text"} name="name" onChange={(e) => handelChange(e)} />
                    </div>
                </div>
                <div>
                    <div>Address</div>
                    <div>
                        <textarea name="review" onChange={(e) => handelChange(e)}></textarea>
                    </div>
                </div>
                <div>
                    <div>Phone num</div>
                    <div>
                        <input type={"number"} name="rating" onChange={(e) => handelChange(e)} />
                    </div>
                </div>
                {/* <button onClick={() => { saveReview() }}>Submit</button> */}
                <div>
                </div>
            </div>
        </Fragment>
    );
}

export default Tournament;