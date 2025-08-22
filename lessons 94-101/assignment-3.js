const ourDiv = document.querySelector(".our-element");
const para = document.querySelector("p");

function createElement({ className, title, value, text }) {
  const el = document.createElement("div");
  el.className = className;
  el.title = title;
  el.dataset.value = value;
  el.textContent = text;
  return el;
}

function magic() {
  
  const start = createElement({
    className: "start",
    title: "Start Element",
    value: "Start",
    text: "start"
  });

  const end = createElement({
    className: "end",
    title: "End Element",
    value: "End",
    text: "end"
  });

  para?.remove();         // safe remove
  ourDiv.before(start);   // insert before
  ourDiv.after(end);      // insert after
}
