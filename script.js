const searchInput = document.getElementById('input-search');
const searchBtn = document.getElementById('search-btn');
const pictures = document.querySelector('.pictures');
const heartBtn = document.querySelector('.heart-btn');
const authorName = document.querySelector('.author-name');

const url = fetch('/response.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

