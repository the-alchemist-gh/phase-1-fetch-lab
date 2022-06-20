function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books')
  .then((resp)=>resp.json())
  .then(result=>{
    console.log(result)})
  
  return fetch('https://anapioficeandfire.com/api/books')
  .then((resp)=>resp.json())
  .then(result=>{
    renderBooks(result)})
}

function renderBooks(books) {
  const main = document.querySelector('main');
  let number = 1;
  books.forEach(book => {
    const h4 = document.createElement('h4');
    h4.innerHTML =` ${number++}) ${book.characters}`;
    main.appendChild(h4);
  });
  let totalNumber = 0;
  for(let i=0; i<books.length; i++){
    
    if(i===4){
      const h3 = document.createElement('h3');
      h3.innerHTML = `5th book in the series : ${books[i].name}`;
      main.appendChild(h3);
      console.log(books[i].characters[1031]);
    }
    // total number of pages
    totalNumber += books[i].numberOfPages;
  }
  return totalNumber;
}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
