var num = [40,,26,20];

function loadMarks(){
  document.getElementById("fruits").innerHTML = num;
}
function myFunction(){
  var fruit = prompt("Your mark");
  num[num.length] = fruit;
  document.getElementById("fruits").innerHTML = num;
}

function avgMarks(){
  sum = 0;
  count = 0;
  if(num.length > 0){
    for (let i = 0; i < num.length; i++) {
      if(num[i]!=undefined){
        sum += num[i];
        count =count + 1;
        console.log(sum);
        console.log(count)
      }
    }
    var avg = sum/num.length;
    document.getElementById("average").innerHTML = avg;
  }
  else{
    document.getElementById("average").innerHTML = "Empty array";
  }
  delete sum;
  delete count;
}