var fruits = ["Banana","Orange","Apple","Mango"];
function loadFruits(){
  document.getElementById("fruits").innerHTML = fruits;
}

function myFunction(){
  var fruit = prompt("what is your favourite fruit?");
  fruits[fruits.length] = fruit;
  document.getElementById("fruits").innerHTML = fruits;
}