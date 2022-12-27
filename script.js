const container = document.getElementById("container");

container.addEventListener("mouseover", (e) => {
  container.style.backgroundColor = "red";
});

container.addEventListener("mouseout", (e) => {
  container.style.backgroundColor = "unset";
});
container.addEventListener("mouseenter", generateTrees);

function generateTrees() {
  container.innerHTML = "";
  const treeCount = Math.floor(Math.random() * 25) + 1;
  for (let i = 0; i < treeCount; i++) {
    const randomTreeId = Math.floor(Math.random() * 25) + 1;
    const randomX = Math.random() * (container.getBoundingClientRect().width - 190);
    const randomY = Math.random() * (container.getBoundingClientRect().height - 190);
    const treeElement = document.createElement("div");
    treeElement.classList.add("tree");
    treeElement.style.setProperty("--bg-url", `url(images/tree${randomTreeId}.svg)`);
    treeElement.style.setProperty("--hover-bg-url", `url(images/tree${randomTreeId}-positive.svg)`);
    treeElement.style.setProperty("--x", randomX);
    treeElement.style.setProperty("--y", randomY);
    container.appendChild(treeElement);
  }
}

generateTrees();

const button = document.createElement("button");

button.innerHTML = "Plant new trees";
button.addEventListener("click", (e) => {
  location.reload();
});
document.body.appendChild(button);
