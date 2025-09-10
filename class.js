console.log("welcome to LoopLadies Bank")

const Eni = {
    name: "Eni",
    Balance: 500000,
    curency: "USD",
};

const Ayo = {
    name: "Ayo",
    Balance: 40000,
    curency: "USD",
};

const Timi = {
    name: "Timi",
    Balance: 9000,
    curency: "USD",
};

// console.log(Eni, Ayo, Timi)

// To Add money to first account

Eni.Balance += 7000;
console.log(Eni.Balance)

// withraw money from second account

const withraw = 100000;
const newBalance = Ayo.Balance - withraw;
const isBalanceEnouch = Ayo.Balance < withraw;
if (isBalanceEnouch) {
    console.log("Insulficient funds")
}else{ 
    console.log("Withdrawal succesful")
};

const Transfer = Timi.Balance - 8000;
Eni.Balance += Transfer
Timi.Balance = 8000;
console.log(Eni.Balance, Timi.Balance, Transfer)



