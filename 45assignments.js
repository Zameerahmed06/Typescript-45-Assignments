"use strict";
//Question No.2 Personal Message: Store a person’s name in a variable, and print a message to that person. 
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName = "Eric";
console.log(`"Hello ${personName}, would you like to learn some Python today?"`);
//Question No.3 Name Cases: Store a person’s name in a variable, and then print that person’s name in 
//lowercase, uppercase, and titlecase.
// let personName:string = "erIc jAson"
// console.log("LowerCase:",personName.toLowerCase());
// console.log("UpperCase:",personName.toUpperCase());
// //step 01 0f titlecase
// let words:string[] = personName.split(" ")
// //step 2
// let titlecaseName:string = ""
// //step 3
// //for loop 
// for (let i = 0; i < words.length; i++) {
//     titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " "
// }
// console.log("TitleCase:",titlecaseName);
//Question No.4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of 
//its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// let Author:string = "Albert Einstein"
// let Quote :string ="A person who never made a mistake never tried anything new."
// console.log(`${Author} once said, "${Quote}"`);
//Question No.5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable
// called famous_person. Then compose your message and store it in a new variable called message. Print your 
//message.
// let famous_person = "Albert Einstein"
// let message = `${famous_person} once said, "A person who never made a mistake never tried anything new."`
// console.log(message);
//Question No.6 Stripping Names: Store a person’s name, and include some whitespace characters at the 
//beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping 
//the white spaces.
// let myName:string = "\n\t Zameer Ahmed \t\n"
// console.log(myName);
// let striping = myName.trim();
// console.log(striping);
//Question No.7 Number Eight: Write addition, subtraction, multiplication, and division operations that each 
//result in the number 8. Be sure to enclose your operations in print statements to see the results.
//Addition
//let addition = `Addition: 6+2 =`
//console.log(`${addition}` ,6+2);
//Subtraction 
// let subtraction = `Subtraction: 11-3 =`
// console.log(`${subtraction}` ,11-3);
//Multiplication 
// let multiplication = `Multiplication: 4*2 =`
// console.log(`${multiplication}` ,4*2);
//Division
// let division = `Division: 64/8 =`
// console.log(`${division}` ,64/8);
//Question:no.8 You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
// console.log(1+7);
// console.log(12-4);
// console.log(8*1);
// console.log(32/4);
// Question No.9 Favorite Number: Store your favorite number in a variable. Then, using that variable, 
//create a message that reveals your favorite number. Print that message.
// let myFavoritenumber : number = 6
// let message = `My favourite Number Is ${myFavoritenumber} because it's My BirthDay Date!`;
// console.log(message);
// Question No.10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment 
//to each. If you don’t have anything specific to write because your programs are too simple at this point, 
//just add your name and the current date at the top of each program file. Then write one sentence 
//describing what the program does.
// Zameer Ahmed Solangi
// Date : 6-3-2024
//console.log(`Thank You Sir Kamran Khan Tessori For This IT Initiative.`);
// Zameer Ahmed Solangi
// Date : 6-3-2024
//console.log(`Our lead-trainer in Governor House is Miss Hina Naseer Khan.`);
//Question No.11 Names: Store the names of a few of your friends in a array called names. Print each 
//person’s name by accessing each element in the list, one at a time.
//loop method
// let friendsNames:string[] = ["Kashif","Ashraf","Zameer","Ibrahim"];
// for(let i=0; i<friendsNames.length; i++ ){
//    console.log(friendsNames[i]);  
// }
// console.log(""); //This log only for space
// for each method
// friendsNames.forEach(friend => {
//    console.log(friend);
// });
// console.log(""); //This log only for space
// for of loop method
// for (const name of friendsNames) {
//    console.log(name);
// }
// Question No.12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each 
//person’s name, print a message to them. The text of each message should be the same, but each message 
//should be personalized with the person’s name.
// let friendsNames1:string[] = ["Kashif","Ashraf","Zameer","Ibrahim"];
// friendsNames1.forEach(names => {
//    console.log(`Hey! ${names} which dish is your favourite?`);  
// });
// Question No.13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or 
//a car, and make a list that stores several examples. Use your list to print a series of statements 
//about these items, such as “I would like to own a Honda motorcycle.”
// let transport : string[] = ["Honda Civik","Honda CD125","Cycle"];
// for (const items of transport) {
//     console.log(`"I would like to own a ${items}."`)
// }
// Question No.14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you 
//invite? Make a list that includes at least three people you’d like to invite to dinner. Then use 
//your list to print a message to each person, inviting them to dinner.
// let guestList:string[] = ["Kashif Ali","Ashraf Ali","Zameer Ahmed"];
// guestList.forEach(guestList => {
//     console.log(`Assalam-o-Alaikum! ${guestList} tonight we have arranged dinner,so you are invited to come.\n Thank You! \n`)
// });
// Question No.15 Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program 
//stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the 
//new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
// let guestList1:string[] = ["Kashif Ali","Ashraf Ali","Zameer Ahmed"];
// for(let i=0; i<guestList1.length; i++){
// console.log(`Assalam-o-Alaikum! ${guestList1[i]} tonight we have arranged dinner,so you are invited to come.
// Thank You!\n`);
// }
// console.log(`\n Note: Kashif Ali is not coming due to some issues, so we have to invite another guest.\n`);
// let absent_Guest = "Kashif Ali"
// let new_Guest = "Zahid Ali"
// guestList1[0] = new_Guest;
// for(let i=0; i<guestList1.length; i++){
//    console.log(`Assalam-o-Alaikum! ${guestList1[i]} tonight we have arranged dinner,so you are invited to come.
//    Thank You!\n`);
//    }
// Question No.16 More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
//people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your 
//list. • Print a new set of invitation messages, one for each person in your list.
// let guestList2:string[] = ["Kashif Ali","Ashraf Ali","Zameer Ahmed"];
// let absent_Guest1 = "Kashif Ali"
// let new_Guest1 = "Zahid Ali"
// guestList2[0] = new_Guest1;//guestList2.splice(1,1)[0];
// for(let i=0; i<guestList2.length; i++){
//    console.log(`Assalam-o-Alaikum! ${guestList2[i]} tonight we have arranged dinner,so you are invited to come.
//    Thank You!\n`);
// }
// console.log("\n Hey Guys we found a bigger dinner table, so now more space is available.We have to invite three more guests.\n");
// guestList2.unshift("Yasir Ali");//For Beginning
// guestList2.splice(Math.floor(guestList2.length/2),0,"Toufiq Ali");//For middle |2nd method for middle => guestList2.splice(2,0,"Toufique Ali");
// guestList2.push("Rauf Ali");
// for(let i=0; i<guestList2.length; i++){
//    console.log(`Assalam-o-Alaikum! ${guestList2[i]} tonight we have arranged dinner,so you are invited to come.
//    Thank You!\n`);
// }
//Question no. 17 : Shrinking Guest List: 
// You just found out that your new dinner table won’t arrive in time for the dinner, and you have 
// space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
// invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you 
// pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
// invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
// actually have an empty list at the end of your program.
// let guestList2:string[] = ["Yasir Ali","Zahid ali","Toufiq Ali","Ashraf Ali","Zameer Ahmed","Abdul Rauf"];
// console.log("Unfortunately the new dinner table won't be arrive so we can invite only two guests!");
// while (guestList2.length > 2) {
//     let removeGuest: string | undefined = guestList2.pop();
//     if (removeGuest !== undefined) {
//         console.log(`Sorry  ${removeGuest}  we can't invite you to dinner`);
//     }
// }
// console.log("Updated list:" , guestList2);
// guestList2.forEach(guest => {
//     console.log(`Dear ${guest} you are both still invited to dinner`);
// });
// guestList2.splice(0,guestList2.length);
// console.log("Updated An Empty List:", guestList2);
// 18. Seeing the World: 
// Think of at least five places in the world you’d like to visit.
// • Store the locations in an array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
// changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
// order has changed.
//let locationTovisit: string[] = ["Dubai", "Qatar", "Iran", "America","Suadia Arabia"]
//Print in original order
//console.log("Original Order:",locationTovisit);
// • Print your array in alphabetical order without modifying the actual list.
//console.log("Alphabetical Order:",locationTovisit.slice().sort());
// • Show that your array is still in its original order by printing it.
//console.log("Showing Original Order:",locationTovisit);
// • Print your array in reverse alphabetical order without changing the order of the original list.
//console.log("Reverse Alphabetical Order:",locationTovisit.slice().sort().reverse());
// • Show that your array is still in its original order by printing it again.
//console.log("Showing Again Original Order:",locationTovisit);
// • Reverse the order of your list. Print the array to show that its order has changed.
//locationTovisit.reverse();
//console.log("Reverse Original Order Changed:",locationTovisit);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
//locationTovisit.reverse();
//console.log("Again Reverse Changed Order For Back To Original Order :",locationTovisit);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
// changed.
//locationTovisit.sort();
//console.log("Sort Original Order To Alphabetical Order :",locationTovisit);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
// order has changed.
//locationTovisit.sort().reverse();
//console.log("Sort Alphabetical Order to Reverse Alphabetical Order :",locationTovisit);
//  Question No:19. Dinner Guests: 
// Working with one of the programs from Exercises 14 through 18, print a message indicating 
// the number of people you are inviting to dinner.
// let guestList2:string[] = ["Yasir Ali","Zahid ali","Toufiq Ali","Ashraf Ali","Zameer Ahmed","Abdul Rauf"];
// console.log("Unfortunately the new dinner table won't be arrive so we can invite only two guests!");
// while (guestList2.length > 2) {
//     let removeGuest: string | undefined = guestList2.pop();
//     if (removeGuest !== undefined) {
//         console.log(`Sorry  ${removeGuest}  we can't invite you to dinner.`);
//     }
// }
// console.log("Updated list:" , guestList2);
// guestList2.forEach(guest => {
//     console.log(`Dear ${guest} you are both still invited to dinner.`);
// });
//Now For The Number People Who Are Invited To Dinner In The End.
//console.log(`The number of people who are invited to dinner in the end is : ${guestList2.length}`);
// Question no:20. Think of something you could store in an array. For example, you could make a list of mountains, 
// rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list 
// containing these items.
//let cities:string[] = ["Sukker","Moro","Nawabshah","Sehwan"];
//  1st Method
// console.log("List of cities : =>");
// for (let i = 0; i < cities.length; i++) {
//     console.log( cities[i]);
// }
//console.log("");    // <== This console is only for space.
// 2nd Method
// console.log("List of cities : =>");
// cities.forEach(cities => {
//     console.log(cities);
// });
//Question.No:21. They think of something you could store in a TypeScript Object. Write a program that creates 
// Objects containing these items.
// let bestplayer:{[key: string]:any} = {
// "Oppener": {
//     Name:"Baber",
//     Country:"Pakistan",
//     Age:30,
//     Role:"Batsman"
//     },
// "MiddleOrder": {
//     Name:"Sadiq",
//     Country:"Pakistan",
//     Age:30,
//     Role:"Batsman"
//     },
//  "BestPlayer": {
//     Name:"Shami",
//     Country:"Pakistan",
//     Age:30,
//     Role:"Allarounder"
//     },
// }   
// console.log(bestplayer);
//Question N:22. Intentional Error: 
// If you haven’t received an array index error in one of your programs yet, try to make one happen. 
// Change an index in one of your programs to produce an index error. Make sure you correct the error 
// before closing the program.
// let error : number[] = [1, 2, 3, 4, 5,6];
// console.log(error[10]);
// let errors : number[] = [1, 2, 3, 4, 5,6];
// console.log(errors[2]);
// Question no: 23 Conditional Tests: 
// Write a series of conditional tests. Print a statement describing each test and your prediction 
// for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//True Tests 1 to  5
//test 1
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');
// console.log("");
//test 2
// let bike = 'honda';
// console.log("Is bike == 'honda'? I predict True.");
// console.log(bike == 'honda');
// console.log("");
//test 3
// let myBestfriend = 'Ali';
// console.log("Is myBestfriend == 'Ali'? I predict True.");
// console.log(myBestfriend == 'Ali');
// console.log("");
//test 4
// let luckyNumber = 6;
// console.log("Is luckyNumber == '6'? I predict True.");
// console.log(luckyNumber == 6);
// console.log("");
//test 5
// let color = 'black';
// console.log("Is color == 'black'? I predict True.");
// console.log(color == 'black');
// console.log("");
//False tests 6 to 10
//test 6
// let bike1 = 'honda';
// console.log("Is bike == 'superstar'? I predict False.");
// console.log(bike1 == 'superstar');
// console.log("");
//test 7
// let color1 = 'black';
// console.log("Is color == 'pink'? I predict False.");
// console.log(color1 == 'pink');
// console.log("");
//test 8
// let luckyNumber1 = 6;
// console.log("Is luckyNumber == '7'? I predict False.");
// console.log(luckyNumber1 == 7);
// console.log("");
//test 9
// let myBestfriend1 = 'Ali';
// console.log("Is myBestfriend == 'Ahmed'? I predict False.");
// console.log(myBestfriend1 == 'Ahmed');
// console.log("");
//test 10
// let car1 = 'subaru';
// console.log("Is car == 'toyota'? I predict False.");
// console.log(car1 == 'toyota');
// console.log("");
// Question no:24 : More Conditional Tests: 
// You don’t have to limit the number of tests you create to 10. If you want to try more 
// comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
// to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in an array
// • Test whether an item is not in an array.
// • Tests for equality and inequality with strings
// let string1: string = "Hello";
// let string2: string = "world!";
// console.log(string1 === string2); //false
// console.log(string1 !== string2); //true
// console.log("");
// • Tests using the lower case function
// let upperCase: string = "HELLO";
// let lowerCase: string = "hello";
// console.log(upperCase.toLowerCase() === lowerCase); //true
// console.log(lowerCase.toUpperCase() !== upperCase); //false
// console.log("");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
// to, and less than or equal to
// let number1: number = 10;
// let number2: number = 20;
// console.log(number1 === number2); //false
// console.log(number1 !== number2); //true
// console.log(number1 > number2);  //false
// console.log(number1 < number2); //true
// console.log(number1 >= number2); //false
// console.log(number1 <= number2); //true
// console.log("");
// • Tests using "and" and "or" operators
// let a: number = 10;
// let b: number = 20;
// let c: number = 30;
// console.log(a < b && c > a); //true
// console.log(a > b || c > a); //true
// console.log(a > b || c < b); //false
// console.log("");
// • Test whether an item is in an array
// let array1:number[] = [1,2,3,4,5];
// let item1:number = 2;
// let item2:number = 5;
// console.log(array1.indexOf(item1) === 1); // true
// console.log(array1.indexOf(item2) === 5); // false
// console.log("");
// • Test whether an item is not in an array.
//console.log(array1.indexOf(7) === -1); // true
//console.log(array1.indexOf(8) === 9); // false
//  Question:no.25:Alien Colors #1: 
// Imagine an alien was just shot down in a game. Create a variable called alien_color and assign 
// it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)
// let alien_color: string = "green";
// if (alien_color == "green") {
//     console.log("The player just earned 5 points.");
// }
// alien_color = "yellow";
// if (alien_color == "green") {
//     console.log("The player just earned 5 points.");
// }
//Question:no.26: Alien Colors #2: 
// Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the 
// alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// let alien_color: string = "green";
// if (alien_color == "green") {
//     console.log("The player just earned 5 points for shooting the alien.");
// } else {
//     console.log("The player just earned 10 points.");
// };
// alien_color = "yellow";
// if (alien_color == "green") {
//     console.log("The player just earned 5 points for shooting the alien.");
// } else {
//     console.log("The player just earned 10 points.");
// };
//Question:no.27: Alien Colors #3: 
// Turn your if-else chain from Exercise 25-26 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color 
// alien.
//version#1
// let alien_color: string = "green";
// if (alien_color === "green") {
//     console.log("The player earned 5 points.");
// } else if (alien_color === "yellow") {
//     console.log("The player earned 10 points.");
// } else {
//     console.log("The player earned 15 points.");
// }
// console.log(""); //This log is only for line space.
//version#2
// alien_color = "yellow"
// if (alien_color === "green") {
//     console.log("The player earned 5 points.");
// } else if (alien_color === "yellow") {
//     console.log("The player earned 10 points.");
// } else {
//     console.log("The player earned 15 points.");
// }
// console.log("");//This log is only for line space.
//version#3
// alien_color = "Red";
// if (alien_color === "green") {
//     console.log("The player earned 5 points.");
// } else if (alien_color === "yellow") {
//     console.log("The player earned 10 points.");
// } else {
//     console.log("The player earned 15 points.");
// };
// Question:no.28:Stages of Life: 
// Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, 
// and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
// let age: number = 20;
// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//     console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//     console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//     console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//     console.log("The person is an adult.");
// } else if (age >= 65) {
//     console.log("The person is an elder.");
// }
// Question:no.29: Favorite Fruit: 
// Make an array of your favorite fruits, and then write a series of independent if statements that 
// check for certain fruits in your array.
// • Make an array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit 
// is in your array, the if block should print a statement,
// such as You really like bananas!
// let favorite_fruits: string[] = ["apple", "banana", "orange"];
// if(favorite_fruits.includes("apple")) {
//     console.log("You really like apples!");
// }
// if(favorite_fruits.includes("banana")) {
//     console.log("You really like bananas!");
// }
// if(favorite_fruits.includes("orange")) {
//     console.log("You really like oranges!");
// }
// if(favorite_fruits.includes("mango")) {
//     console.log("You really like mangoes!");
// }
// if(favorite_fruits.includes("grape")) {
//     console.log("You really like grapes!");
// };
// Question:no.30: Hello Admin: 
// Make an array of five or more usernames, including the name 'admin'. Imagine you are writing 
// code that will print a greeting to each user after they log in to a website. Loop through the array, and 
// print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a 
// status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// let usernames: string[] = ['Zameer', 'Kashif', 'Ashraf', 'Ibrahim', 'Yasir'];
// for (let i = 0; i < usernames.length; i++) {
//     if (usernames[i] === 'Zameer') {
//         console.log('Hello Zameer, would you like to see a status report?');
//     } else {
//         console.log('Hello ' + usernames[i] + ', thank you for logging in again.');
//     }
// };
// Question:no.31: No Users: 
// Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// let usernames: string[] = ['Zameer', 'Kashif', 'Ashraf', 'Ibrahim', 'Yasir'];
// if(usernames.length === 0) {
//     console.log('We need to find some users!');
// } else {
//   usernames = [];
//   console.log("All users have been removed"+" "+ usernames.length);
// };
// Question:no.32: Checking Usernames: 
// Do the following to create a program that simulates how websites ensure that everyone has a 
// unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames 
// are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print 
// a message that the person will need to enter a new username. If a username has not been used, print 
// a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be 
// accepted.
// let current_users:string[] = ['Sadam', 'Zameer', 'Zeeshan', 'ahmed', 'ali'];
// let new_users:string[] = ['Toufiq', 'Tarique', 'Yasir', 'ahmed', 'ali'];
// new_users.forEach(new_users  => {
//     if(current_users.map(currentuser => currentuser.toLowerCase()).includes(new_users.toLowerCase())) {
//         console.log(`The username ${new_users} has already been used.Please write a new username!`);
//     } else {
//         console.log(`The username ${new_users} is available!`);
//     }
// });
// Question:no.33: Ordinal Numbers: 
// Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers 
// end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output 
// should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// let numbers: number[] = [1, 2, 3, 4, 5, 6 , 7, 8, 9]
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] == 1) {
//         console.log(numbers[i] + "st")
//     } else if (numbers[i] == 2) {
//         console.log(numbers[i] + "nd")
//     } else if (numbers[i] == 3) {
//         console.log(numbers[i] + "rd")
//     } else {
//         console.log(numbers[i] + "th")
//     }
// };
// Question:no.34: Pizzas: 
// Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and 
// then use a for loop to print the name of each pizza.
// • Modify your loop to print a sentence using the name of the pizza instead of printing just the name of 
// the pizza. For each pizza you should have one line of output containing a simple statement like I like 
// pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The 
// output should consist of three or more lines about the kinds of pizza, you like and then an additional 
// sentence, such as I really love pizza!
// let pizza = ["Cheese Pizz", "Pepperoni Pizza", "Vegetarian Pizza"]
// for (let i = 0; i < pizza.length; i++) {
//     console.log(pizza[i]);
// }
// console.log("\n"); // => this log is only for line space.
// for (let i = 0; i < pizza.length; i++) {
//     console.log("I like" , pizza[i]);
// }
// console.log(
//     `\nI like to eat Pizzas.Pizza comes in a variety of flavors
// tooping  allowing individuals to customize it to their favorite.`
// );
// Question :no.35: Animals: 
// Think of at least three different animals that have a common characteristic. Store the names 
// of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. You could print 
// a sentence such as Any of these animals would make a great pet!
// let animals = ["Dog", "Cow" , "Monkey"]
// animals.forEach(animals => {
//     console.log(`A ${animals} would make a great pet.`);
// });
// console.log("Any of these animals would make a great pet!");
//Question:no.36:T-Shirt: 
// Write a function called make_shirt() that accepts a size and the text of a message that should 
// be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the 
// message printed on it. Call the function.
// function make_shirt(size:string, message:string) {
//     console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
// };
// make_shirt("medium size" , "Code is life");
//Question:no.37:Large Shirts: 
// Modify the make_shirt() function so that shirts are large by default, with a message that reads 
// I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
// size with a different message.
// function make_shirt(size:string = "Large", message:string = "I love TypeScript.") {
//     console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
// };
// make_shirt();
// make_shirt("medium");
// make_shirt("small","Dive into Coding");
//Question:no.38: Cities: 
// Write a function called describe_city() that accepts the name of a city and its country. The 
// function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the 
// country a default value. Call your function for three different cities, at least one of which is not in the
// default country.
// function describe_city(city: string = "Karachi", country: string = "Pakistan"){
//     console.log(`${city} is in ${country}`);
// }
// describe_city();
// describe_city("Sukker");
// describe_city("Delhi","India");
// describe_city("New York","United States");
//Question:No.39: City Names: 
// Write a function called city_country() that takes in the name of a city and its country. The 
// function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least 
// three city-country pairs, and print the value that’s returned.
// function city_country(city:string , country:string){
//     return`"${city},${country}"`
// }
// let mycities = city_country("Karachi","Pakistan");
// console.log(mycities);
// console.log(city_country("Dubai","UAE"));
// console.log(city_country("London","United States"));
// console.log(city_country("Riyaz","Saudia Arabia"));
//Question:no.40: Album: 
// Write a function called make_album() that builds an Object describing a music album. The 
// function should take in an artist name and an album title, and it should return a Object containing 
// these two pieces of information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make 
// at least one new function call that includes the number of tracks on an album.
// function make_album(artist: string, albumTitle: string){
//     let album = {
//         artist: artist,
//         title: albumTitle
//     }
//     return album;
// };
// let album1 = make_album("Ali","Rang-e-Muhabat");
// let album2 = make_album("Madad","Roshan Andhera");
// let album3 = make_album("Ayaz","Mausam-e-Dil");
// console.log(album1);
// console.log(album2);
// console.log(album3); 
// console.log("");
//Number of Tracks
// function make_album_with_tracks(artist: string, albumTitle: string, tracks?: number){
//     let album = {
//         artist: artist,
//         title: albumTitle,
//         tracks: tracks
//     }
//     return album
// };
// let album4 = make_album_with_tracks("Ali","Rang-e-Muhabat", 15);
// let album5 = make_album_with_tracks("Madad","Roshan Andhera", 10);
// let album6 = make_album_with_tracks("Ayaz","Mausam-e-Dil",20);
// console.log(album4);
// console.log(album5);
// console.log(album6);
//Question:no.41: Magicians: 
// Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
// prints the name of each magician in the array.
// let magicians :string[] =["Don","Charles","John"]
// function show_magicians(magicians: string[]){
//     magicians.forEach(magician => console.log(magician));
// };
// show_magicians(magicians);
//Question:no.42: Great Magicians: 
// Start with a copy of your program from Exercise 41. Write a function called make_great() that 
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
// show_magicians() to see that the list has actually been modified.
// let magicians :string[] =["Don","Charles","John"]
// function show_magicians(magicians: string[]){
//     magicians.forEach(magician => console.log(magician));
// };
// function make_great(magicians: string[]){
//     magicians.forEach(magician => console.log(magician,"the Great."));
// };
// make_great(magicians);
// console.log("")// This log is only for line space
// show_magicians(magicians);
//Question:no.43: Unchanged Magicians: 
// Start with your work from Exercise 42. Call the function make_great() with a copy of the array 
// of magicians’ names. Because the original array will be unchanged, return the new array and store it 
// in a separate array. Call show_magicians() with each array to show that you have one array of the 
// original names and one array with the Great added to each magician’s name.
// let magicians:string[] = ["John", "David", "Chris"]
// function show_magicians(magicians: string[]){
//     magicians.forEach(magician => console.log(magician));
// };
// function make_great(magicians: string[]): string[] {
//     let greatMagicians: string[] = []
//     for (let i = 0; i < magicians.length; i++) {
//         greatMagicians.push(`${magicians[i]} the Great.`)
//     }
//     return greatMagicians
// };
// let greatMagicians = make_great(magicians.slice());
// console.log("Original magicians:");
// show_magicians(magicians);
// console.log("Great magicians:");
// show_magicians(greatMagicians);
//Question:no.44: Sandwiches: 
// Write a function that accepts an array of items a person wants on a sandwich. The function 
// should have one parameter that collects as many items as the function call provides, and it should 
// print a summary of the sandwich that is being ordered. Call the function three times, using a different 
// number of arguments each time.
// function createSandwich(...items: string[]) {
//     console.log(`Your sandwich has the following ingredients:  ${items.join(', ')}`);
// };
// createSandwich('Ham', 'Bacon.');
// createSandwich('Tomatoes', 'Lettuce', 'Mayonnaise.');
// createSandwich('avocado','mayonnaise', 'sprouts','lettuce.');
//Question:no.45: Cars: 
// Write a function that stores information about a car in an Object. The function should always 
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword 
// arguments. Call the function with the required information and two other name-value pairs, such as 
// a color or an optional feature. Print the Object that’s returned to make sure all the information was
// stored correctly.
// function createCar(manufacturer:string, model:string, ...options:[string,any][]):Object {
//     let car:any = { manufacturer, model };
//     options.forEach(([key , value]) => car[key] = value);
//     return car;
// };
// console.log(createCar("Toyota","Carolla", ["Color","Red"],["Year",2020]));
// console.log(createCar("Ford","Fiesta", ["Color","Blue"],["sunroof",true]));
/// The End ///
