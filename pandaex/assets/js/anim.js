// windows.onLoad = function(){
//   setTimeout( function(){
    
//   }, 7000);
//   var load = document.getElementById("load");
//     load.classList.removeChild( active);
// }

// const header = document.querySelector('header.pre-loader');

// window.onload = function(){
//   setTimeout(function(){
//     header.style.display = "none"
//   }, 7000)
// }

function callme() {
  if(window.matchMedia("(max-width:768px)").matches){
   document.querySelector("body").classList.add('mobile');
  } else {
  document.querySelector("body").classList.remove("mobile");
  }
}
// windows load 
window.onload = function() {
callme();
}
// window resize 
window.onresize = function() {
callme();
}