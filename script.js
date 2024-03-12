const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];
// Use moviesList array for displaing the Name in the dropdown menu
var selectElement = document.getElementById("selectMovie");

moviesList.forEach(function(movie){
    var option =document.createElement('option');
    option.text = movie.movieName + " $"+movie.price;
    selectElement.add(option);
});
//Adding new options using moviearraylist


//Add eventLister to each unoccupied seat
//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button