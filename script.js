// JAVASCRIPT CODE
function check() {
  var value = document.getElementById("data").value;
  if (value == "") {
    alert("Please type your name");
  } else if (value != 0) {
    res = `I love you ${value}💑 dear `;
  }
  document.getElementById("res").innerText = res;
}
