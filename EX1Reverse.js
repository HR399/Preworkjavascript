function reverse(str){
    // create an empty string that will host the new created string
    var newstring="";
    /* for loop, starting point is the last character of the string => string.length -1
    as long as i is greater than or equals 0, the loop will go on
    i is decremented after each iteration*/
    for (var i =str.length -1; i>=0 ; i--)
    newstring += str[i]
    
    // retrun the reversed string
    return newstring;
}

console.log(reverse("hello"));
