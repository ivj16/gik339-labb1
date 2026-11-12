//----------------- Uppgift 2 -----------------

/*console.log("Ålder: " + age + " Förnamn :" + firstName + " Studerar: " + inSchool);*/

{
  let age = 26;
  const firstName = "Ida";
  var inSchool = true;

  console.log(
    "Ålder: " + age + " Förnamn :" + firstName + " Studerar: " + inSchool,
  );
}

/*console.log("Ålder: " + age + " Förnamn :" + firstName + " Studerar: " + inSchool: );*/

/* Refklektion uppgift 2:
1, let och const kan inte nås utanför sitt block, men det kan var. Därför är nyckeltordet var mer oberäkeneligt, eftersom det inte alltid beter sig på samma/förväntat sätt.

2, Vid placering av consol.log() utanför blocket, före eller efter, kan inte variablerna deklarerade med let och const nås och kan därför inte skrivas ut. 
Genom att placera console.log() inom blocket hittas variabeldeklarationerna och kan skrivas ut. */

//----------------- Uppgift 3 & 4, reflektioner längst ner -----------------
//Första versionen, arrowfunction
//const add = (num1, num2) => num1 + num2;

//Två sätt att skapa if-satsen, där både ger väntad output:
/*const add = (num1, num2) => {
  console.log(num1 == 0);
  console.log(num2 === "0");
  console.log(num2 === 0);
  console.log(num1 == NaN);
  console.log(num1 ? "truthy" : "falsy");
  if (
    (num1 !== undefined || null) &&
    (num2 !== undefined || null) &&
    typeof num1 === typeof NaN &&
    typeof num2 === typeof NaN
  ) {
    return num1 + num2;
  } else {
    return "Felaktig input";
  }
};*/

const add = (num1, num2) => {
  console.log(num1 == 0);
  console.log(num2 === "0");
  console.log(num2 === 0);
  console.log(num1 == NaN);
  console.log(num1 ? "truthy" : "falsy");
  if (
    ((num1 && num2) !== undefined || null) &&
    typeof num1 === typeof NaN &&
    typeof num2 === typeof NaN
  ) {
    return num1 + num2;
  } else {
    return "Felaktig input";
  }
};

//test console.log(add(0, 5));
//test console.log(add("hej", 7));

/*Reflektion uppgift 3:
1, Om let använts istället för const hade variabeln tillåtits att ändras/skrivas över senare. Det får man inte då den deklareras med en const

2, Samma funktion, skriven som en funktionsdeklaration:
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(2, 8));

3, Med return kan en funktion skicka tillbaka (returnera) ett värde till anroparen. */

/*Reflektion uppgift 4
  1, En ternary operator är ett kortare sätt att skriva en villkorssats. Den har två möjliga utfall, 
  ett truthy och ett falsy. Det är inte samma sak som de booleanska true och false, men beter sig 
  som det. Värden som kan bli falsy är t.ex. false, null, 0, -0, NaN, undefined och ""(tom sträng).
  Det gör det möjligt att exempelvis hantera null-värden som false i villkorssatsen.
  
  2, Två likhetstecken (==) innebär att man jämför med implicit typkonvertering. Exempelvis kan man jämföra siffran 2 med strängen '2'.
  Tre likhetstecken (===) innebär en strickt jämförelse, då konverteras inte typerna vilket innebär att exempelt ovan skulle innebära false.
  Ovan exempel i kod;
  let first = 2;
  let second = '2';
  console.log(first == second); //true
  console.log(first === second); //false

  3, För att kontrollera att parametrarna inte är null har jag använt den logiska operatorn eller || efter kontrollen med "inte lika med" undefined.
  Det innebär att jag kontrollerar att parametrarena inte är lika med undefined eller null. Jag har även testat att skriva villkoret på två sätt
  med olika parenteser. Jag har också valt att använda typeof för att kontrollera om argumenten som skickats in är siffror.
*/

//---------- Uppgift 5 ----------

const num1 = 0;
let arg1;
let sum = false;

//Test 1:
console.log(add(sum, 1));

//Test 2:
console.log(add("0", 3));

//Test 3:
console.log(add(3, "num1"));

//Test 4:
console.log(add(-5, num1));

//Test 5:
console.log(add(arg1, 7));

//Test 6:
console.log(add());

//Test 7
console.log(add(-0, 100));

console.log("num1: " + num1 + " sum: " + sum);

