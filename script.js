let input = document.getElementById("inp");
let add = document.getElementById("gee");
let delet = document.getElementById("fee");

function go(){location.href="https://pixabay.com/images/search/to-do-list%20i/"}
function hello() {
    if (input.value.trim() === '') {
        alert("Can't add an empty task in the schedule.");
        return;
    }

    let li = document.createElement("li");
    li.className = "task-item";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-check";

    let span = document.createElement("span");
    span.textContent = input.value;

    let btn = document.createElement("button");
    btn.innerHTML = "×";
    btn.className = "delete-btn";
    btn.onclick = () => li.remove();

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btn);
    add.appendChild(li);

    input.value = '';

    checkbox.onchange = () => {
        if (checkbox.checked) {
            li.remove();
            addToCompleted(span.textContent);
        }
    };
}

function addToCompleted(taskText) {
    let li = document.createElement("li");
    li.className = "task-item Completed-index";

    let delBtn = document.createElement("button");
    delBtn.className = "delete-btn r";
    delBtn.textContent = "×";
    delBtn.onclick = () => li.remove();

    let span = document.createElement("span");
    span.textContent = taskText;

    let reloadBtn = document.createElement("button");
    reloadBtn.className = "btnrel";
    reloadBtn.textContent = "Reload";
    reloadBtn.onclick = () => {
        li.remove();
        input.value = taskText;
        hello();
    };

    li.appendChild(delBtn);
    li.appendChild(reloadBtn);
    li.appendChild(span);
    delet.appendChild(li);
}