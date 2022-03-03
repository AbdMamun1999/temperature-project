document.getElementById('found-massage').style.display = 'none'
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
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    fetch(url)
    .then(res =>{
        if(res.status >= 200 && res.status <= 299){
            return res.json()
        }else{
            document.getElementById('found-massage').style.display = 'block'
        }
    })
    .then(data => displayTemperature(data))
    .catch( error => console.log(error))
}
// const errorMassage = error =>{
//     document.getElementById('city-name').placeholder = 'Something went wrong'
// }

const setInnerText = (id,text) =>{
    document.getElementById(id).innerText = text;
}

const displayTemperature = cityInfo =>{
    console.log(cityInfo)
    setInnerText('city',cityInfo.name)
    setInnerText('temp',cityInfo.main.temp)
    setInnerText('condition',cityInfo.weather[0].main)

    const url = `http://openweathermap.org/img/wn/${cityInfo.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon')
    imgIcon.setAttribute('src',url)
}
