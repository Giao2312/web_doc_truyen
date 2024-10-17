document.addEventListener("DOMContentLoaded", function () {
  const comics = [
    {
      title: "Comic Book 1",
      description: "This is the description for Comic Book 1.",
      image: "path/to/image1.jpg",
    },
    {
      title: "Comic Book 2",
      description: "This is the description for Comic Book 2.",
      image: "path/to/image2.jpg",
    },
    // Add more comics here...
  ];

  const comicList = document.getElementById("comicList");
  const comicTitle = document.getElementById("comicTitle");
  const comicDescription = document.getElementById("comicDescription");
  const comicImage = document.getElementById("comicImage");

  comics.forEach((comic, index) => {
    const li = document.createElement("li");
    li.textContent = comic.title;
    li.addEventListener("click", () => displayComic(index));
    comicList.appendChild(li);
  });

  function displayComic(index) {
    const comic = comics[index];
    comicTitle.textContent = comic.title;
    comicDescription.textContent = comic.description;
    comicImage.src = comic.image;
  }
});
