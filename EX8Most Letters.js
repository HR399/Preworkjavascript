function nearby_az(myString) {
    // start with the overall structure for, return and console.log
    //define the counter outside of the for loop because we want to retain the value per each loop iteration
    var myInteger = 0; //variable to track count
    for (var i =0; i< myString.length; i++){
        console.log(myString[i]); //prints all of the string, one index per loop iteration
        if(myString[i]==="a"){
            console.log("found an a"); //prints a new line to the console
            myInteger = 0;
        } else if (myString[i]==="z") {
            if (myInteger<4){
                return true;
            }

        }
        myInteger +=1; //each time the loop iterates myInteger goes up by 1

    } 
    return false;

}

console.log(nearby_az("abcz"));

