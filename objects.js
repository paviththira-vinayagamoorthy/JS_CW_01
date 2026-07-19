// Level 01

// 1. Create an empty object called dog
const dog = {};

// 2. Print the dog object to the console
console.log(dog);

// 3. Add name, legs, color, age and bark properties
dog.name = "Buddy";
dog.legs = 4;
dog.color = "Brown";
dog.age = "3 months";
dog.bark = function () {
  return "woof woof";
};

// 4. Get the values from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

// 5. Set new properties: breed and getDogInfo
dog.breed = "Golden Retriever";
dog.getDogInfo = function () {
  return `This is a ${this.breed} named ${this.name}, who is ${this.age}  old.`;
};


console.log(dog.breed);
console.log(dog.getDogInfo());

// Level 02
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {

    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}


// find the person who has many skills

let maxSkills = 0;
let personName = '';

let userNames = Object.keys(users);

for (let i = 0; i < userNames.length; i++) {
  let name = userNames[i];
  let count = users[name].skills.length;

  if (count > maxSkills) {
    maxSkills = count;
    personName = name;
  }
}

console.log(personName);

// Count logged-in users and count users having greater than or equal to 50 points from the following object.


let userList = Object.values(users);


let loggedInCount = userList.filter(user => user.isLoggedIn === true).length;


let pointsCount = userList.filter(user => user.points >= 50).length;

console.log(loggedInCount);
console.log(pointsCount);

// Find people who are MERN stack developer from the users object

let mernDevs = [];

for (let user in users) {
  let skills = users[user].skills;
  if (
    skills.includes('MongoDB') &&
    skills.includes('Express') &&
    skills.includes('React') &&
    skills.includes('Node')
  ) {
    mernDevs.push(user);
  }
}
console.log(mernDevs);

// set your name
let newUsers = { ...users, 'Pavi': {} };
console.log(newUsers);


// keys
const keys = Object.keys(users);
console.log(keys);

// values
const values = Object.values(users);
console.log(values);

// Use the countries object to print a country name , capital, populations and languages
const countries = [{ name: "Sri Lanka", capital: "Sri Jayawardenepura Kotte", population: 22000000, languages: ["Sinhala", "Tamil"] },
];

countries.forEach(country => {
  console.log("Country:", country.name); console.log("Capital:", country.capital); console.log("Population:", country.population); console.log("Languages:", country.languages.join(", "));
});

// Person Account Object

const personAccount = {

  firstName: "Pavi",
  lastName: "Vinayagamoorthy",

  incomes: [],
  expenses: [],

  totalIncome() {
    let total = 0;

    for (let income of this.incomes) {
      total += income.amount;
    }

    return total;
  },


  totalExpense() {
    let total = 0;

    for (let expense of this.expenses) {
      total += expense.amount;
    }

    return total;
  },


  accountInfo() {
    return this.firstName + " " + this.lastName;
  },


  addIncome(description, amount) {
    this.incomes.push({
      description: description,
      amount: amount
    });
  },


  addExpense(description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    });
  },


  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }

};


// Users Array

const userss = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020",
    isLoggedIn: false
  },

  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020",
    isLoggedIn: true
  }
];


// Sign Up

function signUp(user) {

  for (let u of userss) {

    if (u.email == user.email) {

      console.log("User already exists");
      return;

    }

  }

  userss.push(user);

  console.log("User added successfully");

}



// Sign In

function signIn(email, password) {

  for (let u of userss) {

    if (u.email == email && u.password == password) {

      u.isLoggedIn = true;

      console.log("Login successful");

      return;

    }

  }

  console.log("Invalid login");

}



// Products Array

const products = [

  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,

    ratings: [
      {
        userId: "fg12cy",
        rate: 5
      },
      {
        userId: "zwf8md",
        rate: 4.5
      }
    ],

    likes: []
  },


  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro System Darwin",
    price: 2500,

    ratings: [],

    likes: ["fg12cy"]
  }

];



// Rate Product

function rateProduct(productId, userId, rate) {

  for (let p of products) {

    if (p._id == productId) {

      p.ratings.push({
        userId: userId,
        rate: rate
      });

      console.log("Product rated");

    }

  }

}



// Average Rating

function averageRating(productId) {

  for (let p of products) {

    if (p._id == productId) {

      let total = 0;

      for (let r of p.ratings) {

        total += r.rate;

      }

      return total / p.ratings.length;

    }

  }

}



// Like Product

function likeProduct(productId, userId) {

  for (let p of products) {

    if (p._id == productId) {


      if (p.likes.includes(userId)) {

        p.likes.splice(p.likes.indexOf(userId), 1);

        console.log("Like removed");

      } 

      else {

        p.likes.push(userId);

        console.log("Product liked");

      }

    }

  }

}



// ---------------- OUTPUT ----------------



personAccount.addIncome("Salary", 5000);

personAccount.addIncome("Freelance", 2000);


personAccount.addExpense("Food", 1000);

personAccount.addExpense("Travel", 500);



console.log("Name:", personAccount.accountInfo());

console.log("Total Income:", personAccount.totalIncome());

console.log("Total Expense:", personAccount.totalExpense());

console.log("Balance:", personAccount.accountBalance());






signUp({

  _id: "xy12",
  username: "Pavi",
  email: "pavi@gmail.com",
  password: "111111",
  createdAt: "08/01/2020",
  isLoggedIn: false

});






signIn("pavi@gmail.com", "111111");






rateProduct("eedfcf", "ab12ex", 4);


console.log(products[0].ratings);



console.log("Average Rating:",
averageRating("eedfcf"));




likeProduct("eedfcf", "ab12ex");


console.log(products[0].likes);

