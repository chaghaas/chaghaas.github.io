document.getElementById('menu').onclick = () =>
  document.getElementById('nav').classList.toggle('open');

const text = "Data Engineer | Databricks | AI";
let i = 0;
(function type() {
  if (i < text.length) {
    document.getElementById('tagline').textContent += text[i++];
    setTimeout(type, 80);
  }
})();
