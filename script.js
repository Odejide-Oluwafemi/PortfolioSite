const navLink = document.querySelectorAll(".navlinks");

navLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    link.className += " active";

    navLink.forEach((inactive) => {
      if (inactive !== link) inactive.className = "navlinks";
    });
  });
});