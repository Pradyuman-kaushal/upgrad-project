var up_modal = document.getElementById('Sign_Up');
var btn = document.getElementById("SUp");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
 up_modal.style.display = "block";
}
span.onclick = function() {
  up_modal.style.display = "none";
}
