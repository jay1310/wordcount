const textField = document.getElementById("text");
var wordsCounter = document.getElementById("words-counter");


textField.onkeyup = (e)=>{
    if(e.keyCode === 32 || e.keyCode === 8 || e.keyCode === 13){
        var counts = {};                        // taking an empty object in which words will be put as keys and counts[key] as their value.
        var keys = [];                          // an empty array to remember the order of input words.
        let val = textField.value;
        val = val.trim();
        let tokens = val.split(' ');
        console.log(tokens);
        for (var i = 0; i < tokens.length; i++) {
            var word = tokens[i].toLowerCase();
            word = word.replace(/[^a-zA-Z ]/g, "");
            if (!/\d+/.test(word) && word != '')     //checks if the word is containng digit or not.
            {            
              if (counts[word] === undefined) {
                counts[word] = 1;
                keys.push(word);
              } 
              else {
                counts[word] = counts[word] + 1;
              }
            }
        }

        if(textField.value){
            var sum = 0;
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                sum += counts[key];
                //console.log(key + ' ' + counts[key]);
                if(i == 0)
                    wordsCounter.innerHTML = "Word" + ' : '+ "Occurence";          //if it is the first word, then replace the texts in span tag.
                    
                wordsCounter.innerHTML += "<p>"+key + ' : ' + counts[key]+"</p>";   
            
            }
            wordsCounter.innerHTML += "Total number of words = "+ sum; 
        }
        else{
        wordsCounter.innerHTML = "<p> Please enter some texts.</p>";        //if textarea become empty.
        }
    }
}

