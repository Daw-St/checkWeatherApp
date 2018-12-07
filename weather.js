   // http://kursjs.pl/kurs/ajax/fetch.php
   // http://kursjs.pl/kurs/es6/template-strings.php
    
   const btn = document.querySelector(".submit");

   let key = "055e5e07b36fec4ad51ecbd7623f58f1";
   let city = document.getElementsByClassName("form-control")
btn.addEventListener("click", function() {
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city[0].value + "&APPID=" + key)
   .then(resp => {
       return resp.json();
   })
   .then((resp) => {
       console.log(resp)
       console.log(resp.main.temp)
       return document.getElementById("showData").innerHTML = `
       <div class=\"container\">
       <div class="data">
           <div class="data-header">
               <h2 class="data-title"> Below you will find some deatils about weather in ${resp.name} </h2>
           </div>
           <div class="data-content">
               <div>${resp.main.temp}</div>
           </div>
       </div>
       </div>`;

   })
})