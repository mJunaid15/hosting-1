function toggleMenu() {
  let navigation = document.querySelector(".main-navigation");
  navigation.classList.toggle("active");
  document.body.style.backgroundColor = "rgba(0,0,0,0.1)";

  let toggle = document.querySelector(".toggle");
  toggle.classList.toggle("active");
  document.body.style.backgroundColor = "white";
}

// function closeMenu() {

//   let toggle = document.querySelector(".toggle");
//   toggle.classList.toggle("active");
//   document.body.style.backgroundColor = "white";

// }
