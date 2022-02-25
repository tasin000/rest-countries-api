getCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => country(data))
}
getCountries();

country = (countries) => {
    const countriesDiv = document.getElementById('countries');

    countries.map((x) => {
        console.log(x.flag);

        const newCountry = document.createElement('div');
        newCountry.classList.add('country');
        newCountry.innerHTML = `
        <h2>${x.name}</h2>
        <h3>${x.capital}</h3>
        <button onclick="loadCountryName('${x.name}')">Details</button>`
        countriesDiv.appendChild(newCountry);
    })

    loadCountryName = countryName => {
        const nameUrl = `https://restcountries.com/v3.1/name/${countryName}`
        fetch(nameUrl)
        .then(response => response.json())
        .then(data => loadInfo(data));
    }

    loadInfo = (info) => {
        console.log(info[0])
        const newDetail = document.getElementById('new-detail');
        newDetail.innerHTML = `
        <h3>Population: ${info[0].population}</h3>
        <h3>Short Name: ${info[0].cca2}</h3>
        <h3>Official Name: ${info[0].name.official}</h3>`
    }
}