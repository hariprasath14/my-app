import NavHead from "../navbar/navHeader";
import "../../../scss/gameDetails.scss";
import TournamentBracket from "./tournamentBracket";
import TournamentRegister from "./gameRegister";
import { Modal, ModalBody } from "reactstrap";
import { useState } from "react";

const MiniMiltia = () => {
  const [openRegister, setOpenRegister] = useState(false);
  return (
    <div className="page-content">
      <NavHead />
      <div className="game-details-container">
        <div className="head pt-4 pt-sm-0">
          <div className="">
            <div>
              <h3>Mini Miltia</h3>
              <p>Watch live -- Watch highlights</p>
            </div>

            <div className="mt-4 pt-2">
              <button className="btn btn-primary mb-0" onClick={() => { setOpenRegister(!openRegister) }}>Register Upcoming Match</button>
            </div>
          </div>
          <Modal
            isOpen={openRegister}
            toggle={() => { setOpenRegister(!openRegister) }}
            centered
          >
            <ModalBody>
              <TournamentRegister />
            </ModalBody>
          </Modal>
          <TournamentBracket />
        </div>
      </div>
    </div>
  );
}

export default MiniMiltia;