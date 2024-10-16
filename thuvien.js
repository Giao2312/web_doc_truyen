document.addEventListener("DOMContentLoaded", function () {
  const bookForm = document.getElementById("bookForm");
  const bookList = document.getElementById("bookList");
  const books = [];

  bookForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const image = document.getElementById("image").value;

    const book = {
      title,
      author,
      image,
    };

    books.push(book);
    displayBooks();
    bookForm.reset();
  });

  function displayBooks() {
    bookList.innerHTML = "";
    books.forEach((book, index) => {
      const bookItem = document.createElement("div");
      bookItem.className = "book";
      bookItem.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
            `;
      bookList.appendChild(bookItem);
    });
  }
});
