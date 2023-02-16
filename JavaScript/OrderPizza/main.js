var list,choice,i;

document.addEventListener("change",calculation);

function toogle() {
    list = document.getElementsByName("grupDiscount");
    for (i = 0; i < list.length; i++) {
        if (list[i].checked) {
            if (list[i].value=="true") {
                document.getElementById("discountCode").disabled = false;
            }
            else if (list[i].value=="false") {
                document.getElementById("discountCode").disabled = true;
                document.getElementById("discountCode").value = "";

            }
        }
    }
}

function calculation() {
    var pizzaPrice,enteredCode,selectedMaterial;
    var discountCode = "PROMO";

    list = document.getElementById("pizzaName");
    choice = list[list.selectedIndex].value;
    pizzaPrice = Number(choice); 
    console.log(pizzaPrice);
    
    list = document.getElementsByName("material");
    document.querySelectorAll('#selectedMaterial option').forEach(option => option.remove());
    for (i = 0; i < list.length; i++) {
        if (list[i].checked) {
            pizzaPrice = pizzaPrice + 2;
            selectedMaterial = list[i].value;

            choice = document.createElement("option");
            document.getElementById("selectedMaterial").options.add(choice);
            choice.text=selectedMaterial;
        }   
    }
    console.log(pizzaPrice);

    if (document.getElementById("kodTrue").checked) {
        enteredCode = document.getElementById("discountCode").value;
        if (discountCode == enteredCode) {
            pizzaPrice = pizzaPrice - 5;
        }
        else{
           document.getElementById("resault").innerHTML="your discount code is wrong";
        }
    }

    
    document.getElementById("conclusion").innerHTML = "Ödenecek Tutar: " + pizzaPrice;
}