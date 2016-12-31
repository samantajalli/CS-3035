
function SentenceFailed(message){
  this.message = message;
}

SentenceFailed.prototype = Object.create(Error.prototype);

function read(test, message){
  if(!test)
    throw new SentenceFailed(message);
}

function wrapWords(words){
  var wordFlag = false;

  var singleWords = words.split(" ");

  function readSentence(singleWords){
    read(singleWords.length > 0, "error, there are no words to be read");
    var rand = Math.floor(Math.random() * 4) + 1;
    console.log(rand);
    if (rand >= 1 && rand <= 3){
      return singleWords;

    }
    else if(rand == 4){
      throw new SentenceFailed("error, Sentence failed!");
      return null;
    }
  }
  do{
  //var sentence = readSentence(singleWords);
    try{
      var sentence = readSentence(singleWords);
      if (sentence == null){
         throw "Exception";
         wordFlag = false;
      }
      else {
        wordFlag = true;
      }
   }catch(error){
    SentenceFailed(error);
  }
}while(wordFlag != true);

return sentence; // an array
}

 function testArrays(arr1, arr2){
   for (var i = 0; i < arr1.length; i++){
     if (arr1[i] != arr2[i])
     return false;
   }
   return true;
 }

function testWrapWords(){
  var first = "a the";
  var firstSplit = first.split(" ");
  var firstCheck = wrapWords("a the");
  var flag = testArrays(firstSplit, firstCheck);
  if (flag == true)
    console.log("Sentence 1: passed");


  var second = "I'm going outside";
  var secondSplit = second.split(" ");
  var secondCheck = wrapWords("I'm going outside")
   flag = testArrays(secondSplit, secondCheck);
  if (flag == true)
    console.log("Sentence 2: passed");


  var third = "the car is there";
  var thirdSplit = third.split(" ");
  var thirdCheck = wrapWords("the car is there");
   flag = testArrays(thirdSplit, thirdCheck);

  if(flag == true)
    console.log("Sentence 3: passed");


  var fourth = "Hey Congratulations!"
  var fourthSplit = fourth.split(" ");
  var fourthTest = wrapWords("Hey Congratulations!");
  flag = testArrays(fourthSplit, fourthTest);

  if (flag == true)
    console.log("Sentence4: passed");

}

testWrapWords();
