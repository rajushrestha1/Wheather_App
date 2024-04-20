
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
const SearchBox = () => {
  let [city, setCity]=useState("");
  const API_URL="https://api.openweathermap.org/data/2.5/weather";
  const API_KEY= "a0363ead38b08be449055b6332ab3352";
  let getWeatherInfo = async () =>{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result ={
      city:city,
      temp: jsonResponse.main.temp,
      tempMin : jsonResponse.main.temp_min,  
      tempMax : jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      wheather: jsonResponse.wheather[0].description,
    };
    console.log(result);
  };
  
  

  let handleChange = (evt) =>{
    setCity(evt.target.value);
  };
  let handleSubmit =(evt) =>{
    evt.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
  };
  return (
    <div className='SearchBox'>
      <h3>Search for the wheather</h3>
      <form onSubmit={handleSubmit}>
      <TextField id="City"
       label="City Name" 
       variant="outlined" 
       required 
       value={city}
       onChange={handleChange} />
      <br></br>
      <br></br>
      <Button variant="contained" type='submit'>Search</Button>
      </form>
    </div>
  );
}

export default SearchBox;
