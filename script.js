function compute()
{
    var principal = document.getElementById("principal");
    var amount = principal.value;
    if(amount <= 0){
            alert("Enter a positive number");
            principal.focus();
            return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = (amount * years * rate) /100;
    
    var year = new Date().getFullYear() + parseInt(years);
    var result = document.getElementById("result");
    result.innerHTML = "If you deposit " + amount + "\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year " + year;
}
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}