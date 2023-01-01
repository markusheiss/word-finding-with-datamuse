class SearchTypeView {
  _parentEl = document.querySelector('.search-type-box');
  _types = [
    { name: 'Synonym', code: 'syn' },
    { name: 'similar meaning', code: 'ml' },
    { name: 'Sounds like', code: 'soundlike' },
    { name: 'start-between-end', code: 'se' },
    { name: 'rhymes with', code: 'rhyme' },
  ];

  addHandlerChangeType(handler) {
    this._parentEl.addEventListener('click', e => {
      const btn = e.target.closest('.btn');
      if (!btn) return;

      const btns = this._parentEl.querySelectorAll('.btn-type');
      btns.forEach(btn => {
        btn.classList.remove('btn-type--active');
      });
      btn.classList.add('btn-type--active');

      handler(btn.dataset.code);
    });
  }

  createList() {
    const markup = `<ul class='search-types'>
        ${this._types
          .map(
            type =>
              `<li class='search-type'>
          <button class='btn btn-type ${
            type.code === 'syn' ? 'btn-type--active' : ''
          }' data-code=${type.code}>
            ${type.name}
          </button>
        </li>`
          )
          .join('')}
      </ul>`;
    this._parentEl.insertAdjacentHTML('beforeend', markup);
  }
}

export default new SearchTypeView();