/*Reflektion uppgift 5
  1, Parameter är det som står inom parantesen då funktionen deklareras, som visar vad som behövs för att funktionen ska kunna utföras
  En variabel är en behållare som kan ta ett värde. Dessa kan skickas t.ex. skickas in till en funktion som argument
  Argument är det som faktuskt skickas in till en funktion då den anropas.
  
  2, Output blir 0 eftersom det senaste tilldelade värdet utanför något block är siffran 0.
  
  3, Test 1: Det som skickas som argument är för parameter num1: false (sum) och för parameter num2: siffran 1.
  Rad 1: Här har false implicit konverterats till 0, vilket ger true.
  Rad 2: Strikt jämförelse mellan siffran 1 och strängen "0". Detta ger false.
  Rad 3: Strikt jämförelse mellan siffran 1 och siffran 0, fortfarande false eftersom det inte är samma värde.
  Rad 4: Jämförelse med implicit typkonvertering mellan fasle och NaN (Not a Number). Då NaN inte går att likställa med något, eftersom det inte är ett specifikt värde, blir output false.
  Rad 5: Kontrollerar om false är truthy eller falsy, vilket ger falsy (utrrycket till höger om :). False är ett av de värden som falsy "har".
  Rad 6: Output: Felaktig input. Detta eftersom if-satsens villkor inte fylls (sum är inte en siffra)
  
  Test 2: Det som skickas som argument är för parameter num1: strängen "0" och för parameter num2: siffran 3.
  Rad 1: Här har strängen "0" implicit konverterats till 0, vilket ger true.
  Rad 2: Strikt jämförelse mellan siffran 3 och strängen "0". Detta ger false
  Rad 3: Strikt jämförelse mellan siffran 3 och siffran 0, fortfarande false eftersom det inte är samma värde
  Rad 4: Jämförelse med implicit typkonvertering mellan "0" och NaN (Not a Number). Då NaN inte går att likställa med något, eftersom det inte är ett specifikt värde, blir output false.
  Rad 5: Kontrollerar om "0" är truthy eller falsy, vilket ger truthy (utrrycket till vänster om : ) En "icke-tom" sträng ger truthy, inget falsy-värde
  Rad 6: Output: Felaktig input. Detta eftersom if-satsens villkor inte fylls (strängen "0" är inte en siffra)

  Test 3: Det som skickas som argument är för parameter num1: siffran 3 och för parameter num2: strängen "num1".
  Rad 1: Siffran 3 jämförs med siffran 0, vilket ger false.
  Rad 2: Strikt jämförelse mellan strängen "num1" och strängen "0". Detta ger false.
  Rad 3: Strikt jämförelse mellan strängen "num1" och siffran 0, fortfarande false eftersom det inte är samma värde.
  Rad 4: Jämförelse med implicit typkonvertering mellan siffran 3 och NaN (Not a Number). Då NaN inte går att likställa med något, eftersom det inte är ett specifikt värde, blir output false.
  Rad 5: Kontrollerar om 3 är truthy eller falsy, vilket ger truthy (utrrycket till vänster om : ) En siffra ger truthy, inget falsy-värde
  Rad 6: Output: Felaktig input. Detta eftersom if-satsens villkor inte fylls (strängen "num1" är inte en siffra)

  Test 4: Det som skickas som argument är för parameter num1: siffran -5 och för parameter num2: variabeln num1 som håller värdet 0.
  Rad 1: Siffran -5 jämförs med siffran 0, vilket ger false.
  Rad 2: Strikt jämförelse mellan variabeln num1, alltså 0, och strängen "0". Detta ger false eftersom de inte är av samma typ.
  Rad 3: Strikt jämförelse mellan variabeln num1, alltså 0, och siffran 0. Ger true eftersom det är samma värde (av samma typ utan konvertering).
  Rad 4: Jämförelse med implicit typkonvertering mellan siffran -5 och NaN (Not a Number). Då NaN inte går att likställa med något, eftersom det inte är ett specifikt värde, blir output false.
  Rad 5: Kontrollerar om -5 är truthy eller falsy, vilket ger truthy (utrrycket till vänster om : ) En siffra ger truthy, inget falsy-värde
  Rad 6: Output: -5. Detta eftersom if-satsens alla vilkor uppfylls, vilket innebär att funktionen kommer returnera summan av -5 + 0, alltså -5

  Test 5: Det som skickas som argument är för parameter num1: variabeln arg1 som är undefined och för parameter num2: siffran 7.
  Rad 1: Variabeln arg1 (undefined) jämförs med siffran 0, vilket ger false. Det är inte samma värde.
  Rad 2: Strikt jämförelse mellan siffran 7 och strängen "0". Detta ger false eftersom det inte är samma värde (eller typ).
  Rad 3: Strikt jämförelse mellan siffran 7 och siffran 0. Fortfarande false eftersom det inte är samma värde, trots att de är av samma typ.
  Rad 4: Jämförelse med implicit typkonvertering mellan variabeln arg1 (undefined) och NaN (Not a Number). Då NaN inte går att likställa med något, eftersom det inte är ett specifikt värde, blir output false.
  Rad 5: Kontrollerar om variabeln arg1 (undefined) är truthy eller falsy, vilket ger falsy (utrrycket till vänster om : ) Undefined är ett av de värden som falsy "har".
  Rad 6: Output: Felaktig input. Detta eftersom if-satsens villkor inte fylls (arg1 är undefined)

  Test 6: Anropet skickar inte med några argument, alltså blir parametrarna undefined (odefinierade).
  Rad 1: undefined jämförs med siffran 0, vilket ger false. Det är inte samma värde.
  Rad 2: Strikt jämförelse mellan undefined och strängen "0". Detta ger false eftersom det inte är samma värde (eller typ).
  Rad 3: Strikt jämförelse mellan undefined och siffran 0. Fortfarande false eftersom det inte är samma värde (eller typ).
  Rad 4: Jämförelse med implicit typkonvertering mellan undefined och NaN (Not a Number). Då NaN inte går att likställa med något, eftersom det inte är ett specifikt värde, blir output false.
  Rad 5: Kontrollerar om undefined är truthy eller falsy, vilket ger falsy (utrrycket till vänster om : ) Undefined är ett av de värden som falsy "har".
  Rad 6: Output: Felaktig input. Detta eftersom if-satsens villkor inte fylls (eftersom inga argument skickas in blir parametrarna undefined)

  Test 7: Det som skickas som argument är för parameter num1: siffran -0 och för parameter num2: siffran 100.
  Rad 1: Siffran -0 jämförs med siffran 0, vilket ger true. Det är egentligen samma värde.
  Rad 2: Strikt jämförelse mellan siffran 100 och strängen "0". Detta ger false eftersom det inte är samma värde (eller typ).
  Rad 3: Strikt jämförelse mellan siffran 100 och siffran 0. Fortfarande false eftersom det inte är samma värde, trots att de är av samma typ.
  Rad 4: Jämförelse med implicit typkonvertering mellan siffran -0 och NaN (Not a Number). Då NaN inte går att likställa med något, eftersom det inte är ett specifikt värde, blir output false.
  Rad 5: Kontrollerar om siffran -0 är truthy eller falsy, vilket ger falsy (utrrycket till vänster om : ) -0 är ett av de värden som falsy "har".
  Rad 6: Output: 100. Detta eftersom if-satsens alla vilkor uppfylls, vilket innebär att funktionen kommer returnera summan av -0 + 100, alltså 100.
  */

