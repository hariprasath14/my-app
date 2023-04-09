import NavHead from "../navbar/navHeader";
import "../../../scss/gameDetails.scss";
import TournamentBracket from "./tournamentBracket";
import TournamentRegister from "./gameRegister";
import { Modal, ModalBody } from "reactstrap";
import { useEffect, useState } from "react";
import { tmntGetApi, tmntPostApi } from "../../common/api/helper";
import moment from "moment"
import UpdateMatchWinner from "./updateMatchWinner";

const MiniMiltia = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const [playersList, setPlayersList] = useState([]);
  const [matchSchedule, setMatchSchedule] = useState([]);
  const [openEditPoint, setOpenEditPoint] = useState(null);


  useEffect(() => {
    // getRegisterData()
    // getPlayoffSchedule()
    // getTournamentList()
  }, [])

  let controller;

  const getRegisterData = async () => {
    if (controller) controller.abort()
    controller = new AbortController()
    let data = await tmntGetApi(`/get_mm__players`, {
      signal: controller.signal
    }).catch((err) => {
      console.log(err);
    })
    if (data) {
      setPlayersList(data)
    }
  }



  const createPlayoffSchedule = async () => {
    // let data = await tmntPostApi(`/createPlayOff`, {
    //   create: 1,
    //   tmtName: "Test1"
    // }).catch((err) => {
    //   console.log(err);
    // })
    // if (data) {
    //   console.log(data);
    //   getPlayoffSchedule()
    // }
  }

  // const getTournamentList = async () => {
  //   let data = await tmntPostApi(`/getTmtList`, {
  //     admin: 1
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  //   if (data) {
  //     console.log(data.response);
  //   }
  // }

  const getPlayoffSchedule = async () => {
    // let data = await tmntPostApi(`/getPlayOff`, {
    //   tmtID: 7
    // }).catch((err) => {
    //   console.log(err);
    // })
    // if (data) {
    //   setMatchSchedule(data.response)
    // }
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
          {playersList && playersList?.length > 0 && <table className="tmnt-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Phone number</th>
              </tr>
            </thead>
            <tbody>
              {playersList.map((player, i) => {
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
          </table>}
          {/* <button onClick={() => {
            createPlayoffSchedule()
          }} className="my-5">Create Schedule</button> */}

          {matchSchedule && matchSchedule?.length > 0 && <table className="tmnt-table">
            <thead>
              <tr>
                <th>tmtID</th>
                <th>Team a</th>
                <th>Team b</th>
                <th>Match date</th>
                <th>Won</th>
              </tr>
            </thead>
            <tbody>
              {matchSchedule.map((match, i) => {
                return <tr key={i}>
                  <td>
                    {match.tmtID}
                  </td>
                  <td>
                    {match.TeamA.name}
                  </td>
                  <td>
                    {match.TeamB.name}
                  </td>
                  <td>
                    {match.matchDt}
                  </td>
                  <td>
                    <button onClick={() => { setOpenEditPoint(match) }}>Update</button>
                  </td>
                </tr>
              })}
            </tbody>
          </table>}
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

          {openEditPoint !== null && <UpdateMatchWinner openEditPoint={openEditPoint} setOpenEditPoint={setOpenEditPoint} />}

        </div>
      </div>
    </div>
  );
}

export default MiniMiltia;