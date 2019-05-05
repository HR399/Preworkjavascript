/* why doesn't the longest_word function work?*/
function longest_word(sentence){
    var stringArray = sentence.split(" ");
    var longest =0;
    for (var i=0; i < stringArray.length; i++) {
        if(stringArray[i].length > longest){
            longest = stringArray[i];}
    } return longest ;
};

console.log(longest_word("hi world"));