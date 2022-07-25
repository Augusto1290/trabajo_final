

  var k;
  var lon;
  var lat;
  var sum=document.querySelectorAll('sum');
  var loc=document.getElementById('loc');
  const clima=document.getElementById('clima');
  const nav_temp=document.getElementById('nav_temp');
  const url_icon=document.getElementById('icon');
  var kelvin=273.15;
  

  window.addEventListener("load",() =>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
            
            console.log(position);
            lon=position.coords.longitude;
            lat=position.coords.latitude;
            

            const api_id='38443966cb31ebfb6ae7abf2dbc3183a'
            const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` + `lon=${lon}&appid=${api_id}`;
 fetch(url) 
 
 .then((response)=>{
    
 console.log('respuesta json');
 return response.json();
})
 .then(data=>{
    console.log('esta es la data')
    console.log(data);
    loc.textContent=data.name;
    nav_temp.textContent=Math.floor(data.main.temp-kelvin)+" C°";
    var icon =(data.weather[0].icon);
    const url_icon=`http:\\openweathermap.org/img/wn/${icon}.png`
    icon_img.src=url_icon;
    

    

  
 })
})
  }
})


 