let input = document.getElementById("inp");
let add = document.getElementById("gee");
let delet = document.getElementById("fee");

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      document.getElementById("btn").click();
    }
  });

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

    let editBtn = document.createElement("button");
    editBtn.textContent = "✂️";
    editBtn.className = "edit-btn";

    editBtn.onclick = () => {
        const oldText = span.textContent;
        const inputEdit = document.createElement("input");
        inputEdit.type = "text";
        inputEdit.value = oldText;
        inputEdit.className = "edit-input";
    
        li.replaceChild(inputEdit, span);
        editBtn.textContent = "➤";
        editBtn.style.backgroundColor="lime";
    
        editBtn.onclick = () => {
            const newText = inputEdit.value.trim();
    
           
            if (newText.length > 20) {
                alert("Please enter less than 20 characters.");
                return; 
            }
    
            span.textContent = newText === "" ? oldText : newText;
            li.replaceChild(span, inputEdit);
            editBtn.textContent = "✂️";
            editBtn.style.backgroundColor="#00c2ff";
            editBtn.onclick = originalEditHandler;
        };
    };
    
    const originalEditHandler = editBtn.onclick;


    let btn = document.createElement("button");
    btn.innerHTML = "×";
    btn.className = "delete-btn";
    btn.onclick = () => li.remove();

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn); 
    li.appendChild(btn);
    add.appendChild(li);

    input.value = '';

    checkbox.onchange = () => {
        if (checkbox.checked) {
            confetti({
                particleCount: 150,
                angle: 60,
                spread: 100,
                startVelocity: 60,
                ticks: 150,
                origin: { x: 0, y: 1 }
            });
            confetti({
                particleCount: 150,
                angle: 120,
                spread: 100,
                startVelocity: 60,
                ticks: 150,
                origin: { x: 1, y: 1 }
            });    
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