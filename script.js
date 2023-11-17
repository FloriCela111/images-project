// import dataJson from "./response.json" assert { type: "json" };
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

// dataJson.photos.map((photo) => {
//   const likedPhotos = photo.liked
//     ? "images/heart-solid.svg"
//     : "images/heart-regular.svg";
//   let html = `
//   <div class="card">
//         <img class="images" id='imageCard'src="${photo.src.original}">
//           <div class="subscription">
//             <div class="subscription-row">
//               <button class="heart-btn">
//                 <img src="${likedPhotos}" alt="${photo}" />
//               </button>
//               <h1 class="author-name">${photo.photographer}</h1>
//             </div>
//           </div>
//   </div>
//   `;
//   cardContainer.insertAdjacentHTML("beforeend", html);
// });


const modal = document.querySelector(".modal");
const caption = document.getElementById('caption');
const myModal = document.getElementById('myModal')
const imagesCards = document.querySelectorAll("#imageCard")
const modalImage = document.getElementById('img01');
const closeModalBtn = document.querySelector(".close");
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


const apiUrl = "https://api.pexels.com/v1/search?query=";
const apiKey = "563492ad6f9170000100000172e40c73ea194f8589f3de8585118b13";

const checkPictures = function (pictures) {

  fetch(`${apiUrl}${pictures}`, {
    headers: {
      'Authorization': apiKey
    }
  }).then(response => response.json()).then(data => console.log(data))
}
