
const TournamentBracket = () => {

  return (<div>

    <div className="container my-2">
      <h5 className="py-4">Tournament route to final</h5>

      <div className="tmnt-map-layout">
        <div className="tmnt-map-layout-round">
          <h3 className="tmnt-map-layout-round-title">Qulifier 1</h3>
          <ul className="tmnt-map-layout-list">
            <li className="tmnt-map-layout-item">
              <div className="tmnt-map-layout-match" tabIndex="0">
                Qulifier A
              </div>
            </li>

            <li className="tmnt-map-layout-item">
              <div className="tmnt-map-layout-match" tabIndex="0">
                Qulifier B
              </div>
            </li>
            <li className="tmnt-map-layout-item">
              <div className="tmnt-map-layout-match" tabIndex="0">
                Qulifier C
              </div>
            </li>

            <li className="tmnt-map-layout-item">
              <div className="tmnt-map-layout-match" tabIndex="0">
                Qulifier D
              </div>
            </li>
          </ul>
        </div>
        <div className="tmnt-map-layout-round  tmnt-map-layout-round-qulifier2 ">
          <h3 className="tmnt-map-layout-round-title">Qulifier 2</h3>
          <ul className="tmnt-map-layout-list">
            <li className="tmnt-map-layout-item">
              <div className="tmnt-map-layout-match" tabIndex="0">
                Eliminator A
              </div>
            </li>

            <li className="tmnt-map-layout-item">
              <div className="tmnt-map-layout-match" tabIndex="0">
                Eliminator B
              </div>
            </li>
          </ul>
        </div>
        <div className="tmnt-map-layout-round tmnt-map-layout-round-final">
          <h3 className="tmnt-map-layout-round-title">Grand Finale</h3>
          <div className="tmnt-map-layout-item direct-final">
            <div className="tmnt-map-layout-match" tabIndex="0">
              Finale A
            </div>
          </div>
          <div className="final-between">vs</div>
          <ul className="tmnt-map-layout-list">
            <li className="tmnt-map-layout-item">
              <div className="tmnt-map-layout-match" tabIndex="0">
                Finale B
              </div>
            </li>
          </ul>
        </div>
        <div className="tmnt-map-layout-round tmnt-map-layout-round-champion">
          <h3 className="tmnt-map-layout-round-title">Champion</h3>
          <ul className="tmnt-map-layout-list">
            <li className="tmnt-map-layout-item">
              <div className="tmnt-map-layout-match" tabIndex="0">
                Winner
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>);
}

export default TournamentBracket;
