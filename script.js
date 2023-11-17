import dataJson from "./response.json" assert { type: "json" };

//console.log(dataJson);


const cardContainer = document.getElementById("card-container");
cardContainer.innerHTML = "";

const modalHtml = `
<div id="myModal" class="modal">
  <span class="close"><img  src="/images/circle-xmark-solid.svg" class="closeImg"/></span>
  <img class="modal-content" id="img01" style="background-color: transparent; border-color: transparent">
  <div id="caption"></div>
</div>

`;

cardContainer.insertAdjacentHTML("beforeend", modalHtml);

dataJson.photos.map((photo) => {
  const likedPhotos = photo.liked
    ? "images/heart-solid.svg"
    : "images/heart-regular.svg";
  let html = `
  <div class="card">
        <img class="images" id='imageCard'src="${photo.src.original}">
       
       
          <div class="subscription">
            <div class="subscription-row">
              <button class="heart-btn">
                <img src="${likedPhotos}" alt="${photo}" />
              </button>
              <h1 class="author-name">${photo.photographer}</h1>
            </div>
          </div>
  </div>
  `;

  // const modal = document.getElementById('myModal');
  // // const caption = document.getElementById('caption');
  // const images = document.getElementById("image")
  // const image = document.getElementById('img01');
  // const close = document.querySelector('close');
  // const card = document.querySelector("card")

  cardContainer.insertAdjacentHTML("beforeend", html);

});

// let divImage = document.getElementById("card-container").children
// console.log(divImage)
// divImage.forEach(element => {
//   element.addEventListener('click', function (e) {
//     document.getElementById("modal").classList.add("modal")
//     console.log('Button clicked', e);
//     // modal.classList.remove('hidden');
//     // caption.classList.remove('hiddden');

//   })
// });
const modal = document.querySelector(".modal");
const caption = document.getElementById('caption');
const myModal = document.getElementById('myModal')

const imagesCards = document.querySelectorAll("#imageCard")
const modalImage = document.getElementById('img01');
const closeModalBtn = document.querySelector(".close");
// const close = document.querySelector('close');
// const card = document.querySelector("card")

imagesCards.forEach((image) => {
  image.addEventListener("click", function () {
    modal.style.display = "block";
    modalImage.src = this.src;
    caption.innerHTML = this.alt;
  })

  closeModalBtn.onclick = function () {
    modal.style.display = "none";
  };

  myModal.addEventListener('click', function () {
    modal.style.display = "none";
  })
  document.addEventListener('keydown', function (e) {

    if (e.key === "Escape") {
      modal.style.display = "none";
    }
  })
})

