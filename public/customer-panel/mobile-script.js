function toggleMenu() {
  let navigation = document.querySelector(".main-navigation");
  navigation.classList.toggle("active-mobile");

  let toggle = document.querySelector(".toggle-mobile");
  toggle.classList.toggle("active-mobile");
}
