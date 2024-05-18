

document.getElementById("check-btn").addEventListener("click",
function(){
    let txt = document.getElementById("text-input").value;
    if(txt ===''){
        result.textContent= "Please input a value";
    }else{
    palindrome(txt);
    }
}

)



function palindrome(str){
    // lowercase our input 
    // look for alphanumeric characters
    const alphanumeric0nly = str.toLowerCase().match(/[a-z0-9]/g).join('');
    // console.log(alphanumeric0nly);
    const reversedString = str.toLowerCase().match(/[a-z0-9]/g).reverse().join('');
    console.log(reversedString);
    if(alphanumeric0nly === reversedString){
        result.textContent = `${str} is a palindrome`;

    }else{
        result.textContent = `${str} is not a palindrome`;
    }
    // returned string === reversedString
}

