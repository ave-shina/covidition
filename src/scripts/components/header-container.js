import covid from "../../image/covid.png";
import JagaJarak from "../../image/jaga-jarak.png";
import Masker from "../../image/masker.png";
import CuciTangan from "../../image/cuci-tangan.png";

class HeaderContainer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <div class="header-container">
            <div class="covid-explain">
                <h1>
                    Covid-19
                </h1>

                <hr>
                <div class="covid-explain-image">
                    <div class="covid-image-container">
                        <div class="covid-image">
                            <img src="${covid}" alt="">
                        </div>
                        <div class="covid-box-container">
                            <div class="box-ornament">
                                <div class="box"></div>
                                <div class="box"></div>
                                <div class="box"></div>
                            </div>

                        </div>
                    </div>
                </div>

                <p>
                    COVID-19 adalah penyakit menular yang disebabkan oleh jenis coronavirus yang baru ditemukan. Virus
                    baru
                    dan penyakit yang disebabkannya ini tidak dikenal sebelum mulainya wabah di Wuhan, Tiongkok, bulan
                    Desember 2019. COVID-19 ini sekarang menjadi sebuah pandemi yang terjadi di banyak negara di seluruh
                    dunia.
                </p>
                <div class="button-container">
                    <a href="https://covid19.go.id/tanya-jawab?page=4" target="_blank">
                        selengkapnya
                    </a>
                </div>

            </div>
            <div class="covid-frame-image">
                <div class="covid-image-container">
                    <div class="covid-image">
                        <img src="./image/covid.png" alt="">
                    </div>
                    <div class="covid-box-container">
                        <div class="box-ornament">
                            <div class="box"></div>
                            <div class="box"></div>
                            <div class="box"></div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="suggestion-container">
                <h1>Disiplin 3M</h1>
                <hr>
                <div class="suggestion-point">
                    <div class="suggestion-icon">
                        <img src="${Masker}" alt="">
                    </div>
                    <h3>Memakai Masker</h3>
                </div>
                <div class="suggestion-point">
                    <div class="suggestion-icon">
                        <img src="${CuciTangan}" alt="">
                    </div>
                    <h3>Mencuci Tangan
                        dengan sabun</h3>
                </div>
                <div class="suggestion-point">
                    <div class="suggestion-icon">
                        <img src="${JagaJarak}" alt="">
                    </div>
                    <h3>Menjaga Jarak dan
                        Menghindari Kerumunan</h3>
                </div>
            </div>
        </div>

        <hr>
    `;
  }
}
customElements.define("header-container", HeaderContainer);
