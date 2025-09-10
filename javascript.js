// const name = confirm("What is your name?")
// console.log(name)

// let jobTitle = prompt("What is your job role?")

// console.log(jobTitle)


console.log("Welcome to your monthly expense calculator");

let monthlyIncome = 200000;
let DailyExpense = 30 * 30;
let monthlyExpenditure = 500;
let Savings = 10000;
let spending = monthlyIncome - DailyExpense - Savings - monthlyExpenditure;
let result = monthlyIncome - spending;

console.log("your balance from your monthly income will be: " + result);



// let Name = prompt("enter your name: ");
// console.log(`Welcome to your monthly expence calculator ${Name}!`);
// let MonthlyIncome = prompt("How much do you earn montly:  ");
// let DailyExpense = prompt("How much do you send daily:  " * 30);
// let Savings = prompt("How much is your target monthly savings:  ");
// let monthlyMaintaince = prompt("How much is your monthly expenditures:  ");
// expenditure = MonthlyIncome - DailyExpense - Savings - monthlyMaintaince;
// result = MonthlyIncome - expenditure;

// console.log(`your total balance will be: ${result}`);
// console.log(`Thank you ${Name} and see you again`)

 const seller = {
    accountNumber: 13456,
    fullName: "Mike Hanks",
    balance: 200000,
    isAccountBlocked: true,
};

const buyer = {
    name: "Mki Hanks",
    balance: 200000,
    balanceCurrency: "USD",
    isAccountBlocked: false,

};

console.log(user2.accountNumber)

let item = {
    name: "Apple", 
    quantity: 50,
     pricePerItem: 20,
    Currency: "USD",
};

const cart = {
    price:  0,
}

const numberOfitems = 400;
const isEnoughItems = item.quantity < numberOfitems;
if (isEnoughItems)
{
    console.log("I have enough item to sell")
}

cart.price = item.pricePerItem * 4
item.quantity = item.quantity - 4

console.log(cart, item);
buyer.balance = buyer.balance - cart.price;
seller.balance += cart.price
console.log(buyer, 'buyer');
console.log(seller, 'seller');
