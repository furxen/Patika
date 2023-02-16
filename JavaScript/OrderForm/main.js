//input variable
var productType,productList,productNumber,productInstallment;
//output variable
var productShipping,subTotal,conclusion,cargo=15;
//global veriable
var i;
//global object
var list,choice;
//array type variable
var menParfume = ["Celvin Clein",100,"Lacoste",120,"Axe",30,"First Class",50];
var womenParfume = ["Burbery",150,"Avon",80,"She",60,"Nina Ricci",130];


//bring the products
function bringProduct() {
    document.querySelectorAll('#productList option').forEach(option => option.remove()) 
    list = document.getElementsByName("productType");
    for(i=0; i<list.length; i++){
        if (list[i].checked) {
            productType = list[i].value;
        }
    }
    console.log(productType);
    if(productType=="M")
    {
        for(i=0;i<menParfume.length;i=i+2)
        {
            choice=document.createElement("option");
            list=document.getElementById("productList");
            list.options.add(choice);
            choice.text=menParfume[i];
            choice.value=menParfume[i+1];
        }
    }
    else if(productType=="W")
    {
        for(i=0;i<womenParfume.length;i=i+2)
        {
            choice=document.createElement("option");
            list=document.getElementById("productList");
            list.options.add(choice);
            choice.text=womenParfume[i];
            choice.value=womenParfume[i+1];
        }
    }
}
//bring in items
function fillInPieces() {
    for (i = 1; i<=10; i++) {
        choice = document.createElement("option");
        list = document.getElementById("productNumber");
        list.options.add(choice);
        choice.text = i;
        choice.value = i; 
    }
}
//bring in installments
function fillInInstallments() {
    for (i = 0; i<=12; i = i+3) {
        choice = document.createElement("option");
        list = document.getElementById("productInstallment");
        list.options.add(choice);
        choice.text = i;
        choice.value = i; 
    }
}
//calculate price

function calculatePrice() {
    list = document.getElementById("productList");
    productType = list[list.selectedIndex].value;
    console.log(productType);

    list = document.getElementById("productNumber");
    productNumber = list[list.selectedIndex].value;
    console.log(productNumber);

    list = document.getElementById("productInstallment");
    productInstallment = list[list.selectedIndex].value;
    console.log(productInstallment);

    productShipping = productType*productNumber;
    
    if (productInstallment==3) {
        productShipping = productShipping*1.1;
    }
    else if (productInstallment==6) {
        productShipping = productShipping*1.15;
    }
    else if (productInstallment==9) {
        productShipping = productShipping*1.2;
    }
    else if (productInstallment==12) {
        productShipping = productShipping*1.25;
    }
    console.log(productShipping)
    document.getElementById("productShipping").value=productShipping.toFixed(2);
    if (productShipping>=100) {
       subTotal = productShipping; 
    }
    else if (productShipping<100) {
        subTotal = productShipping+cargo;
        var complete = 115-subTotal;
        alert("Add $" +complete+  "of product for free shipping")
    }
    document.getElementById("subTotal").value=subTotal;
}
