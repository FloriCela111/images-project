// import dataJson from "./response.json" assert { type: "json" };
//console.log(dataJson);


// const modalHtml = `
// <div id="myModal" class="modal">
//   <span class="close"><img  src="/images/circle-xmark-solid.svg" class="closeImg"/></span>
//   <img class="modal-content" id="img01" style="background-color: transparent; border-color: transparent">
//   <div id="caption"></div>
// </div>
// `;
// cardContainer.insertAdjacentHTML("beforeend", modalHtml);

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






const api = {
  url: "https://api.pexels.com/v1/search?query=",
  key: "563492ad6f9170000100000172e40c73ea194f8589f3de8585118b13",
};

function checkPictures(apiUrl) {
  console.log(apiUrl);

  fetch(apiUrl, {
    headers: {
      Authorization: api.key,
    }
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Image not found 💩");
    }
    return res.json()
  })
    .then((data) => {
      console.log(data);

      const cardContainer = document.getElementById("card-container");
      cardContainer.innerHTML = "";

      const modalHtml = `
<div id="myModal" class="modal">
  <span class="close"><img  src="/images/circle-xmark-solid.svg" class="closeImg"/></span>
  <img class="modal-content" id="img01" style="background-color: transparent; border-color: transparent">
  <div id="caption"></div>
</div>
`;
      cardContainer.insertAdjacentHTML("beforeend", modalHtml)




      if (Array.isArray(data.photos)) {
        data.photos.forEach((photo) => {
          const likedPhotos = photo.liked
            ? "images/heart-solid.svg"
            : "images/heart-regular.svg";
          const html = `
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
          cardContainer.insertAdjacentHTML("beforeend", html);
          console.log(html, "skdfl");
        })
      }

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

    }).catch((error) => {
      console.error("Error images", error.message);
    })
}

const searchInput = document.getElementById('input-search');
const searchButton = document.getElementById('search-btn')




checkPictures(api.url);

searchButton.addEventListener('click', function () {
  const query = searchInput.value;
  console.log(query);
  if (query) {
    const apiUrl = `https://api.pexels.com/v1/search?query=${query}`;
    console.log(apiUrl);
    checkPictures(apiUrl)
  }
})

searchInput.addEventListener('keydown', function (e) {
  if (e.key === "Enter") {
    e.preventDefault()
    const query = searchInput.value;
    if (query) {
      const apiUrl = `https://api.pexels.com/v1/search?query=${query}`;
      checkPictures(apiUrl)
    }
  }
})

