const data = [

  { title: "buffer overflow baseado em Stack", tag: "vulnerabilidades", url: "pages/post5.html" }
];

const postsDiv = document.getElementById("posts");
const postsTitleEl = document.getElementById("posts-title");
const checks = document.querySelectorAll("input[type=checkbox]");

function render() {
  const active = [...checks].filter(function(c) { return c.checked; }).map(function(c) { return c.value; });

  if (postsTitleEl) {
    if (active.length === 0) {
      postsTitleEl.textContent = "$ ls posts";
    } else {
      const grepArg = active.join("|");
      postsTitleEl.textContent = '$ ls posts | grep "' + grepArg + '"';
    }
  }

  postsDiv.innerHTML = "";

  const toShow = active.length === 0
    ? data
    : data.filter(function(p) { return active.includes(p.tag); });

  toShow.forEach(function(p) {
    const el = document.createElement("div");
    el.className = "post";
    el.innerHTML = "<span class='tag'>" + p.tag + "</span><h3>" + p.title + "</h3>";
    el.addEventListener("click", function() { window.location.href = p.url; });
    postsDiv.appendChild(el);
  });
}

checks.forEach(function(c) { c.addEventListener("change", render); });
render();