//---------- Uppgift 6 ----------

function smallCalculator() {
  let firstNumber;
  let num1 = window.prompt("Ange ditt första tal");
  while (isNaN(firstNumber) === true) {
    firstNumber = Number(num1);

    if (isNaN(firstNumber) === false) {
      let secondNumber;
      let num2 = window.prompt("Ange ditt andra tal");

      while (isNaN(secondNumber) === true) {
        secondNumber = Number(num2);
        if (isNaN(secondNumber) == false) {
          let difference = firstNumber - secondNumber;
          let product = firstNumber * secondNumber;
          let sameNumber = difference === 0 ? "lika" : "olika";
          return `Differensen är: ${difference}, produkten är ${product} och talen är ${sameNumber}`;
        } else {
          num2 = window.prompt("Felaktig input, ange igen.");
        }
      }
    } else {
      num1 = window.prompt("Felaktig input, ange igen.");
    }
  }
}
//TA BORT "//" PÅ RADEN NEDANFÖR FÖR ATT KÖRA KALKYLATORN
//console.log(smallCalculator());

/*Reflektion uppgift 6
1, Jag valde att använda en template sträng. Främst för att det är denna jag har bäst koll på i 
utskrifter sedan innan. Men fördelar med detta är bland annat att man slipper använda "+ för konkatenering. Det
blir också i returvärdet tydligt vad varje del innehåller då man (i detta fall) ser namnet på variabeln.

En array är en ordnad lista där man kan komma åt de sparade värdena med hjälp av deras indexposition. Ett exempel
på en situation när en array hade varit bra är är om vi hade velat skriva ut alla värden i en viss ordning, då
kan man iterera genom listan med t.ex. en foreach-loop. En nackdel i detta fall hade varit att det i returvärdet 
inte hade varit så tydligt vad varje del innehåller, då man endast skulle få se en indexposition. 

Ett objekt är bra när man vill spara nycklar och värden som par. T.ex. kan en användare ha flera attribut, som 
förnamn, efternamn pch ålder. Genom att använda användare som nyckel kan man kolla upp dessa värden väldigt snabbt. 
En nackdel med att använda objekt i det här fallet är att koden skulle bli onödigt komplicerad för en simpel uppgift. 

2, Enligt SOLID principen Single Responibility Principle (SRP) ska en klass eller funktion endast ha ett ansvar. Det skulle
därför vara bra att dela upp ansvaret för att beräkna differens, proukt och om talen är lika eller inte i tre separata 
funktioner. På så vis kan man i framtiden använda funktionerna för att få fram precis det man är intresserad av och inte 
blir påtvingad något mer. 
*/
