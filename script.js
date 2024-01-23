function myFunction() {
    var x = document.getElementById("myMain-menu");
    if (x.className === "main-menu") {
      x.className += " responsive";
    } else {
      x.className = "main-menu";
    }
  }