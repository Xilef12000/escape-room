const input1 = document.getElementById("loesung");
const submit = document.getElementById("submit");
const cform = document.getElementById("informatikroom-form");

cform.addEventListener("submit", (e) => {
  e.preventDefault();
  input1.value = input1.value.toLowerCase();
  console.log(input1.value);

  if (input1.value === "1307100") {
    var oldAlert = document.getElementById("alert");

    if (oldAlert !== null) oldAlert.remove();

    setRoomStatusDone(1);

    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert("Well done!", "success");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
      window.location.assign("/home.html");
    }, 5000);
  } else {
    var oldAlert = document.getElementById("alert");

    if (oldAlert !== null) oldAlert.remove();

    // Erstelle neuen Alert und entferne ihn nach 5 Sekunden
    alert("Sorry, wrong solution!", "danger");
    var currentAlert = document.getElementById("alert");
    setTimeout(() => {
      currentAlert.remove();
    }, 5000);
  }
});
