const debounce = require('lodash.debounce');
const countryList = document.querySelector('country-list');
const countryInfo = document.querySelector('country-info');

const input = document.querySelector('input');

input.addEventListener('input', debounce(searchValue, 300));
let name = '';
function searchValue(e) {
  name = e.target.value;
  console.log(name);
  responce(name);
}

function responce(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flag,languages`
  )
    .then(responce => {
      return responce.json();
    })
    .then(renderCountryCard)
    .catch(error => console.log(error));
}

function renderCountryCard(countries) {
  console.dir(countries);
}
