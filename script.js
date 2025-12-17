const addBtn = document.getElementById("addBtn");
const themeBtn = document.getElementById("themeBtn");
const input = document.getElementById("input");
const cardContainer = document.getElementById("cardContainer");

data = [
  { id: 1, title: "Read" },
  { id: 2, title: "Pray" },
];

data.forEach((item) => {
  const card = document.createElement("div");
  card.textContent = item.title;
  card.style.border = "1px solid black";
  card.style.padding = "10px";
  card.style.margin = "10px 0";
  card.innerHTML +=
    ' <button class="removeBtn" aria-label="Remove item">X</button>';
  card.querySelector(".removeBtn").addEventListener("click", () => {
    cardContainer.removeChild(card);
  });
  cardContainer.appendChild(card);
});

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text) {
    const card = document.createElement("div");
    card.textContent = text;
    card.style.border = "1px solid black";
    card.style.padding = "10px";
    card.style.margin = "10px 0";
    card.innerHTML +=
      ' <button class="removeBtn" aria-label="Remove item">X</button>';
    card.querySelector(".removeBtn").addEventListener("click", () => {
      cardContainer.removeChild(card);
    });
    cardContainer.appendChild(card);
    input.value = "";
  }
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("bg-gray-100");
  document.body.classList.toggle("bg-gray-900");
  document.body.classList.toggle("text-gray-900");
  document.body.classList.toggle("text-white");
});
