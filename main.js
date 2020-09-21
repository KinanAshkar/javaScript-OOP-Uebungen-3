// -11-
// Constructor Function Dealing With Properties:

/* function user(firstName,lastName,age,country){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.fullName = function(){
        return `Full Name Is: ${this.firstName} ${this.lastName}`
    }
    this.ageInDays = function(){
        return `Your Age In Days Is ${this.age*365}`
    };
}

let user1 = new user("kinan","ashkar",37,"jibuti");
let user2 = new user("ahmed","ali",44,"adis ababa");

console.log(user1);
console.log(user2);
console.log(user1.country);
console.log(user2.country);
console.log(user1.ageInDays());
console.log(`Your Full Name Is: ${user1.firstName} ${user1.lastName}`);
console.log(user1.fullName()); */

// -12-
// Constructor Function Training's:

/* function user(name,email,age,showEmail){
    this.name = name;
    this.email = email;
    this.age = age;
    this.updateName = function(newName){
        if(this.age >= 18){
            this.name = newName; 
        }else{
            console.log(`You Can't Update Your Name, Because Your Age Is Smaller Than 18`);
        }
    };
    this.showEmail = function(){
        if(showEmail === true){
            return `${this.email}`;
        }else{
            return `this is private`;
        }
    };
}
let user1 = new user("kinan","kinan@live.com", 27,true);
console.log(user1.name);
user1.updateName("Samir");
console.log(user1.name);
console.log(user1.showEmail()); */

// -13-
// Constructor Function Built In Constructors:

/* function user(name){
    this.name = name;
    this.welcome = function(){
        return `Welcome ${this.name}`;
    };
}
let user1 = new user("kinan");
let user2 = new user("ashkar");

console.log(user1.welcome());
console.log(user2.welcome());

let obj1 = new Object({a:1});
let obj2 = new Object({b:2});
let obj3 = {c:3};

console.log(obj1);
console.log(obj1.constructor);
console.log(obj2);
console.log(obj2.constructor);
console.log(obj3);
console.log(obj3.constructor);

let num1 = new Number(1);
let num2 = new Number(2);
let num3 = 3;

console.log(num1);
console.log(num1.constructor);
console.log(num2);
console.log(num2.constructor);
console.log(num3);
console.log(num3.constructor);

let str1 = new String("kinan");
let str2 = new String("ashkar");
let str3 = "kinan";

console.log(str1);
console.log(str1.constructor);
console.log(str2);
console.log(str2.constructor);
console.log(str3);
console.log(str3.constructor);

console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase()); */

// -14-
// Prototype Part 1 Intro:

/* function user(name){ // user Is A Value, And The Constructor Function Is A Property. 
    this.name = name;
    this.welcome = function(){
        return ` Welcome ${this.name}`;
    };
}
let user1 = new user("majed");
let user2 = new user("ahmed");

console.log(user.prototype);

function sayHello(){ // sayHello Is A Value, And The Constructor Function Is A Property.
    return 1;
}
console.log(sayHello());
console.log(sayHello.prototype);

const arr = [1,2,3,4,5];
console.log(arr.constructor);
console.log(Array.prototype);
console.log(arr.reverse()); */

// -15-
// Prototype Part 2 Add To Prototype Chain:

/* function user (name) {
    this.name = name;
    this.welcome = () => {
        return `welcome ${this.name}`;
    }
}
let user1 = new user ("massoud");
let user2 = new user ("naser");
console.log(user.prototype);
console.log(user1);
user.prototype.addTilte = function(){
    return `hallo ${this.name}`
};
console.log(Object.prototype);
Object.prototype.name = "akakakakak";
const myObject = {a:1, b:2}; */