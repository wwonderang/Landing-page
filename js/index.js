function onClick(element) {
  const id = element.id;
  const clickedElement = document.getElementById(id);
  const currentActive = document.getElementsByClassName("active-button");
  if (currentActive.length) {
    currentActive[0].classList.remove("active-button");
  }
  clickedElement.classList.add("active-button");
}