let postTodo = document.getElementsByClassName("submitButton"); 
let clearTodo = document.getElementsByClassName("clearButton");
let markTodo = document.getElementsByClassName("markAllButton");
let listOfTodo = document.getElementsByClassName("panel-body");
let textArea = document.getElementsByTagName("textArea");

postTodo[0].addEventListener('click', function(event) {
    event.preventDefault();

    if (textArea[0].value != "") {
        let divNode = document.createElement("div");
        let spanElement = document.createElement("span");
        let checkBoxElement = document.createElement("input");
        let textNode = document.createTextNode(textArea[0].value);

        checkBoxElement.type = "checkbox";
        checkBoxElement.className="checkboxElement"

        spanElement.appendChild(textNode);
        divNode.appendChild(checkBoxElement);
        divNode.appendChild(spanElement);
        listOfTodo[1].appendChild(divNode);

        textArea[0].value = "";
    }

});

clearTodo[0].addEventListener('click', function(event) {
    event.preventDefault();

    let checkList = document.getElementsByClassName("checkboxElement");

    for (let i = 0; i < checkList.length; i++) {
        checkList[i].checked = false;
    }

});

markTodo[0].addEventListener('click', function (event) {
    event.preventDefault();

    let checkList = document.getElementsByClassName("checkboxElement");

    for (let i = 0; i < checkList.length; i++) {
        checkList[i].checked = false;
    }

});