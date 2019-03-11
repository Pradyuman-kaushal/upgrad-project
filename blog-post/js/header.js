var up_modal = document.getElementById('Sign_Up');
var btn = document.getElementById("SUp");
var btn1 = document.getElementById("SU");

var span = document.getElementsByClassName("close")[1];
var in_modal = document.getElementById('Sign_In');
var ibtn = document.getElementById("SIn");
var qspan = document.getElementsByClassName("close")[0];


ibtn.onclick = function() {
 in_modal.style.display = "block";
}
qspan.onclick = function() {
  in_modal.style.display = "none";
}
btn.onclick = function() {
        up_modal.style.display = "block";
}
btn1.onclick = function() {
    in_modal.style.display= "none";
    up_modal.style.display = "block";
} 
span.onclick = function() {
  up_modal.style.display = "none";
}
