var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var list = document.getElementById("TODO");

button.addEventListener("click", EnterTask);
input.addEventListener("keypress", EnterTaskKeyPress);
list.addEventListener("click", DoTask);


function EnterTask() {
    if(input.value.length) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        list.appendChild(li);
        input.value = "";
    }
}

function EnterTaskKeyPress(event) {
    if(event.which === 13) {
        EnterTask();
    }
}

function DoTask(pressed) {
    if(pressed.target.parentNode.localName === "ul") {
        pressed.target.classList.toggle("done");
        if(pressed.target.className === "done")
            AddDeleteButton(pressed.target);
        else
            RemoveDeleteButton(pressed.target);
    }
    if(pressed.target.localName === "button")
    {
        list.removeChild(pressed.target.parentNode);
    }
}

function AddDeleteButton(li) {
    var b = document.createElement("button");
    b.appendChild(document.createTextNode("delete"));
    li.appendChild(b);
}

function RemoveDeleteButton(li) {
    li.removeChild(li.childNodes[1]);
}
