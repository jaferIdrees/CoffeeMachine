// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');
//let coffeType = input("Choose your prefered cofee type: ");
/*let output = "Starting to make a coffee\n"+
"Grinding coffee beans\n"+
"Boiling water\n"+
"Mixing boiled water with crushed coffee beans\n"+
"Pouring coffee into the cup\n"+
"Pouring some milk into the cup\n"+
"Coffee is ready!\n";

console.log(output);*/
/*console.log("Write how many cups of coffee you will need:")
let noOfCups = input();
console.log(`For ${noOfCups} cups of coffee you will need:\n`+
    `${noOfCups * 200} ml of water\n` +
    `${noOfCups * 50} ml of milk\n`+
    `${noOfCups * 15} g of coffee beans`);*/
// Stage 3/6
/*let waterQty = input("Write how many ml of water the coffee machine has:\n");
let milkQty = input("Write how many ml of milk the coffee machine has:\n");
let beansQty = input("Write how many grams of coffee beans the coffee machine has:\n");
let reqCups = input("Write how many cups of coffee you will need:\n");
let availableCups = Math.min(waterQty/200, milkQty/50, beansQty/15);
availableCups = Math.floor(availableCups);
if (availableCups == reqCups) {
    console.log("Yes, I can make that amount of coffee");
} else if (availableCups > reqCups)
{
    console.log(`Yes, I can make that amount of coffee (and even ${availableCups - reqCups} more than that)`);
} else {
    console.log(`No, I can make only ${availableCups} cups of coffee`)
}*/

//Stage 4/6
let waterQty = 400;
let milkQty = 540;
let beansQty = 120;
let dispCups = 9;
let sugarQty = 1000;
let moneyAvailable = 550;
do {
    function printStatus() {
        console.log(`The coffee machine has:\n` +
            `${waterQty} of water\n` +
            `${milkQty} of milk\n` +
            `${beansQty} of coffee beans\n` +
            `${dispCups} of disposable cups\n` +
            `${sugarQty} of Sugar\n`
            `${moneyAvailable} of money`);
    }

    //printStatus();
    var action = input("Write action (buy, fill, take, remaining, exit):\n")
    makeAction(action);

    function makeAction(action) {
        switch (action) {
            case "buy": {
                buy();
                break;
            }
            case "fill": {
                fill();
                break;
            }
            case "take": {
                console.log(`I gave you \$ ${moneyAvailable}\n`)
                moneyAvailable = 0;
                // printStatus();
                break;
            }
            case "remaining": {
                printStatus();
                break;
            }
        }
    }

    function buy() {
        let type = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n");
        switch (type) {
            case ("1"): {
                if (waterQty >= 250 && beansQty >= 16 && dispCups >= 1) {
                    let sugarSpones = input("Do you want to add Sugar (y or n):\n") == "y" ? input("How many spones: ") : 0;
                    if (addSugar(sugarSpones)) break;
                    waterQty -= 250;
                    beansQty -= 16;
                    dispCups -= 1;
                    moneyAvailable += 4;
                    console.log(("I have enough resources, making you a coffee!"));
                    break;
                } else {
                    if (waterQty >= 250) console.log(`Sorry, not enough water!}`);
                    if (beansQty >= 16) console.log(`Sorry, not enough coffee beans!}`);
                    if (dispCups >= 1) console.log(`Sorry, not enough disposable cups!}`);
                    break;
                }

            }
            case ("2"): {
                if (waterQty >= 350 && milkQty >= 75 && beansQty >= 16 && dispCups >= 1) {
                    let sugarSpones = input("Do you want to add Sugar (y or n):\n") == "y" ? input("How many spones: ") : 0;
                    if (addSugar(sugarSpones)) break;
                    waterQty -= 350;
                    milkQty -= 75;
                    beansQty -= 20;
                    dispCups -= 1;
                    moneyAvailable += 7;
                    console.log(("I have enough resources, making you a coffee!"));
                    break;
                } else {
                    if (waterQty >= 350) console.log(`Sorry, not enough water!}`);
                    if (milkQty >= 75) console.log(`Sorry, not enough milk!}`);
                    if (beansQty >= 20) console.log(`Sorry, not enough coffee beans!}`);
                    if (dispCups >= 1) console.log(`Sorry, not enough disposable cups!}`);
                    break;
                }

            }
            case ("3"): {
                if (waterQty >= 200 && milkQty >= 100 && beansQty >= 12 && dispCups >= 1) {
                    let sugarSpones = input("Do you want to add Sugar (y or n):\n") == "y" ? input("How many spones: ") : 0;
                    if (addSugar(sugarSpones)) break;
                    waterQty -= 200;
                    milkQty -= 100;
                    beansQty -= 12;
                    dispCups -= 1;
                    moneyAvailable += 6;
                    console.log(("I have enough resources, making you a coffee!"));
                    break;
                } else {
                    if (waterQty >= 200) console.log(`Sorry, not enough water!}`);
                    if (milkQty >= 100) console.log(`Sorry, not enough milk!}`);
                    if (beansQty >= 12) console.log(`Sorry, not enough coffee beans!}`);
                    if (dispCups >= 1) console.log(`Sorry, not enough disposable cups!}`);
                    break;
                }
            }
        }
        // printStatus();
    }

    function fill() {
        waterQty += (input("Write how many ml of water you want to add:\n") - 0);
        milkQty += (input("Write how many ml of milk you want to add:\n") - 0);
        beansQty += (input("Write how many grams of coffee beans you want to add:\n") - 0);
        sugarQty += (input("Write how many grams of Sugar you want to add:\n") - 0);
        dispCups += (input("Write how many disposable coffee cups you want to add:\n") - 0);
        //printStatus();
    }
    function addSugar(numOfSpones){
        if (sugarQty >= numOfSpones*10){
           sugarQty -= numOfSpones*10;
        } else {
            console.log("sorry not enough Sugar!");
            return false;
        }
    }
} while (action != "exit");

let regex = new /20\d/;
let regex = new RegExp('202\\d');
let regex = new RegExp(/\w+/, 'g');
let regex = /abc+/;