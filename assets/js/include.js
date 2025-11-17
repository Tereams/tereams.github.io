
async function includeHTML(id, file) {
  const element = document.getElementById(id);
  if (element) {
    const response = await fetch(file);
    const text = await response.text();
    element.innerHTML = text;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  includeHTML("header", "assets/html/header.html");
  includeHTML("footer", "assets/html/footer.html");
});
