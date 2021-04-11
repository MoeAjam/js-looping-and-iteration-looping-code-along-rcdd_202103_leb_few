function writeCards(myArray, eventName){
  let result;
  for(let i=0; i<myArray.length;i++){
    result[i]= "Thank you, ${myArray[i]}, for the wonderful ${eventName} gift!";
  }
  return result;
}