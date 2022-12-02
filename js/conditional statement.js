/**
 Use if to specify a block of code to be executed, if a specified condition is true.
  Use else to specify a block of code to be executed, if the same condition is false. 
 Use else if to specify a new condition to test, if the first condition is false.
 */

 //check the mark of student 


 let mark=70;
 if(mark>70)
 {
    console.log('A');
 }
 else if(mark>60)
 {
    console.log('B');

 }
 else
 {
    console.log('F');
 }

 //ternary operator

 let a=90;
 let b=30;

 let result=a>b?true:false;
 //switch is also another conditional statment

