async function loadPosts() {
  const remoteUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random";

  const response = await fetch(remoteUrl);
  const data = await response.json();
  console.log("Data from backend is: ", data);
}

document.addEventListener("DOMContentLoaded", () => {
  loadPosts().catch((err) => console.error("loadPosts failed:", err));
});
