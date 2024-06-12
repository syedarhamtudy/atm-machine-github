#! /usr/bin/env node 

import inquirer from "inquirer";

let orignalpincode = 9397;
let currency = "PKR";
let AccountBalance = 5000;

let message = await inquirer.prompt([
  { message: "Enter Your Four Digit Pin", type: "number", name: "pincode" },
]);

if (orignalpincode === message.pincode) {
  console.log("Your Pin is Correct");
  let message1 = await inquirer.prompt([
    {
      message: "Select Operation",
      type: "list",
      name: "operator",
      choices: [
        "Cash Withdrawl",
        "Account Balance",
        "Account Information",
        "Fast Cash",
      ],
    },
  ]);
  if (message1.operator === "Cash Withdrawl") {
    let message2 = await inquirer.prompt([
      {
        message: "Enter The Amount to Withdraw",
        type: "number",
        name: "withdrwal_amount",
      },
    ]);
    if (message2.withdrwal_amount <= AccountBalance) {
      console.log(
        `Withdrawl Successfull \n Your New Balance is ${
          AccountBalance - message2.withdrwal_amount
        } ${currency}`
      );
    } else {
      console.log("Insufficient Funds");
    }
  } else if (message1.operator === "Account Balance") {
    console.log(`Your Current Balance is ${AccountBalance} ${currency}`);
  } else if (message1.operator === "Account Information") {
    console.log(
      " Name         : Syed Arham \n Father Name  : Syed Amir \n Phone Number : 03002806830"
    );
  } else if (message1.operator === "Fast Cash") {
    let message3 = await inquirer.prompt([
      { message: "Select The Option", 
        type: "list", 
        name: "FastCash",
        choices: ["1000","5000","10000","20000"] },
    ]);
    if(message3.FastCash === "1000"){
      console.log(
        `Transaction Successfull \n Your New Balance is ${
          AccountBalance - 1000
        } ${currency}`);
    }
    if(message3.FastCash === "5000"){
      console.log(
        `Transaction Successfull \n Your New Balance is ${
          AccountBalance - 5000
        } ${currency}`);
    }
    if(message3.FastCash === "10000"){
      console.log(
        `Transaction Successfull \n Your New Balance is ${
          AccountBalance - 10000
        } ${currency}`);
    }
    if(message3.FastCash === "20000"){
      console.log(
        `Transaction Successfull \n Your New Balance is ${
          AccountBalance - 20000
        } ${currency}`);
    }
  }
} 
  else{
  console.log("Please Enter Correct Pin");
}
