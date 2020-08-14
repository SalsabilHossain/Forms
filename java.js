//check if box is blank
function checkfield(){
var input=document.getElementById("fname").value;
if(input.length == 0){
    document.getElementById("p1").innerHTML="Blank, please fill in with first name.";


}
else{
    document.getElementById("p1").innerHTML="Correct";


    
}
}
//check if last name is blank
function checkfield2(){
    var input=document.getElementById("lname").value;
    if(input.length == 0){
        document.getElementById("p2").innerHTML="Blank, please fill in with last name.";
    
    
    }
    else{
        document.getElementById("p2").innerHTML="Correct";
    
    
        
    }
    }
//message on click
    function order(){
        var name=document.getElementById("fname").value;
        document.getElementById("para").innerHTML=name+ " your order has been confirmed";
    }