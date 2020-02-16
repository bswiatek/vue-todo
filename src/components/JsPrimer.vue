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
</script>