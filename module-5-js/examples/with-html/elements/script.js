function createDivExample() {
  const div = document.createElement("div");
  div.className = "example-box";
  div.textContent = "Hello from a JS-created div!";
  document.body.appendChild(div);
}
function createOrderedListExample(items) {
  const ol = document.createElement("ol");
  ol.className = "generated-list";

  items.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    ol.appendChild(li);
  });

  document.body.appendChild(ol);
}

const itemsToDisplay = ["apple", "milk", "soda", "butter"]

document.addEventListener("DOMContentLoaded", () => {
  createDivExample();
  createOrderedListExample(itemsToDisplay);
});
