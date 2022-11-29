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
    }
  }
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }


  const createSchedule = () => {
    console.log(playersList);
    // one team two match
    // for (let i = 0; i < playersList.length; i++) {
    //   let subject1 = playersList[i].name
    //   for (let x = 0; x < playersList.length; x++) {
    //     if (i !== x) {
    //       match.push({ a: subject1, b: playersList[x].name })
    //     }
    //   }
    // }
    
    // one team one match
    let x = []
    playersList.map((v, i) => {
      return x = [...x, ...playersList.slice(i + 1).map(v2 => v.name + "--" + v2.name)]
    });
    let shuffledArray = shuffle([...x]);
    console.log(shuffledArray, x);
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
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Phone number</th>
              </tr>
            </thead>
            <tbody>
              {playersList && playersList?.length > 0 && playersList.map((player, i) => {
                return <tr key={i}>
                  <td>
                    {player.id}
                  </td>
                  <td>
                    {player.name}
                  </td>
                  <td>
                    {player.phn_num}
                  </td>
                </tr>
              })}
            </tbody>
          </table>
          <button onClick={() => {
            createSchedule()
          }}>Create Schedule</button>
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