// get city name
const cityName = () =>{
    // api key
    const api_key = `84b176e47a8731f1c70d4fb02f22851d`
    const city = document.getElementById('city-name').value; 
    if(city == ''){
        document.getElementById('city-name').placeholder = 'Please, Enter city name'
    }else{
        searchTemperature(city,api_key)
    }
}

// search data for city
const searchTemperature = (city,api_key) =>{
    console.log(city,api_key)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    fetch(url)
    .then(res =>{
        if(res.status >= 200 && res.status <= 299){
            return res.json()
        }else{
            console.log('data not found')
        }
    })
    .then(data => console.log(data))
}

