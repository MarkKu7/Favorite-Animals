$(document).ready(function() {
  $("form#animal").submit(function(event) {
    const animalone = $("input#animal1").val();
    const animaltwo = $("input#animal2").val();
    const animalthree = $("input#animal3").val();

    let favoriteAnimals = [animalone, animaltwo, animalthree];
    let newfavoriteAnimals = []; 
    newfavoriteAnimals.push(favoriteAnimals[0], favoriteAnimals[1], favoriteAnimals[2]);

    newfavoriteAnimals.forEach(function(element) {
      $("ul#animalList").append("<li>" + element + "</li>")
    });

    event.preventDefault();
  });
});