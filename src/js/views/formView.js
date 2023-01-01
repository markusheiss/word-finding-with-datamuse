class FormView {
  _parentEl = document.querySelector('.search-form');
  firstWord = `<div>
  <label for="firstword">word</label>
  <input type="text" name="firstword" id="firstword" required />
  </div>`;
  secondWord = `<div class="hidden">
  <label for="secondword">second word</label>
  <input type="text" name="secondword" id="secondword" required />
  </div>`;
  startsWith = `<div class="hidden">
  <label for="startswith">starts with</label>
  <input type="text" name="startswith" id="startswith" maxlength="1"required  />
  </div>`;
  endsWith = `<div class="hidden">
  <label for="endswith">ends with</label>
  <input type="text" name="endswith" id="endswith" maxlength="1" required />
  </div>`;
  lettersBetween = `<div class="hidden">
  <label for="lettersbetween">number letters between</label>
  <input
    type="number"
    min="0"
    name="lettersbetween"
    id="lettersbetween" required />
  </div>`;
  searchButton = `<button class="btn btn-search">Search</button>`;

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', e => {
      e.preventDefault();

      const formObject = new FormData(e.target);
      const data = Array.from(formObject.entries());

      handler(data);
    });
  }

  updateForm(code) {
    let html;

    html = this.firstWord;
    if (code === 'se')
      html = this.startsWith + this.endsWith + this.lettersBetween;

    html += this.searchButton;

    this._parentEl.innerHTML = '';
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }
}
export default new FormView();
