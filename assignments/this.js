/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global binding: This refers to the windows object when used in the context of a browser
* 2. implicid binding: refers the object mentioned to the left of the dot.
* 3. new bidning:  when an object is created with the new keyboard. this refers to the specific newly created object
* 4. explicit binding: this will refer to whatever is explicity defined by using the call or apply methods
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
const testObj = {
    name: 'Testing',
    test: function () {
        console.log(this)
    }
}

testObj.test();


// Principle 3
// code example for New Binding
function Car(make, brand) {
    this.make = make
    this.brand = brand
    this.printInfo = function() {
      console.log(`make: ${this.make}\nBrand: ${this.brand}`)
      console.log(this)
    }
  }

  const whiteCar = new Car('Ford', 'Escape')
  const greyCar = new Car('Nissan', 'Altima')

  whiteCar.printInfo();
  greyCar.printInfo();


// Principle 4
// code example for Explicit Binding
function Person() {
    console.log(this.name);
}

let firstName = {
    name: 'Eric'
}

Person.call(firstName);