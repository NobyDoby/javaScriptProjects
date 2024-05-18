document
  .getElementById("convert-btn").addEventListener("click", 
  function () {
  const  getText = document.getElementById("number").value; 
  const output = document.getElementById("output"); 
  const num = parseInt(getText);
  if(isNaN(num)){
    output.style.backgroundColor ='#9b1717';
    output.textContent = "Please enter a valid number";

   } else if(num <1){
    output.style.backgroundColor ='#9b1717';
      output.textContent = "Please enter a number greater than or equal to 1";
  }
  else if(num > 3999){
    output.style.backgroundColor ='#9b1717';
    output.textContent = "Please enter a number less than or equal to 3999";
  }else{
    let romanOutput= convertToRoman(num);
    output.style.backgroundColor ='transparent';
    output.textContent = romanOutput;
  }
   
   
  });

 
function convertToRoman(num) {
  // Create roman numeral to numer lookup table

  const lookupTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  // Create roman numeral accumulator
  let accumulator = '';


  // Loop through lookup table
  for(const i in lookupTable){
    const numberValue = lookupTable[i];
    // while currentNum <= num then subtract currentNum and add symbol to accumulator
    
    while(numberValue <= num){
        num-= numberValue;
        accumulator += i;

    }
    

}



 
   return accumulator
}
