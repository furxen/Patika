const button = document.getElementById("liveToastBtn")
const task = document.getElementById("task")
const list = document.getElementById("list")
const liveToast = document.getElementById("liveToast")
const allRemove = document.getElementById("allRemove")
const allLi = document.querySelectorAll("li")

allLi.forEach(e => {
    e.addEventListener("click", selectItem)
   function selectItem(){
    e.classList.toggle("checked")
   }
   let removeBtn = document.createElement("span");
   removeBtn.classList.add("close");
   let txt = document.createTextNode("\u00D7");
   removeBtn.appendChild(txt)
   e.appendChild(removeBtn)
   removeBtn.addEventListener("click", removeItem);
        
        function removeItem() {
            let answer = window.confirm("kaldırmak istediğinizden emin misiniz?");
            if (answer) {
                e.remove();
            }
        }
})

function newElement() {
    if (task.value == "" || !task.value.trim() ) {
        $(`.error`).toast("show")
    }
    else {
        let newli = document.createElement("li")
        newli.innerHTML = task.value;
        $(`.success`).toast("show")
        list.appendChild(newli)
        let removeBtn = document.createElement("span");
        removeBtn.classList.add("close");
        let txt = document.createTextNode("\u00D7");
        removeBtn.appendChild(txt)

        newli.appendChild(removeBtn);
        removeBtn.addEventListener("click", removeItem);
        
        function removeItem() {
            let answer = window.confirm("kaldırmak istediğinizden emin misiniz?");
            if (answer) {
                newli.remove();
            }
        }
        
        newli.addEventListener("click", selectItem);
        function selectItem(){
            newli.classList.toggle("checked");
        }
    }
    task.value = ""

    allRemove.addEventListener("click", function allRemove() {
        const answerDel = window.confirm("Hepsini silelim mi ?");
        if (answerDel) {
            for (let i = 0; i < list.children.length; i++) {
                list.children[i].remove()
                return i;
            }
        }

        
    })
}


