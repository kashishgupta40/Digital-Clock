const clock = document.getElementById('clock');
//document.querySelector('#clock');

/*let date = new Date();
console.log(date.toLocaleString());

*/

setInterval(function(){
    let date = new Date();
  //  console.log(date.toLocaleString()); 
  clock.innerHTML = date.toLocaleString();
}, 1000);