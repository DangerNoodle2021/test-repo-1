

//need to add in variables for each covid metric and 
var riskLevelEl = document.querySelector('#risk-level');
var currentDateEl = document.querySelector('#current-date')
var newCasesEl = document.querySelector('#new-cases')
var posTestRate = document.querySelector('#test-rate')
var stateTitleEl = document.querySelector('#covid-title')
var percentVax = document.querySelector('#percent-vaxxed')
console.log(riskLevelEl);
var stateIconEl = document.querySelector('#state-photo')
console.log(stateIconEl)
var formEl = document.querySelector('form');
var state = document.querySelector('#state')
console.log(formEl)
var apiKey = '7e0f83a022e24a68ae76e69913b1283c'

function initialData () {
    // event.preventDefault();
    var initialURL = 'https://api.covidactnow.org/v2/country/US.json?apiKey=' + apiKey
    var iconSourceEl = './assets/images/covidimages/USA.jpg'
    console.log(iconSourceEl)
    console.log(initialURL)
    fetch(initialURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log()
            riskLevelEl.innerHTML = data.riskLevels.overall
            currentDateEl.innerHTML= data.lastUpdatedDate //CONVERT TO Month, day year
            newCasesEl.innerHTML = data.actuals.newCases
            // posTestRate.innerHTML = data.actuals.positiveTests
            percentVax.innerHTML = (data.metrics.vaccinationsCompletedRatio) * 100
            // console.log(stateShorthand)
            stateIconEl.setAttribute("src", iconSourceEl)
        })
}

initialData();

function searchCovid (event){
    event.preventDefault();
    console.log('hello!!!!!!!!!!!!!!!!!')
    var stateShorthand= state.value
    var img = document.getElementById('state-photo')

    var requestURL = 'https://api.covidactnow.org/v2/state/' + stateShorthand + '.timeseries.json?apiKey=' + apiKey
    var iconstateEL = './assets/images/covidimages/' + stateShorthand + '.jpg'
    console.log(iconstateEL)
    console.log(requestURL)
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(requestURL)
            //change title of covid state to the state in the data.url
            riskLevelEl.innerHTML = data.riskLevels.overall
            currentDateEl.innerHTML= data.lastUpdatedDate //CONVERT TO Month, day year
            newCasesEl.innerHTML = data.actuals.newCases
            // posTestRate.innerHTML = data.actuals.positiveTests
            percentVax.innerHTML = (data.metrics.vaccinationsCompletedRatio) * 100
            //for the increase decrease, calculate the slope of the past 30 days of infection rate and if its positive then increase and if negative, decrease 
            // stateIconEl.setAttribute("src", iconstateEl)
            img.setAttribute('src', './assets/images/covidimages/' + stateShorthand + '.jpg');
        })
};

formEl.addEventListener('submit', searchCovid);
// gets covid data upon clicking the search button

// https://api.covidactnow.org/v2/state/IL.timeseries.json?apiKey=7e0f83a022e24a68ae76e69913b1283c

// function to loop images depending on which state is searched, if no state searched pull up whole map
// function add_img(){
//     var imgSearch = stateShorthand + '.jpg'
//     var insertIcon = document.querySelector('#state-photo');
//     img.src = '.\assets\images\covidimages';
//     imgSearch.append(insertIcon)
// }
// var insertIcon = document.querySelector('#state-photo')
// var fileLocation = "assets\images\covidimages";
// var ext = '.jpg';
// var i = 'AK';

// $(function imageloop(){
//     $('<img />').attr('src', fileLocation + i + ext).appendTo(insertIcon);
//     if ( i === IL){
//         console.log('yay');
//     }else{
//         i++;
//         imageloop();
//     };
// });



    //US on landing page
    //searched state
        //if the city is null, then provide state data
        //if city is specified, then provide county data

//searched state page
    //replace the general us cards with state, city, or date specific data
        //new cards should include small image, datetime, location, title and a favorite button

//favorite button 
    // a star or heart that fills when clicked and then adds to local storage
