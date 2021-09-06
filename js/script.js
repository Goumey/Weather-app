$(document).ready(function(){

    $("form").submit(function(event){
    event.preventDefault();
    
    let city=$("input").val();
    let key="5fde20b7e8293ffda01c8d53698690aa"
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ key}&units=metric`
    $.ajax({
        url:apiUrl,
        method:"GET",
        dataType:"json",
      
       
        success:function(post){
    
  
     $("#temperature").text(`${post.main.temp}°C`)
     $("#humidity").text(`${post.main.humidity}%`)
     $("#maxtemp").text(`${post.main.temp_max}°C`)
     $("#mintemp").text(`${post.main.temp_min}°C`)
     $("#longitude").text(`${post.coord.lon}°`)
     $("#latitude").text(`${post.coord.lat}°`)
     $("#description").text(`${post.weather[0].description}`)
  
    
    
          },
        Error:function(){
            console.log("il y'a une erreur");
        }
    })
    })
    
    
    
    
    })