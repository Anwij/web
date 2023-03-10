let today = new Date();

function addUIItem(txt) {
    let li = document.createElement("li");
    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[0]);
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.width = "35px";
    delBtn.style.height = "35px";
    delBtn.style.borderRadius = "5px";
    delBtn.style.fontSize = "20px";
    delBtn.style.marginLeft = "10px";
    delBtn.style.backgroundColor = "#272b33";

    li.appendChild(delBtn);
    delBtn.addEventListener("click", (e) => {
        li.parentNode.removeChild(li);
        savedTasks = savedTasks.filter((e) => e !== txt);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
    });
}
let input = document.querySelector("#todo");
let btn = document.querySelector("#add-btn");
let list = document.querySelector("#list");
let delAll = document.querySelector("#del-btn");

let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

savedTasks.forEach(addUIItem);

btn.addEventListener("click", () => {
    let now = today.toLocaleString();

    let txt = input.value.trim();
    if (txt === "") {
        alert("Пожалуйста, напишите вашу задачу...");
    } else {
        txt = txt.bold();
        txt = '[ ' +  now + ' ] ' + txt;
        savedTasks.push(txt);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
        input.value = "";
        addUIItem(txt);
    }
});

delAll.addEventListener("click", () => {
    localStorage.clear();
    window.location.reload();
});

list.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
    }
});
