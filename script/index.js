const moreInfo = document.querySelector(".more-info-button");
const contact = document.querySelector(".contacts-button");
const video = document.querySelector(".video");
const mainTitle = document.querySelector(".main-title");
const info = document.querySelector("#information");
const contactMessage = document.querySelector(".contact-wrap");
const darkBody = document.querySelector(".dark-body");
const gif = document.querySelector(".lan-link");
const main = document.querySelector("main");

moreInfo.addEventListener("click", showMessage);
contact.addEventListener("click", toggleContact);
darkBody.addEventListener("click", toggleContact);
gif.addEventListener("click", animation);
function showMessage() {
  mainTitle.classList.add("hidden");
  moreInfo.classList.add("hidden");
  info.classList.remove("hidden");
  info.classList.add("body-hide");
  main.classList.add("body-hide");
  video.classList.add("body-hide");
  video.src = "../video/road.mp4";
  console.log(video.src);
}
function toggleContact() {
  contactMessage.classList.toggle("hidden");
  darkBody.classList.toggle("hidden");
  darkBody.classList.add("body-hide");
  contactMessage.classList.add("body-hide");
}
function animation() {
  gif.children[1].src = "../video/lang.gif";
  main.classList.add("body-hide");
}
