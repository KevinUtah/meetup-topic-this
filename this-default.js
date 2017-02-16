// I always begin by ensuring my js links to the html
// console.log(document.title);

/* ------- First ------- */

/*
First Example
Default Binding
*/
var firstName = `Kevin`,
    lastName = `Black`;
// ​
    function showFullName () {
        // "this" inside showFullName function will have the value of the window object​
        // because the showFullName () function is defined in the global scope, just like the firstName and lastName​
    // console.clear();
    console.log ('My name is: ', firstName, lastName);
    // console.log('\n');
    console.log('`this` is my name: ', this.firstName, this.lastName);
    // console.log('\n');
    console.log('my `window` name is:',  window.firstName, window.lastName);
    // console.log('\n');
    // console.log("what comes after");
    }
// ​

/*
If `this` is inside an object
*/
    var comedian = {
    firstName   :"Rodney",
    lastName    :"DaingerField",
    showFullName:function () {
        // "this" on the line below refers to the person object, because the showFullName function will be invoked by person object.​
    console.log('Comedian');
    console.log ('this Comedian is:', this.firstName + " " + this.lastName);
    console.log('window Comedian is:',window.firstName, window.lastName);
    console.log('comedian Comedian is:',comedian.firstName, comedian.lastName);
    }
    }
// // ​
    showFullName (); // Kevin Black
// ​
    // window is the object that all global variables and functions are defined on, hence:​
    window.showFullName (); // Kevin Black
    this.showFullName (); //Kevin Black
// ​
        // "this" inside the showFullName () method that is defined inside the person object still refers to the person object, hence:​
    comedian.showFullName (); // Steven Wright




//console.log(this); // returns Window

// console.log("The first one is: ", this);

/* ------- Second ------- */

// console.log(window);

// console.log("The second one is: ", window);



// function func1() {
//   return this.word;
// }
// undefined

// let window.word = "hello";
