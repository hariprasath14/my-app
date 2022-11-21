import NavHead from "../navbar/navHeader";
import "../../../scss/tournament.scss";
import { Link } from "react-router-dom";

const Tournament = () => {
    const gameList = [
        {
            name: "Mini Militia",
            path: "/tournament/minimiltia"
        },
    ]
    return (
        <div className="page-content">
            <div className="tournament-container">
                <NavHead />
                <div className="game-container">
                    <div className="head">
                        <h2>Tournaments</h2>
                    </div>
                    <div className="body">
                        <div className="d-flex">
                            {gameList && gameList.length > 0 && gameList.map((game, i) => {
                                return <div key={i} className="game-card">
                                    <Link to={game.path} className="game-link">
                                        <div className="game-cardbody make-center flex-column">
                                            <p className="mb-1">{game.name}</p>
                                            <Link to={game.path} className="font-size-12">Quick Register</Link>
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