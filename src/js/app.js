const btnSearch = document.querySelector('button');
const form = document.querySelector('.search-form');
const outputEl = document.querySelector('.words-list');
const searchTypes = document.querySelector('.search-types');

let searchType = null;

const getData = async function (queryObject) {
  const baseURL = 'https://api.datamuse.com/';

  try {
    const res = await fetch(
      `${baseURL}words?${queryObject.code}=${queryObject.word}`
    );

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const renderResult = function (data) {
  console.log(data);

  const html = data
    .map(
      word => `<li><span>${word.word}</span> <span>${word.score}</span></li>`
    )
    .join('');

  outputEl.innerHTML = '';
  outputEl.insertAdjacentHTML('afterbegin', html);
};

const handleRequest = async function (queryObject) {
  const data = await getData(queryObject);
  renderResult(data);
};

form.addEventListener('submit', e => {
  e.preventDefault();

  const formObject = new FormData(e.target);
  const data = Array.from(formObject.entries());

  if (searchType === 'syn') {
    handleRequest({ code: 'rel_syn', word: data[0][1] });
  }
  if (searchType === 'ml') {
    handleRequest({ code: 'ml', word: data[0][1].replaceAll(' ', '+') });
  }

  //   const word = inputWord.value;
  //   handleRequest({ word });
  //   inputWord.value = '';
});

searchTypes.addEventListener('click', e => {
  const btn = e.target.closest('.btn');
  if (!btn) return;

  searchType = btn.dataset.code;
});
