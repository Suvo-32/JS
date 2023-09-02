const a=10;
const b=30;
const c=60;
 function say() {
    console.log("It's Awesome!");
 }
 
 //callback function call
 function calculate(num1,num2,num3,callback){
    console.log(num1*num2*num3);
    callback();
 }
//callback  Function  pass
 calculate(a,b,c,say);