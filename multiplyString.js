//given two non-negative integers num1 and num2 represented as strings,return the porduct of num1 and num2, also represented as a tring.
//must not use any built in biginteger library or convert the inputs to integer directly.
/*inpout num1 = "2", num2 = "3"
  output "6"
  input num1 = "123", num2 = "456"
  output "56088"
  */
 var multiply = function(num1, num2){
   /*
   const a = parseInt(num1);
   const b = parseInt(num2);
   let result = a * b;
   return `${result}`;
   */
  if ( num1 === "0"|| num2 === "0"){
    return "0";
  }
  //get the longest length
  let result = new Array(num1.length + num2.length);
  result.fill(0);
  let position = result.length - 1;
  //iterate over
  for ( let i = num1.length - 1; i >= 0; i--){
    let tempPosition = position;
    for ( let j = num2.length - 1; j >= 0; j--)[
      //KEY POINT
      result[tempPosition] += parseInt(num1.charAt(i))*parseInt(num2.charAt(j))

    ]
  }

 }
