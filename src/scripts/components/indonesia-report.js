class IndonesiaReport extends HTMLElement {
  connectedCallback() {
    this.region = this.getAttribute("region");
    this.render();
  }
  set indonesiaItem(item) {
    this._indonesiaItem = item;
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
                <h1>Live Report (Indonesia)</h1>
            </div>

            <hr>
            <div class="report-result-container">
                <div class="report-result">
                    <div class="dirawat-sign">
                        <span></span>
                    </div>
                    <h1>${this._indonesiaItem.confirmed.value}</h1>
                    <p>Terkonfirmasi</p>
                </div>
                <div class="report-result">
                    <div class="sembuh-sign">
                        <span></span>
                    </div>
                    <h1>${this._indonesiaItem.recovered.value}</h1>
                    <p>Sembuh</p>
                </div>
                      <div class="report-result">
                    <div class="meninggal-sign">
                        <span></span>
                    </div>
                    <h1>${this._indonesiaItem.deaths.value}</h1>
                    <p>Meninggal</p>
                </div>
                <!--  -->
            </div>
            <hr>
            <div class="quote-container">
                <p>Ketika harapan tampak tidak ada harapan, teruslah berjuang. Ini adalah masa-masa sulit.
                    Saat kita keluar bersama, kita akan memiliki dunia yang lebih baik dan hati yang lebih bersih.</p>
            </div>
        </div>
        <hr>`;
  }
}

customElements.define("indonesia-report", IndonesiaReport);
