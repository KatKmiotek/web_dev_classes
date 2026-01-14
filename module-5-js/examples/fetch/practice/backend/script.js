async function getData() {
  const remoteUrl = "https://opentdb.com/api.php?amount=10";
  const response = await fetch(remoteUrl);
  if (!response.ok)
    throw new Error(`Network response was not ok: ${response.status}`);
  const data = await response.json();
  return data;
}


function renderDataAsText(data) {
  const main = document.querySelector("main") || document.body;
  const label = document.createElement('div');
  label.textContent = 'Data from backend:';
  label.style.marginTop = '1rem';
  label.style.fontWeight = '600';
  const container = document.createElement('pre');
  container.style.whiteSpace = 'pre-wrap';
  container.style.background = 'transparent';
  container.style.border = '1px solid #eee';
  container.style.padding = '12px';
  container.style.marginTop = '0.5rem';
  container.style.fontSize = '0.9rem';
  const toDisplay = data
  container.textContent = JSON.stringify(toDisplay, null, 2);
  main.appendChild(label);
  main.appendChild(container);
}

document.addEventListener("DOMContentLoaded", async () => {
    const backendData = await getData();
    console.log({ backendData });
    renderDataAsText(backendData);
});
