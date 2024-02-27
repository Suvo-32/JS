const num1=30;
const num2=60;
const num3=90;

const add=(n1,n2,n3) =>{
    return (n1+n2+n3);
};
const sub=(n1,n2,n3)=>{
    return n3-(n-n1);
};
const mul=(n1,n2,n3)=>{
    return (n1*n2*n3);
};
// Here calculator is a higher order function 
const calculator=(n,nu,num,operation)=> {
    return operation(num1,num2,num3);//And Operation is callback Function
};
const  pi=3.14;
const pow = (h1,h2)=>{
     return h1*h2 ;
}
 //Here Function call
const ans=calculator(num1,num2,num3,add);
console.log(`Final answer is : ${ans}`);