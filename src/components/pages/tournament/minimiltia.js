import NavHead from "../navbar/navHeader";
import "../../../scss/gameDetails.scss";
import TournamentBracket from "./tournamentBracket";

const MiniMiltia = () => {
    return (
        <div className="page-content">
            <NavHead />
            <div className="game-details-container">
                <div className="head pt-4 pt-sm-0">
                    <h3>Mini Miltia</h3>
                    <p>wach live url or (watch hilights)</p>
                    <TournamentBracket/>
                </div>
            </div>
        </div>
    );
}

export default MiniMiltia;