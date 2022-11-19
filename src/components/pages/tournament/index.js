import axios from 'axios';
import { Fragment, useEffect, useState } from "react";

const Tournament = () => {
    const movie = { name: "", review: "", rating: 0 }
    const [value, setValue] = useState(movie);
    const [movieList, setMovieList] = useState([]);
    
    const handelChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value, })
    }

    useEffect(() => {
        getReview()
    }, [])

    useEffect(() => {
        console.log("movieList", movieList);
    }, [movieList])

    const saveReview = () => {
        console.log("value", value);
        axios.post("http://localhost:3001/save_movie", {
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

        axios.get("http://localhost:3001/get_movie", {
            signal: controller.signal
        }).then((res) => {
            setMovieList(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }


    return (
        <Fragment>
            <div className="pt-5 d-flex align-items-center justify-content-center flex-column h-100">
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
                    <div>Review</div>
                    <div>
                        <textarea name="review" onChange={(e) => handelChange(e)}></textarea>
                    </div>
                </div>
                <div>
                    <div>Rating</div>
                    <div>
                        <input type={"number"} name="rating" onChange={(e) => handelChange(e)} />
                    </div>
                </div>
                <button onClick={() => { saveReview() }}>Submit</button>
                <div>
                </div>
            </div>
        </Fragment>
    );
}

export default Tournament;