const model = {
  state: {
    searchType: 'syn',
    endPoints: {
      syn: 'words?rel_syn=',
      ml: 'words?ml=',
      soundlike: 'words?sl=',
      se: 'words?sp=',
      rhyme: 'words?rel_rhy=',
    },
  },

  setSearchType(searchType) {
    this.state.searchType = searchType;
  },

  async search(formData) {
    const baseURL = 'https://api.datamuse.com/';
    this.state.formData = formData;

    const code = this.state.searchType;
    let word = '';

    word = formData[0][1];

    if (code === 'ml') {
      word = formData[0][1].replaceAll(' ', '+');
    }
    if (code === 'se')
      word = formData[0][1] + '?'.repeat(formData[2][1]) + formData[1][1];

    this.state.url = baseURL + `${this.state.endPoints[code]}${word}`;
    await this.getData();
  },

  async getData() {
    try {
      const res = await fetch(this.state.url);

      this.state.resData = await res.json();
    } catch (err) {
      console.log(err);
    }
  },
};

export default model;
