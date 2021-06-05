import Logo from "../../image/logo.png";

class NavbarContainer extends HTMLElement {
  set indonesiaItem(item) {
    this._indonesiaItem = item;
    this.render();
  }
  render() {
    const date = new Date(this._indonesiaItem.lastUpdate);
    const month = [
      "Januari",
      "Februari",
      "Maret",
      "Aprl",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    this.innerHTML = `
   <nav>
            <div class="navbar-title">
                <div class="header-logo">
                    <img src="${Logo}" class="logo-image">
                </div>
                <h1 class="header-title">Covidition</h1>

            </div>
            <div class="navbar-date">
                <p> ${date.getDate()} ${
      month[date.getMonth()]
    } ${date.getFullYear()}.</p>
            </div>
        </nav>
        <hr>
`;
  }
}
customElements.define("navbar-container", NavbarContainer);
