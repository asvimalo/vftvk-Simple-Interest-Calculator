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
    result.innerHTML = "If you deposit \<span class=\"values\">" + amount+ "\</span\>\<br\>at an interest rate of \<span class=\"values\">"+rate+"\</span\>%\<br\>You will receive an amount of \<span class=\"values\">"+interest+"\</span\>,\<br\>in the year \<span class=\"values\"" + year+ "\</span\>";
}
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+"%";
}