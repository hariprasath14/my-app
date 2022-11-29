import NavHead from "../navbar/navHeader";
import "../../../scss/gameDetails.scss";
import TournamentBracket from "./tournamentBracket";
import TournamentRegister from "./gameRegister";
import { Modal, ModalBody } from "reactstrap";
import { useEffect, useState } from "react";
import { getRegisterPlayers } from "../../common/api/helper";

const MiniMiltia = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const [playersList, setPlayersList] = useState([]);


  useEffect(() => {
    getRegisterData()
  }, [])

  let controller;

  const getRegisterData = async () => {
    if (controller) controller.abort()
    controller = new AbortController()
    let data = await getRegisterPlayers(`/get_mm__players`, {
      signal: controller.signal
    }).catch((err) => {
      console.log(err);
    })
    if (data) {
      setPlayersList(data)
      console.log(data);
    }
  }

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
          {JSON.stringify(playersList)}
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