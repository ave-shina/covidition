class FooterContainer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <footer>
        <div class="footer-content">
            <p>&copy; 2021. Made by Muara Terma</p>
        </div>
    </footer>
    `;
  }
}
customElements.define("footer-container", FooterContainer);
