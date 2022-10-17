const debounce = require('lodash.debounce');
import Notiflix from 'notiflix';
import Notiflix from 'notiflix';
import countryListHbs from '../templates/countryList.hbs';
import countryInfoHbs from '../templates/countryInfo.hbs';

const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const searchString = document.querySelector('#search-box');

const input = document.querySelector('input');

input.addEventListener('input', debounce(searchValue, 300));
let name = '';
function searchValue(e) {
  name = e.target.value.trim();
  console.log(name);
  responce(name);
}

function responce(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flag,flags,languages`
  )
    .then(responce => {
      return responce.json();
    })
    .then(renderCountryCardList)
    .catch(error => console.log(error));
}

function renderCountryCardList(countries) {
  if (searchString.value === '') {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
    Notiflix.Notify.warning('Memento te hominem esse');
  } else if (countries.length > 10) {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (countries.length >= 2 && countries.length <= 10) {
    let markup = countryListHbs(countries);
    countryInfo.innerHTML = markup;
    countryList.innerHTML = '';
  } else {
    let markup = countryInfoHbs(countries);
    countryInfo.innerHTML = '';
    countryList.innerHTML = markup;
  }
}
