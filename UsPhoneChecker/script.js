
let aux = false;
document.getElementById("check-btn").addEventListener("click",
function(){
    let txt = document.getElementById("user-input").value;
    if(txt ===''){
      document.getElementById("results-div").textContent= "Please provide a phone number";
      alert("Please provide a phone number");
    }else{
    validate(txt);
    }
}

)

document.getElementById("clear-btn").addEventListener("click",
    function(){
        document.getElementById("results-div").textContent = '';
    }  
    );
    
    

function validate(str){
    // lowercase our input 
    // look for alphanumeric characters
    
    const regex = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
    aux = regex.test(str);
   
    
    if(aux === true){
        document.getElementById("results-div").textContent = `Valid US number: ${str}`;

    }else{
        document.getElementById("results-div").textContent = `Invalid US number: ${str}`;
    }
    // returned string === reversedString
}
