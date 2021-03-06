   $(document).ready(function(){
     $(".submit").click(() => {
         //declaring variable
         const city = $(".search-city").val();
         if (city != '') {
           $.ajax({
             _url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c8ca4c1b15df1fdb6434fbb8de36fa07&units=imperial`,
             get url() {
               return this._url;
             },
             set url(value) {
               this._url = value;
             },
             //https://openweathermap.org/current#data
             //https://seir-batch.netlify.app/frontend-fundamentals/week-2/day-5/lecture-materials/intro-to-ajax-and-javascript-promises/
             //https://api.jquery.com/jquery.ajax/
             type: "GET",
             dataType: "jsonp",
             success: function (data) {
               const weather = show(data);
               $(".temperature").html(weather);

             }
           });
         }
       }
)
   });   
     
function show(data){

  return `Temperature in  ${data.name}  is   ${data.main.temp} °F`
  
}

   
