import NavHead from "../navbar/navHeader";
import "../../../scss/tournament.scss";
import { Link } from "react-router-dom";
import MiniMiltia from "./minimiltia";
import moment from "moment"

const Tournament = () => {
    const gameList = [
        {
            name: "Mini Militia",
            path: "/tournament/minimiltia",
            className: "minimiltia",
            matchDate: "2022-11-24"
        },
    ]
    const dateExpired = (date) => {
        console.log(date, moment().isAfter(date));
        return moment().isBefore(date)
    }
    return (
        <div className="page-content tmnt-content">
            <div className="tournament-container">
                <div className="ship ship-1"></div>
                <div className="ship ship-2"></div>
                <NavHead />
                <div className="game-container">
                    <div className="head pt-4 pt-sm-0">
                        <h3>Tournaments</h3>
                        <p>Check out the tournament games you want to play.</p>
                    </div>
                    <div className="body p-2 p-lg-5">
                        <div className="d-flex p-3 make-center-mobile">
                            {gameList && gameList.length > 0 && gameList.map((game, i) => {
                                return <div key={i} className={`game-card`}>
                                    <Link to={game.path} className="game-link">
                                        <div className="game-cardbody">
                                            <div className={`game-logo ${game.className}`}>
                                            </div>
                                            <div className="game-title">
                                                <p>{game.name}</p>
                                                <Link to={game.path} className="font-size-12">{dateExpired(game.matchDate) ? "Quick Register" : "View History"}</Link>
                                                <div className="ribbon left"></div>
                                                <div className="ribbon right"></div>
                                            </div>

                                            {dateExpired(game.matchDate) ? <div className="game-date available">
                                                Match date:&nbsp; {moment(game.matchDate).format("DD-MMM-YYYY")}
                                            </div> : <div className="game-date expired">
                                                Expired: &nbsp;{moment(game.matchDate).format("DD-MMM-YYYY")}
                                            </div>}
                                        </div>
                                    </Link>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="footer">
                </div>
            </div>
        </div>);
}

export default Tournament;