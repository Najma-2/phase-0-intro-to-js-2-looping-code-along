// Code your solutions in this file
function writeCards(names, birthday) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
      messages.push("Thank you, " + names[i] + "," + " for the wonderful " + birthday + " gift!")
    }
    return messages;
  }



function countDown(){
 let count = 10
while (count >= 0){
    count--;
    console.log(count);
}
}