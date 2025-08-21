const addInput = document.querySelector(".classes-to-add");
const removeInput = document.querySelector(".classes-to-remove");
const element = document.querySelector(".assign [title='Current']");
const result = document.querySelector(".classes-list div");

updateContent()

addInput.addEventListener("blur", () => {
  let addInputValue = addInput.value.toLowerCase().split(" ").filter(v => v.trim() !== "").sort();
  element.classList.add(...addInputValue);
  updateContent();
  addInput.value = "";
});

removeInput.addEventListener("blur", () => {
  if (element.classList.length > 0) {
    let removeInputValue = removeInput.value.toLowerCase().split(" ").sort();
    element.classList.remove(...removeInputValue);
    updateContent();
    removeInput.value = "";
  }else{
    alert("please add some classes first")
    removeInput.value = ""
  }
});

function updateContent() {
    result.textContent = ""

  if (element.classList.length === 0){
    result.textContent = "No Classes To Show"
  }else{
    element.classList.forEach((ele)=>{
      let span = document.createElement("span")
      span.textContent = ele
      result.append(span)
    })
  }
}
