import dataJson from "./response.json" assert { type: "json" };

console.log(dataJson);

// const searchInput = document.getElementById('input-search');
// const searchBtn = document.getElementById('search-btn');
// const pictures = document.querySelector('.pictures');
// const heartBtn = document.querySelector('.heart-btn');
// const authorName = document.querySelector('.author-name');

const cardContainer = document.getElementById("card-container");
cardContainer.innerHTML = "";

const card = document.querySelector('.card');
const overlay = document.querySelector('.overlay');

for(let i = 0; i < card.length; i++) 
card[i].addEventListener('click', function () {
  console.log('button clicked');
})


dataJson.photos.map((photo) => {
  const likedPhotos = photo.liked
    ? "images/heart-solid.svg"
    : "images/heart-regular.svg";
  let html = `
  <div class="card">
        <div class="images" style="background-image: url(${photo.src.original})">
        </div>
          <div class="subscription">
            <div class="subscription-row">
              <button class="heart-btn">
                <img src="${likedPhotos}" alt="" />
              </button>
              <h1 class="author-name">${photo.photographer}</h1>
            </div>
          </div>
  </div>

  <div class="overlay"></div>
        
  `;
  cardContainer.insertAdjacentHTML("beforeend", html);
});
