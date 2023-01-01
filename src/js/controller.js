import model from './model';
import searchTypeView from './views/searchTypeView';
import formView from './views/formView';
import listView from './views/listView';

const controlType = function (searchType) {
  model.setSearchType(searchType);
  formView.updateForm(model.state.searchType);
  listView.render();
};

const controlSearch = async function (formData) {
  listView.renderSpinner();
  await model.search(formData);
  formView.updateForm(model.state.searchType);
  listView.render(model.state.resData);
};

const init = function () {
  searchTypeView.addHandlerChangeType(controlType);
  searchTypeView.createList();
  formView.addHandlerSearch(controlSearch);
  formView.updateForm(model.state.searchType);
};

init();
