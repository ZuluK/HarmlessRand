//Harmless Ransom Note algorithm
function harmlessRansomNote(noteText, magazineText){
  var noteArr = noteText.split('');
  var magazineArr = magazineText.split('');
  var magazineObj = {};

  magazineArr.forEach(word =>{//this loop is running in LinearTime Complexity O(n)
    if(!magazineObj[word])magazineObj[word] = 0;
    magazineObj[word]++;
  });
  console.log(magazineObj);
  //sets boolean value
  //this algorithm is running in a Linear Time Complexity of O(n) + O(m)
  var noteIsPossible = true;
  noteArr.forEach(word =>{
    //if current words exists in the magazine objects
    if(magazineObj[word]){//this loop is running in Linear Time Complexity because it loops through every word in the Note Array
      magazineObj[word]--;
      if(magazineObj[word]  < 0) noteIsPossible = false;
    }
    //otherwise if it not present then set to false
    else noteIsPossible = false;
  });
};


harmlessRansomNote('this is a secret note for you from a secret admirer','puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');
