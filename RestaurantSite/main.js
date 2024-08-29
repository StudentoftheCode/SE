const initSlider = () => {
    const imageList = document.querySelector(".slider .image-list");
    const slideButtons = document.querySelectorAll(".slider .slide-button");
  
    slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -0.2 : 0.2;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });
  };
  
  window.addEventListener("load", initSlider);
  