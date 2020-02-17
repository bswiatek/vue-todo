<template>
  <div class="jsprimer">
  </div>
</template>

<script>
export default {
  name: 'JsPrimer',
}

const myFunc = (nameFunction) => ("Cześć, " + nameFunction() + "!");
const printName = (nameFunction, printFunction) => printFunction(myFunc(nameFunction));
printName(function() {return "Bartek"}, console.log)

let myData = {
  name : "Bartek",
  weather : "słonecznie",
  printMessages() {
    console.log(`Hi, ${this.name}!`);
    console.log(`Dziś jest ${this.weather}!`);
  }
};
myData.printMessages();

import additionFunction from "@/components/maths/sum";
let values = [10, 20, 30, 40, 50];
let total = additionFunction(values);
console.log("Łącznie: " + total);
</script>