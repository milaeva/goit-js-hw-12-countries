import fetchCountries from './fetchCountries';
import refs from './refs';
import countryCardTpl from '../templates/country-card.hbs';
import countriesListTpl from '../templates/countries-list.hbs';
import pnotify from './pnotify';

const debounce = require('lodash.debounce');
const arrorMessage = 'Too many matches found. Please enter a more specific query!';

const resultMoreTen = array => {
  if (array.length > 10) {
    refs.result.innerHTML = '';
    pnotify(arrorMessage);
  } else {
    return array;
  }
};

const resultMoreOne = array => {
  if (array && array.length > 1 && array.length < 10) {
    markupСountriesList(array);
  } else {
    return array;
  }
};

const markupСountriesList = array => {
  refs.result.innerHTML = countriesListTpl(array);
};

const createsResultTpl = array => {
  if (array) {
    refs.result.innerHTML = countryCardTpl(array[0]);
  }
};

const markupCountryResult = e => {
  const value = e.target.value.trim();
  if (!value) {
    refs.result.innerHTML = '';
    return;
  }
  fetchCountries(value).then(resultMoreTen).then(resultMoreOne).then(createsResultTpl);
};

refs.input.addEventListener('input', debounce(markupCountryResult, 500));
