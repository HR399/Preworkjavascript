//git hub exercise
function time_conversion(n){
    var num = n;
    var hours = (n/60);
    var rhours = Math.floor(hours);
    //Math.floor returns the largest integer less than equal to a given number
    var minutes = (hours - rhours) *60;
    var rminutes = Math.round(minutes);
    //Math.round returns the value of a number rounded to the nearest integer 0.5+ =>1
    return rhours+ ":" +rminutes;
}

console.log(time_conversion(140));