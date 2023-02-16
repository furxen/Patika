function dateYears() {
    var currentDate = new Date();
    var years = currentDate.getFullYear();
    for (let i = years; i >= 1940; i--) {
        var year = document.createElement("option");
        document.getElementById("vehicleModel").options.add(year);
        year.value = i;
        year.text = i;
    }
}
function calculateTax() {
    var vehicleType,vehiclePower, vehicleModel, conclusion,i;

    vehicleType = document.getElementById("vehicleType");
    vehiclePower = document.getElementsByName("vehiclePower");
    vehicleModel = document.getElementById("vehicleModel");
    conclusion = document.getElementById("conclusion");

    //Vehicle Type
    for (i = 0; i < vehicleType.length; i++) {
        if(vehicleType.options[i].selected){
            var vehicle = vehicleType.options[i].value;
        }
        console.log(vehicle);
    }
    //Vehicle Power
    for(i=0;i<vehiclePower.length;i++){
        if(vehiclePower[i].checked)
        {
            var power=vehiclePower[i].value;
        }
        console.log(power);
    }
    //Vehicle Model
    for (i = 0; i < vehicleModel.length; i++) {
        if(vehicleModel.options[i].selected){
            var model = vehicleModel.options[i].value;
        }
        console.log(model);
    }

    //CanculateTax
    //Vehicle
    if (vehicle=="Motorcycle") {
        conclusion = 200;
    }
    else if(vehicle=="Car"){
        conclusion = 400;
    }
    console.log(conclusion);
    //Power
    if(power=="999cc")
    {
        conclusion=conclusion;

    }
    else if(power=="1000cc-1600cc")
    {
        conclusion=conclusion+50;

    }
    else if(power=="1601cc-2000cc")
    {
        conclusion=conclusion+100;

    }
    else if(power=="2001cc")
    {
        conclusion=conclusion+150;

    }
    console.log(conclusion);
    //Model
    if (model<=2005) {
        conclusion -= 50;
    }
    console.log(conclusion);

    document.getElementById("conclusion").innerHTML = "Ödemeniz gereken vergi : " + conclusion;



}