function generateResultCard(result) {
  const card = document.createElement("div");
  card.classList.add("film");
  let innerHtml = `
    <img class="film-img" src="${result.imgUrl}" alt="${result.title}" />
    <h2>${result.title}</h2>
    <p>${result.description}</p>`;

  card.innerHTML = innerHtml;
  return card;
}

document
  .getElementById("searchForm")
  .addEventListener("submit", handleFormSubmit);

fetchData();

async function handleFormSubmit(event) {
  event.preventDefault();

  try {
    const formData = new FormData(event.target);
    fetchData(formData)
  } catch (error) {
    console.error(error);
  }
}

async function fetchData(formData){
  const response = await fetch("/search", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Ошибка при отправке запроса: " + response.status);
  }

  const data = await response.json();

  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";
  data.results.forEach((result) => {
    const resultCard = generateResultCard(result);
    resultsContainer.appendChild(resultCard);
  });
}
