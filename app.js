var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";

    } else {
      panel.style.display = "block";
    }
  });
}

var acc = document.getElementsByClassName("accordionHamburger");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panelHamburger = this.nextElementSibling;
    if (panelHamburger.style.display === "block") {
      panelHamburger.style.display = "none";

    } else {
      panelHamburger.style.display = "block";
    }
  });
}

var acc = document.getElementsByClassName("toggle");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panelToggle = this.nextElementSibling;
    if (panelToggle.style.display === "block") {
      panelToggle.style.display = "none";

    } else {
      panelToggle.style.display = "block";
    }
  });
}
