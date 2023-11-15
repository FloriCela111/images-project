import dataJson from "./response.json" assert { type: "json" };

console.log(dataJson);

// const searchInput = document.getElementById('input-search');
// const searchBtn = document.getElementById('search-btn');
// const pictures = document.querySelector('.pictures');
// const heartBtn = document.querySelector('.heart-btn');
// const authorName = document.querySelector('.author-name');

const card = document.getElementById("card-container");
card.innerHTML = "";

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
        
  `;
  card.insertAdjacentHTML("beforeend", html);
});
