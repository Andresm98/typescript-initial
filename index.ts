const fetchMyData = async (country: string) => {
  const request = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = await request.json();

  const main = document.getElementById('country');
  main.innerHTML = JSON.stringify(data[0].name.nativeName);
};

fetchMyData('ecuador').then(console.log);

///

const fetchMyDataDOM = () => {
  const main = document.getElementById('main');
  // Loading Placeholder
  main.innerHTML = '<p>Loading...';

  fetch(`https://restcountries.com/v3.1/region/europe`)
    .then((response) => response.json())
    .then((data) => {
      main.innerHTML = showMe(data);
    });
};

function showMe(countries) {
  const names = countries
    .map((country) => `<li>${country.name.common}</li>`)
    .join('\n');

  return `<ol>${names}</ol>`;
}

fetchMyDataDOM();
