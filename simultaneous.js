let a = prompt("Enter the coefficient of x in the first equation");
let b = a+"x";
alert(b);
let c = prompt("Enter the coefficient of y in the first equation");
let d = c+"y";
alert(d)
let answer1= prompt("What is it equal to")
let eq = b+d + "=" + answer1
alert("So the first equation is " + eq);


let e = prompt("Enter the coefficient of x in the second equation");
let f = e+"x";
alert(f);
let g = prompt("Enter the coefficient of y in the second equation");
let h = g+"y";
alert(h)
let answer2= prompt("What is it equal to")
let equ = f+h + "=" + answer2
alert("So the second equation is " + equ);
let done = eq + "     " + "and  " +equ
alert ("The two equations are  " + done)
let  tri = a*g;
let tri2= c*e
let total = tri - tri2
let forX = answer1 *g
let secondX = answer2*c
let Xtotal = forX - secondX;
let Xnow = Xtotal / total
let forY = answer2 *a
let secondY = answer1*e
let Ytotal = forY - secondY;
let Ynow = Ytotal / total
alert("x = "+ Xnow + "  and  "+ "y =  " + Ynow)
