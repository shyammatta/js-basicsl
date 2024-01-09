let a=10;
        let b="shyam";
        let c= true;
        let d=12.5;
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
    const s=90; // if we use const keyword the value unchangable.
    console.log(s);
    let name="ram";
    console.log(name);
    //var const=09;  variable names cannot be reserved words.
name=3;
console.log(name);

//dynamic typing in javascript

let ss=10;
console.log(ss);
ss="ssss";
console.log(ss);
let x=10;
let y=20;
x=y;
console.log(x);
console.log(y);
 //ternary operator
let age=20;
 let status= (age>=18)? "i can vote" :"i cannot vote";
 console.log(status);

//conditions

let marks=35;
if(marks>=90){
    console.log("grade A")
}
else if(marks>=80){
    console.log("grade b");
}
else if(marks>=70){
    console.log("grade c");
}
else {
    console.log("fail");
}

//switch case

let num=0;
switch(num){
    case 1:console.log("a");
    break;                       // in this break is important if break is not thier next case will print. 
    case 2:console.log("b");
    break;
    case 3:console.log("c");
    break;
    default:console.log("chaduvuko ra")
}

//for loop
let i,n=5;
for( i=0;i<n;i++){
    console.log(i);
    }

    //while loop

    let z=1;
    while(z<=10){
        console.log(z)
        z++;
    }
    let ab=1;
    do{
        console.log(ab);
        ab++;
    }while(ab<=10)



 


