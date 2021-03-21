import axios from "axios";
const lugar={lugar};
const options = {
  method: 'GET',
  url: 'https://covid-19-data.p.rapidapi.com/country',
  params: {name: lugar},
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPIAPI_API_KEY,
    'x-rapidapi-host': process.env.REACT_APP_RAPIAPI_API_HOST
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
  console.log(response.data[0].country);

}).catch(function (error) {
	console.error(error);
});

export default (handler) => {
    axios.request(options).then(function (response){
        console.log(response.data);
        handler(null, response.data)

    }).catch(function (error){
        console.error(error);
        handler(error, null);
    });
}