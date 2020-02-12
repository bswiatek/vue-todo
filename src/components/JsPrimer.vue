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
</script>