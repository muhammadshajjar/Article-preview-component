const shareBtn = document.querySelector(".profile__share-btn");
const profile = document.querySelector(".profile");
const profileInfo = document.querySelector(".profile__info");
const shareMobile = document.querySelector(".share-mobile");
const shareDesktop = document.querySelector(".share-desktop");
const arrow = document.querySelector(".arrow");

shareDesktop.style.display = "none";

const removeMobileState = () => {
  profileInfo.classList.remove("active");
  profile.classList.remove("active");
  shareMobile.classList.remove("active");
  shareBtn.classList.remove("active");
};
const addMobileState = () => {
  profileInfo.classList.toggle("active");
  profile.classList.toggle("active");
  shareMobile.classList.toggle("active");
  shareBtn.classList.toggle("active");
};

shareBtn.addEventListener("click", (e) => {
  if (window.innerWidth >= 1100) {
    if (shareDesktop.style.display == "none") {
      //condition to toggle the styles
      shareDesktop.style.display = "flex";
      shareBtn.classList.toggle("active");
    } else {
      shareDesktop.style.display = "none";
      shareBtn.classList.toggle("active");
    }
  } else {
    //mobile view
    addMobileState();
  }
});

//remove styles on resizing the window
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1100) {
    removeMobileState();
  } else shareDesktop.style.display = "none";
});

// close model by clicking any where on the page (optional)
document.addEventListener("click", (e) => {
  if (!(e.target == shareBtn || e.target == arrow)) {
    removeMobileState();
    shareDesktop.style.display = "none";
  }
});
