import dataJson from "./response.json" assert { type: "json" };

console.log(dataJson);

// const searchInput = document.getElementById('input-search');
// const searchBtn = document.getElementById('search-btn');
// const pictures = document.querySelector('.pictures');
// const heartBtn = document.querySelector('.heart-btn');
// const authorName = document.querySelector('.author-name');

const html = `
<div class="card">
        <div class="images">
          <img src="${original}" alt="" class="pictures" />
        </div>
        <div class="subscription">
          <div class="subscription-row">
            <button class="heart-btn">
              <img src="images/heart-solid.svg" alt="" />
            </button>
            <h1 class="author-name">Name of author</h1>
          </div>
        </div>
      </div>
`;
