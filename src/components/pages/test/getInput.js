import axios from 'axios';
import { Fragment, useEffect, useState } from "react";

const GetInput = () => {
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
        console.log("movieList",movieList);
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

    const getReview = () => {
        axios.get("http://localhost:3001/get_movie").then((res) => {
            // console.log(res);
            setMovieList(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    const deleteReview = (id) => {
        axios.delete(`http://localhost:3001/delete_movie/${id}`).then((res) => {
            // console.log(res);
            getReview()
        }).catch((err) => {
            console.log(err);
        })
    }
    const updateReview = (id, review) => {
        axios.put("http://localhost:3001/update_movie", {
            id,
            review:review?review:""
        }).then((res) => {
            // console.log("saved", res);
            getReview()
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <Fragment>
            <div className="pt-5 d-flex align-items-center justify-content-center flex-column h-100">
                <div>
                    <div>Movie name</div>
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
                    <div>Movie name</div>
                    <div>
                        <input type={"number"} name="rating" onChange={(e) => handelChange(e)} />
                    </div>
                </div>
                <button onClick={() => { saveReview() }}>Submit</button>
                <div>
                    {movieList && movieList?.length > 0 && movieList.constructor === Array && movieList.map((movie, i) => {
                        return <Fragment key={i}>
                            <div>{movie.name}--&gt;{movie.review}---&gt;{movie.rating}---&gt;
                                <button onClick={() => {
                                    deleteReview(movie?.id)
                                }}
                                    className="ms-2"
                                >
                                    delete
                                </button>---&gt; <input type={"text"} placeholder="Update Review" onChange={(e) => {
                                    setMovieList(prevMovieList => prevMovieList.map((x) => {
                                        if (x.id===movie?.id) {
                                            return {
                                                ...x,
                                                updateReview: e.target.value
                                            }
                                        }else{
                                            return x
                                        }
                                    }))
                                }} />---&gt;
                                <button onClick={() => {
                                    updateReview(movie?.id,movie?.updateReview)
                                }}
                                    className="ms-2"
                                >
                                    update
                                </button>
                            </div>
                        </Fragment>
                    })}
                </div>
            </div>
        </Fragment>
    );
}

export default GetInput;