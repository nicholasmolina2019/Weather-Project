 $(document).ready(function(){
  $(".submit").click(function(){
 //declaring variable
  const city = $(".search-city").val();
  if(city!= ' '){
    $.ajax({
     URL:'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=c8ca4c1b15df1fdb6434fbb8de36fa07&unios=imperial',
     //https://openweathermap.org/current#data
     //https://seir-batch.netlify.app/frontend-fundamentals/week-2/day-5/lecture-materials/intro-to-ajax-and-javascript-promises/
     //https://api.jquery.com/jquery.ajax/
     dataType: "jsonP"

    
    })
   }



   })
 })
