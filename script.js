let text = document.getElementById("text");
let add = document.getElementsByClassName("add")[0];
let redLine = document.querySelector(".red-line");

window.onload = () => {
  redLine.innerHTML = localStorage.getItem("tasks");
};

add.addEventListener("click", () => {
  if (text.value == "") {
    alert("Enter the value in the text box");
  } else {
    addListValue();
  }
});

// Adding list value in the ul of hidden that is functionality of javaScript
function addListValue() {
  let list = document.createElement("li");
  list.innerHTML = `
    <span id="tick" >&#10003;</span>
    <p>${text.value}</p>
    <span id="del" ><i class="fa fa-trash"></i></span>
  `;
  redLine.appendChild(list);
  
  store();
  
  text.value = "";

}


function store() {
  localStorage.setItem("tasks", redLine.innerHTML);
}

redLine.addEventListener("click",(e)=>{

    if(e.target.hasAttribute("id","tick")){
      e.target.parentElement.classList.toggle("p-color");
      e.target.classList.toggle("tick-color");
      store();

    }  else if (e.target.tagName == "I") {
      e.target.parentElement.parentElement.remove();
      store();
    }

    
})