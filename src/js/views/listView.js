class ListView {
  _parentEl = document.querySelector('.words-list');

  render(data) {
    let html = '';

    if (!data) {
    } else if (data.length === 0) {
      html = 'nothing found!';
    } else {
      html = data
        .map(
          word =>
            `<li><span>${word.word}</span> <span>${word.score}</span></li>`
        )
        .join('');
      html = '<li><span>Word</span><span>Ranking</span></li>' + html;
    }

    this._parentEl.innerHTML = '';
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }

  renderSpinner() {
    this._parentEl.innerHTML = '';
    this._parentEl.insertAdjacentHTML(
      'afterbegin',
      '<span class="loading">loading data...</span>'
    );
  }
}

export default new ListView();
