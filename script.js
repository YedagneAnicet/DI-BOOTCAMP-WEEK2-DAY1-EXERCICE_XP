/* Exercise 1: Your Favorite Food
Instructions
Store your favorite food into a variable.

Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

Console.log I eat <favorite food> at every <favorite meal>
*/

let strFavoriteFood = "vegetable sauce with rice";

let strFavoriteMeal = "Lunch";

console.log("I eat " + strFavoriteFood + " at every " + strFavoriteMeal);

/* Exercise 2 : Series
Instructions
Part I
Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
For example : black mirror, money heist, and the big bang theory

Console.log a sentence using both of the variables created above
For example : I watched 3 series : black mirror, money heist, and the big bang theory


Part II
Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
Add, at the end of the array, the name of another series you watched.
Add, at the beginning of the array, the name of your favorite series.
Delete the series “black mirror”.
Console.log the third letter of the series “money heist”.
Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made. */

// Part I 

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory", "Platinum End"];

let myWatchedSeriesLength = myWatchedSeries.length;

let myWatchedSeriesSentence = "is a shōnen manga written by Tsugumi Ōba and drawn by Takeshi Obata. It is prepublished from November 4, 2015 to January 4, 2021 in Shūeisha's Jump Square magazine and compiled in 14 volumes. where it is about choosing the new god among 14 candidates.";

console.log(`I watched ${myWatchedSeriesLength - 3} serie; ${myWatchedSeries[3]} ${myWatchedSeriesSentence}`);

// Part II

myWatchedSeries[2] = "friends";

myWatchedSeries.push("Black Clover");

myWatchedSeries.unshift("Kuroko's Basket");

myWatchedSeries.splice(1,1);

let moneyHeist = myWatchedSeries[1]
console.log(moneyHeist.charAt(2));

console.log(myWatchedSeries);

/* Exercise 3 : The Temperature Converter
Instructions
Store a celsius temperature into a variable.

Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32
*/

let celsiusTemperature = 10;

let fahrenheitTemperature = (((celsiusTemperature / 5 ) * 9) + 32);

console.log(`${celsiusTemperature}°C is ${fahrenheitTemperature}°F`);

/* Exercise 4 : Guess The Answers #1
Instructions
For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction. */

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 34 + 21
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 2 + 21
// Actual: 23 
//value of c is Undefined
// result of console.log(3 + 4 +'5') is 75

/*Exercice 5 : Devinez Les Réponses #2
Des Instructions
Pour chaque expression, prédisez ce que vous pensez que la sortie sera dans un commentaire ( //) sans exécuter la commande au préalable.
Bien sûr, expliquez chaque prédiction.
Exécutez ensuite l'expression dans la console. Notez la sortie réelle dans un commentaire et comparez-la avec votre prédiction.
 */

typeof(15)
// Prediction: 15 is number
// Actual: number

typeof(5.5)
// Prediction: 5.5 is a decimal number
// Actual: number

typeof(NaN)
// Prediction: number
// Actual:number

typeof("hello")
// Prediction: salutation
// Actual: string

typeof(true)
// Prediction: reponse
// Actual: boolean

typeof(1 != 2)
// Prediction: compare
// Actual: boolean

"hamburger" + "s"
// Prediction: concatenate
// Actual: hamburgers

"hamburgers" - "s"
// Prediction:doesn't number
// Actual:NaN

"1" + "3"
// Prediction: concatenate
// Actual: 13

"1" - "3"
// Prediction: soustration of type
// Actual:-2

"johnny" + 5
// Prediction:concatenate
// Actual:johnny5

"johnny" - 5
// Prediction: doesn't number
// Actual:NaN

99 * "hello"
// Prediction: doesn't number
// Actual:NaN

1 != 1
// Prediction: compare
// Actual: false

1 == "1"
// Prediction: compare
// Actual: true

1 === "1"
// Prediction: compare
// Actual: false

/*Exercise 6 : Guess The Answers #3
Instructions
For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction. */

5 + "34"
// Prediction: concatenate
// Actual: 534

5 - "4"
// Prediction: soustration of type
// Actual:1

10 % 5
// Prediction: modulo
// Actual:0

5 % 10
// Prediction:modulo
// Actual: 5

`JavaScript`
// Prediction: text
// Actual:JavaScript

" " + " "
// Prediction: espace
// Actual:   

" " + 0
// Prediction: concatenate
// Actual: 0

true + true
// Prediction: true == 1 so true + true equal 2 
// Actual: 2

true + false
// Prediction: true == 1 false == 0 so true + false equal 1
// Actual: 1

false + true
// Prediction:true == 1 false == 0 so false + true equal 1
// Actual: 1

false - true
// Prediction: true == 1 false == 0 so false - true equal -1
// Actual:-1

!true
// Prediction: not true
// Actual: false

3 - 4
// Prediction: soustration
// Actual: -1

"Bob" - "bill"
// Prediction: doesn't number
// Actual: NaN