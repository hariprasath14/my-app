
const TournamentBracket = () => {

  return (<div>

    <div class="container my-5">
      <h5 className="py-4">Tournament route to final</h5>
      
      <div class="tmnt-map-layout">
        <div class="tmnt-map-layout-round">
          <h3 class="tmnt-map-layout-round-title">Qulifier 1</h3>
          <ul class="tmnt-map-layout-list">
            <li class="tmnt-map-layout-item">
              <div class="tmnt-map-layout-match" tabindex="0">
                1234
              </div>
            </li>

            <li class="tmnt-map-layout-item">
              <div class="tmnt-map-layout-match" tabindex="0">
                1234
              </div>
            </li>
            <li class="tmnt-map-layout-item">
              <div class="tmnt-map-layout-match" tabindex="0">
                1234
              </div>
            </li>

            <li class="tmnt-map-layout-item">
              <div class="tmnt-map-layout-match" tabindex="0">
                1234
              </div>
            </li>
          </ul>
        </div>
        <div class="tmnt-map-layout-round  tmnt-map-layout-round-qulifier2 ">
          <h3 class="tmnt-map-layout-round-title">Qulifier 2</h3>
          <ul class="tmnt-map-layout-list">
            <li class="tmnt-map-layout-item">
              <div class="tmnt-map-layout-match" tabindex="0">
                1234
              </div>
            </li>

            <li class="tmnt-map-layout-item">
              <div class="tmnt-map-layout-match" tabindex="0">
                1234
              </div>
            </li>
          </ul>
        </div>
        <div class="tmnt-map-layout-round tmnt-map-layout-round-final">
          <h3 class="tmnt-map-layout-round-title">Grand Finale</h3>
          <div class="tmnt-map-layout-item direct-final">
            <div class="tmnt-map-layout-match" tabindex="0">
              1234
            </div>
          </div>
          <div className="final-between">vs</div>
          <ul class="tmnt-map-layout-list">
            <li class="tmnt-map-layout-item">
              <div class="tmnt-map-layout-match" tabindex="0">
                1234
              </div>
            </li>
          </ul>
        </div>
        <div class="tmnt-map-layout-round tmnt-map-layout-round-champion">
          <h3 class="tmnt-map-layout-round-title">Champion</h3>
          <ul class="tmnt-map-layout-list">
            <li class="tmnt-map-layout-item">
              <div class="tmnt-map-layout-match" tabindex="0">
                1234
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>);
}

export default TournamentBracket;
