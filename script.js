'use strict'; 

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries') ;

///////////////////////////////////////////////

const renderCountry = (responseData, className = '') => {
  const html = 
  `<article class="country ${className}">
        <img class="country__img" src="${responseData.flag}" />
        <div class="country__data">
          <h3 class="country__name">${responseData.name}</h3>
          <h4 class="country__region">${responseData.region}</h4>
          <p class="country__row"><span>👫</span>${(responseData.population / 1000000).toFixed(1)}M people</p>
          <p class="country__row"><span>🗣</span>${responseData[0].languages[0].name}</p>
          <p class="country__row"><span>💰</span>${responseData[0].currencies[0].code}</p>
        </div>
      </article>`;

      countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;

};


const getCountry = (country)  => {
    //1.Make http request
    const requestData = new XMLHttpRequest();

    // 2. open the request
    requestData.open('GET', `https://restcountries.com/v2/name/${country}`);

    // 3.send the request
    requestData.send();
    // console.log(requestData.responseText)

    // 4.Create an event handler for the request
    requestData.addEventListener('load', function() {
    // console.log(this.responseText);

    // (Chunk response to JSON objects
    const responseData = JSON.parse(this.responseText);
    console.log(responseData);


    console.log(responseData[0].flag);
    console.log(responseData[0].name)
    console.log(responseData[0].region)
    console.log(responseData[0].population)
    console.log(responseData[0].languages[0].name)
    console.log(responseData[0].currencies[0].code)

    const html = 
    `<article class="country">
          <img class="country__img" src="${responseData[0].flag}" />
          <div class="country__data">
            <h3 class="country__name">${responseData[0].name}</h3>
            <h4 class="country__region">${responseData[0].region}</h4>
            <p class="country__row"><span>👫</span>${(responseData[0].population / 1000000).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣</span>${responseData[0].languages[0].name}</p>
            <p class="country__row"><span>💰</span>${responseData[0].currencies[0].code}</p>
          </div>
        </article>`;


        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
    })

};

getCountry('portugal');
getCountry('nigeria');
getCountry('usa');



// Getting the Country and Neighbouring country

const getCountryAndNeighbour = (country) => {
  //make hhtp request
  const requestData = new XMLHttpRequest();

  //open the request
  requestData.open('GET', `https://restcountries.com/v2/name/${country}`)

  //send the request
  requestData.send();

  //create an event handler for the request
  requestData.addEventListener =('load', () => {

    //convert (chunk) response to JSON Object
    const [responseData] = JSON.parse(this.responseText);
    console.log(responseData);



    // console.log(responseData[0].flag);
    // console.log(responseData[0].name)
    // console.log(responseData[0].region)
    // console.log(responseData[0].population)
    // console.log(responseData[0].languages[0].name)
    // console.log(responseData[0].currencies[0].code)


    // renderCountry(responseData);

    const Neighbour = responseData.borders[0];
    console.log(Neighbour);


    if (Neighbour) return;


    // Make HTTP request
    const requestData2 = new XMLHttpRequest();


    // Open the request

    requestData2.open('GET',`https://restcountries.com/v2/alpha/${Neighbour}`);

    // send the request

    requestData2.send();

    // create an event handler for the request
    requestData2.addEventListener =('load',function(){
      // convert chunks response to JSON object

      const [responseData2] = JSON.parse(requestData2.responseText);
      console.log(responseData2);


      renderCountry(responseData2, 'newCountry');
    });


  });

};

getCountryAndNeighbour('nigeria');






//  //make hhtp request
//  const requestData = new XMLHttpRequest();

//  //open the request
//  requestData.open('GET', `https://restcountries.com/v2/name/${country}`)


// open the request
 const request = fetch(`https://restcountries.com/v2/name/nigeria`);
 console.log(request);


 const getCountryData = (countryName) => {

  // Main country
  getJSON(`https://restcountries.com/v2/name/${countryName}`, 'Not Available')
  .then(newResponse => {
    console.log(newResponse[0]);
    renderCountry(newResponse[0]);

    const  NeighbourCountry = 'Laspotech';
    console.log(NeighbourCountry)
  })

 }