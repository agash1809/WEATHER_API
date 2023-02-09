function displayresult()
{
    var city = document.getElementById("city").value ;
    var apikey='355331934a96823cd552d8eea0cdded3';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +city+ '&appid=' +apikey+ '&units=metric')
        .then(response=> response.json())
        .then(data=>{
            var t=data['main']['temp']
            document.getElementById("output").innerHTML=t;    })
}