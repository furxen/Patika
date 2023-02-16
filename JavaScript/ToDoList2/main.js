var element, btnRemove, btnAdd,entered, chosen;

function listAdd() {
    entered = document.getElementById("entered").value;
    if (entered!="") {
        //li Add
        element = document.createElement("li");
        document.getElementById("toDoList").appendChild(element);
        element.innerHTML = entered;
        document.getElementById("entered").value = "";
        //btn Add
        btnAdd = document.createElement("img");
        element.appendChild(btnAdd);
        btnAdd.setAttribute("id","btnAdd");
        btnAdd.setAttribute("src","images/tamam.png");
        btnAdd.addEventListener("click",toComplete);
        //btn Remove
        btnRemove = document.createElement("img");
        element.appendChild(btnRemove);
        btnRemove.setAttribute("id","btnRemove");
        btnRemove.setAttribute("src","images/sil.png");
        btnRemove.addEventListener("click",toDelete);
        
    }
    else{
        alert("Do not leave the list blank!!")
    }
    
}

function toDelete() {
    chosen=event.currentTarget.parentNode;
    chosen.remove();
}

function toComplete() {
    element = document.createElement("li");
    document.getElementById("done").appendChild(element);
    chosen = event.currentTarget.parentNode;
    chosen.childNodes[1].style.display = "none";
    chosen.childNodes[2].setAttribute("onclick","toDelete();");
    element.innerHTML=chosen.innerHTML;
    toDelete();
}













