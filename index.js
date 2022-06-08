function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue > 2500) {
    return "No can do.";
    
  }
  else if (someValue > 2000) {
    return "I will gladly take your thirty bucks.";
  }

  else if (someValue <= 400) {
    return "This one is on me!";
  }


}
console.log(scuberGreetingForFeet(199));



function ternaryCheckCity(city){
  // Write your code here!
  const destinationCity =city;
  const city1 = destinationCity === "NYC"?"Ok, sounds good.":"No go.";
  return city1;

}

console.log(ternaryCheckCity("Nairobi"));


function switchOnCharmFromTip(tip){
  // Write your code here!

  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    case "thanks for everything":
      return "Bye.";
      break;
  }
  
}

switchOnCharmFromTip("thanks for everything");