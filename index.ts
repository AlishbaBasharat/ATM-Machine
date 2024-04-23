#! /usr/bin/env node
import inquirer from "inquirer";

let mybalance = 10000;
let mypin = 12345;
let myaddress = "Main branch in Gulshan_iqbal";

let pinanswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter your pin",
  },
]);


if (pinanswer.pin === mypin) {

  console.log("you can do further process");

  let actionanswer = await inquirer.prompt([
    {
      name: "action",
      type: "list",
      message: "select any one of them",
      choices: ["withdraw", "check balance", "ordering checkbook"],
    },
  ]);


  if (actionanswer.action === "withdraw") {

    let operationanswer = await inquirer.prompt([
      {
        name: "operation",
        type: "number",
        message: "how much you want to withdraw",
      },
    ])
    if (operationanswer.operation >= mybalance){
      console.log("sorry! Insuficient amount");
    }

    if (operationanswer.operation <= mybalance) {
      mybalance = mybalance - operationanswer.operation;
      console.log("my balance:", mybalance);
    }



  } else if (actionanswer.action === "check balance") {
    console.log(`your balance is: ${mybalance}`);
  } else if (actionanswer.action === "ordering checkbook") {
    console.log(`please visit the bank ${myaddress}`);
  }
} else {
  console.log("Incorrect pin You can not do any further process");
}
