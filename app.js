const memeForm = document.querySelector("#memeForm");
const memeList = document.querySelector("#memeList");

memeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const topText = document.querySelector("#topText").value;
  const bottomText = document.querySelector("#bottomText").value;
  const imageUrl = document.querySelector("#image").value;

  const memeContainer = document.createElement("div");
  memeContainer.classList.add("meme-container");

  const memeImage = document.createElement("img");
  memeImage.setAttribute("src", imageUrl);

  const memeTopText = document.createElement("div");
  memeTopText.classList.add("meme-text", "top");
  memeTopText.innerText = topText;

  const memeBottomText = document.createElement("div");
  memeBottomText.classList.add("meme-text", "bottom");
  memeBottomText.innerText = bottomText;

  memeContainer.appendChild(memeImage);
  memeContainer.appendChild(memeTopText);
  memeContainer.appendChild(memeBottomText);

  memeList.appendChild(memeContainer);

  memeImage.addEventListener("click", () => {
    memeContainer.remove();
  });

  memeForm.reset();
});

