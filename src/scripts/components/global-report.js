class GlobalReport extends HTMLElement {
  connectedCallback() {
    this.region = this.getAttribute("region");
    this.render();
  }

  set globalItem(item) {
    this._globalItem = item;
    this.render();
  }

  // setRegion() {
  //   const confirmed =
  //     this.region === "Indonesia"
  //       ? this._indonesiaItem.confirmed.value
  //       : this._globalItem.confirmed.value;
  //   const death =
  //     this.region === "Indonesia"
  //       ? this._indonesiaItem.deaths.value
  //       : this._globalItem.deaths.value;
  //   const recovered =
  //     this.region === "Indonesia"
  //       ? this._indonesiaItem.recovered.value
  //       : this._globalItem.recovered.value;

  //   return { confirmed: confirmed, death: death, recovered: recovered };
  // }

  render() {
    // const data = this.setRegion();
    this.innerHTML = `
     <div class="live-report-container">
            <div class="live-report-title">
                <div class="live-report-circle"></div>
                <h1>Live Report (Global)</h1>
            </div>

            <hr>
            <div class="report-result-container">
                <div class="report-result">
                    <div class="dirawat-sign">
                        <span></span>
                    </div>
                    <h1>${this._globalItem.confirmed.value}</h1>
                    <p>Terkonfirmasi</p>
                </div>
                <div class="report-result">
                    <div class="sembuh-sign">
                        <span></span>
                    </div>
                    <h1>${this._globalItem.recovered.value}</h1>
                    <p>Sembuh</p>
                </div>
                      <div class="report-result">
                    <div class="meninggal-sign">
                        <span></span>
                    </div>
                    <h1>${this._globalItem.deaths.value}</h1>
                    <p>Meninggal</p>
                </div>
                <!--  -->
            </div>
        
         
        </div>
        <hr>`;
  }
}

customElements.define("global-report", GlobalReport);
