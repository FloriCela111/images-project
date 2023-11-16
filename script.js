import dataJson from "./response.json" assert { type: "json" };

//console.log(dataJson);


const cardContainer = document.getElementById("card-container");
cardContainer.innerHTML = "";

const modalHtml = `
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>
`;

// cardContainer.insertAdjacentElement("beforeend", modalHtml);

dataJson.photos.map((photo) => {
  const likedPhotos = photo.liked
    ? "images/heart-solid.svg"
    : "images/heart-regular.svg";
  let html = `
  <div class="card">
        <div class="images" id='image' style="background-image: url(${photo.src.original})">
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

  const modal = document.getElementById('myModal');
  const caption = document.getElementById('caption');
  const image = document.getElementById('img01');
  const close = document.querySelector('close');
  const card = document.querySelector("card")

  cardContainer.insertAdjacentHTML("beforeend", html, modalHtml);

});

let divImage = document.getElementById("card-container").children
console.log(divImage)
divImage.forEach(element => {
  element.addEventListener('click', function (e) {
    document.getElementById("modal").classList.add("modal")
    console.log('Button clicked', e);
    // modal.classList.remove('hidden');
    // caption.classList.remove('hiddden');

  })
});



